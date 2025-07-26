<?php

namespace App\Repositories;

use App\Http\Requests\TrackingHistory\StoreTrackingHistoryRequest;
use App\Models\TrackingHistory;
use App\Repositories\Interfaces\TrackingHistoryRepositoryInterface;
use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Log;

class TrackingHistoryRepository implements TrackingHistoryRepositoryInterface
{
    private $trackingHistory;

    public function __construct(TrackingHistory $trackingHistory) 
    {
        $this->trackingHistory = $trackingHistory;
    }

    public function getByParcelId(string $parcelId): Collection
    {
        try {
            return $this->trackingHistory->findOrFail($parcelId);
        } catch (ModelNotFoundException $e) {
            throw new Exception("Tracking history with parcel ID {$parcelId} not found.", 404);
        }
    }

    public function create(StoreTrackingHistoryRequest $request): TrackingHistory
    {
        try {
            $validatedData = $request->validated();

            $data = [
                'parcelId' => $validatedData['parcelId'],
                'note' => $validatedData['note'],
                'status' => $validatedData['status']
            ];

            return $this->trackingHistory->create($data);
        } catch (Exception $e) {
            throw new Exception("Failed to create tracking history.", 500);
        }
    }

    public function delete(string $id): bool
    {
        try {
            $trackingHistory = $this->trackingHistory->findOrFail($id);

            $trackingHistory->delete();
            return true;
        } catch (ModelNotFoundException $e) {
            throw new Exception("Tracking history with ID {$id} not found.", 404);
        } catch (Exception $e) {
            throw new Exception("Failed to delete tracking history.", 500);
        }
    }
}
