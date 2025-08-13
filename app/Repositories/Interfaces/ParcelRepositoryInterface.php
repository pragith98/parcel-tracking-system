<?php

namespace App\Repositories\Interfaces;

use App\Http\Requests\Parcel\PaginatedParcelRequest;
use App\Http\Requests\Parcel\StoreParcelRequest;
use App\Http\Requests\Parcel\UpdateParcelRequest;
use App\Models\Parcel;

interface ParcelRepositoryInterface
{
    public function getAll(PaginatedParcelRequest $request): array;

    public function getById(string $id): Parcel;

    public function create(StoreParcelRequest $request): Parcel;

    public function update(
        string $id,
        UpdateParcelRequest $request
    ): Parcel;

    public function delete(string $id): bool;
    
    public function isDeletable(string $id);
}
