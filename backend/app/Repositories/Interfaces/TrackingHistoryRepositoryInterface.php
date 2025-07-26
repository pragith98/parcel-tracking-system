<?php

namespace App\Repositories\Interfaces;

use App\Http\Requests\TrackingHistory\StoreTrackingHistoryRequest;
use App\Models\TrackingHistory;
use Illuminate\Support\Collection;

interface TrackingHistoryRepositoryInterface
{
    public function create(StoreTrackingHistoryRequest $request): TrackingHistory;

    public function getByParcelId(string $parcelId): Collection;

    public function delete(string $id): bool;
}
