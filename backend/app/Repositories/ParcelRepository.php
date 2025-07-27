<?php

namespace App\Repositories;

use App\Http\Requests\Parcel\PaginatedParcelRequest;
use App\Http\Requests\Parcel\StoreParcelRequest;
use App\Http\Requests\Parcel\UpdateParcelRequest;
use App\Models\Parcel;
use App\Repositories\Interfaces\ParcelRepositoryInterface;
use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Log;

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
            $query = $this->parcel->query();
            $paginated = $query->paginate($limit, ['*'], 'page', $page);

            return [
                'data' => $paginated->items(),
                'total' => $paginated->total()
            ];
        } catch (ModelNotFoundException $e) {
            Log::debug($e);
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
                'receiverEmail' => $validatedData['receiverEmail'],
                'senderName' => $validatedData['senderName'],
                'senderTelephone' => $validatedData['senderTelephone'],
                'senderAddress' => $validatedData['senderAddress'],
                'senderEmail' => $validatedData['senderEmail'],
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
                'senderName' => $validatedData['senderName'],
                'senderTelephone' => $validatedData['senderTelephone'],
                'senderAddress' => $validatedData['senderAddress'],
                'senderEmail' => $validatedData['senderEmail'],
                'estimatedDeliveryDate' => $validatedData['estimatedDeliveryDate'],
            ];

            $parcel->update($data);
            return $parcel;
        } catch (ModelNotFoundException $e) {
            throw new Exception("Parcel with ID {$id} not found.", 404);
        } catch (Exception $e) {
            Log::debug($e);
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