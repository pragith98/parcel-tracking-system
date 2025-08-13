<?php

namespace App\Repositories;

use App\Http\Requests\Parcel\PaginatedParcelRequest;
use App\Http\Requests\Parcel\StoreParcelRequest;
use App\Http\Requests\Parcel\UpdateParcelRequest;
use App\Models\Parcel;
use App\Repositories\Interfaces\ParcelRepositoryInterface;
use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class ParcelRepository implements ParcelRepositoryInterface
{
    private $parcel;

    public function __construct(Parcel $parcel) 
    {
        $this->parcel = $parcel;
    }

    public function getAll(PaginatedParcelRequest $request): array
    {
        $limit = $request->getLimit();
        $page = $request->getPage();

        try {
            $validatedRequest = $request->validated();
            $completed = $validatedRequest['completed'] ?? 'NOT_COMPLETED';
            $senderName = $validatedRequest['senderName'] ?? null;
            $senderTelephone = $validatedRequest['senderTelephone'] ?? null;
            $senderCity = $validatedRequest['senderCity'] ?? null;
            $senderAddress = $validatedRequest['senderAddress'] ?? null;
            $receiverName = $validatedRequest['receiverName'] ?? null;
            $receiverTelephone = $validatedRequest['receiverTelephone'] ?? null;
            $receiverCity = $validatedRequest['receiverCity'] ?? null;
            $receiverAddress = $validatedRequest['receiverAddress'] ?? null;
            $code = $validatedRequest['code'] ?? null;
            $pickedUpAt = $validatedRequest['pickedUpAt'] ?? null;
            $deliveredAt = $validatedRequest['deliveredAt'] ?? null;
            $createdAt = $validatedRequest['createdAt'] ?? null;

            $query = $this->parcel->query();

            if ($completed == 'NOT_COMPLETED') {
                $query->whereNull('deliveredAt');
            } else {
                $query->whereNotNull('deliveredAt');
            }
            if ($senderName) {
                $query->where('senderName', 'like', '%' . $senderName . '%');
            }
            if ($senderTelephone) {
                $query->where('senderTelephone', 'like', '%' . $senderTelephone . '%');
            }
            if ($senderCity) {
                $query->where('senderCity', 'like', '%' . $senderCity . '%');
            }
            if ($senderAddress) {
                $query->where('senderAddress', 'like', '%' . $senderAddress . '%');
            }
            if ($receiverName) {
                $query->where('receiverName', 'like', '%' . $receiverName . '%');
            }
            if ($receiverTelephone) {
                $query->where('receiverTelephone', 'like', '%' . $receiverTelephone . '%');
            }
            if ($receiverCity) {
                $query->where('receiverCity', 'like', '%' . $receiverCity . '%');
            }
            if ($receiverAddress) {
                $query->where('receiverAddress', 'like', '%' . $receiverAddress . '%');
            }
            if ($code) {
                $query->where('code', 'like', '%' . $code . '%');
            }
            if ($pickedUpAt) {
                $query->where('pickedUpAt', 'like', '%' . $pickedUpAt . '%');
            }
            if ($deliveredAt) {
                $query->where('deliveredAt', 'like', '%' . $deliveredAt . '%');
            }
            if ($createdAt) {
                $query->where('created_at', 'like', '%' . $createdAt . '%');
            }

            $paginated = $query->paginate($limit, ['*'], 'page', $page);

            return [
                'data' => $paginated->items(),
                'total' => $paginated->total(),
                'currentPage' => $paginated->currentPage(),
                'lastPage' => $paginated->lastPage(),
                'perPage' => $paginated->perPage()
            ];
        } catch (ModelNotFoundException $e) {
            throw new Exception('Parcel not found', 404);
        }
    }

    public function getById(string $id): Parcel
    {
        try {
            return $this->parcel->findOrFail($id);
        } catch (ModelNotFoundException $e) {
            throw new Exception("Parcel with ID {$id} not found.", 404);
        }
    }

    public function create(StoreParcelRequest $request): Parcel
    {
        try {
            $validatedData = $request->validated();

            $data = [
                'remarks' => $validatedData['remarks'],
                'receiverName' => $validatedData['receiverName'],
                'receiverTelephone' => $validatedData['receiverTelephone'],
                'receiverAddress' => $validatedData['receiverAddress'],
                'receiverCity' => $validatedData['receiverCity'],
                'receiverEmail' => $validatedData['receiverEmail'],
                'senderName' => $validatedData['senderName'],
                'senderTelephone' => $validatedData['senderTelephone'],
                'senderAddress' => $validatedData['senderAddress'],
                'senderEmail' => $validatedData['senderEmail'],
                'senderCity' => $validatedData['senderCity'],
                'code' => uniqid('parcel_')
            ];

            return $this->parcel->create($data);
        } catch (Exception $e) {
            throw new Exception("Failed to create parcel.", 500);
        }
    }

    public function update(
        string $id,
        UpdateParcelRequest $request
    ): Parcel {
        try {
            $parcel = $this->parcel->findOrFail($id);
            $validatedData = $request->validated();

            $data = [
                'remarks' => $validatedData['remarks'],
                'receiverName' => $validatedData['receiverName'],
                'receiverTelephone' => $validatedData['receiverTelephone'],
                'receiverAddress' => $validatedData['receiverAddress'],
                'receiverEmail' => $validatedData['receiverEmail'],
                'receiverCity' => $validatedData['receiverCity'],
                'senderName' => $validatedData['senderName'],
                'senderTelephone' => $validatedData['senderTelephone'],
                'senderAddress' => $validatedData['senderAddress'],
                'senderEmail' => $validatedData['senderEmail'],
                'senderCity' => $validatedData['senderCity'],
                'estimatedDeliveryDate' => $validatedData['estimatedDeliveryDate'],
            ];

            $parcel->update($data);
            return $parcel;
        } catch (ModelNotFoundException $e) {
            throw new Exception("Parcel with ID {$id} not found.", 404);
        } catch (Exception $e) {
            throw new Exception("Failed to update parcel.", 500);
        }
    }

    public function delete(string $id): bool
    {
        try {
            $parcel = $this->parcel->findOrFail($id);

            $parcel->delete();
            return true;
        } catch (ModelNotFoundException $e) {
            throw new Exception("Parcel with ID {$id} not found.", 404);
        } catch (Exception $e) {
            throw new Exception("Failed to delete parcel.", 500);
        }
    }

    public function isDeletable(string $id)
    {
        $isDeletable = true;
        $messages = [];
        try {
            return true;
        } catch (ModelNotFoundException $e) {
            throw new Exception("Parcel with ID {$id} not found.", 404);
        }
    }
}