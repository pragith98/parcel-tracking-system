<?php

namespace App\Repositories\Interfaces;

use App\Http\Requests\Parcel\StoreParcelRequest;
use App\Http\Requests\Parcel\UpdateParcelRequest;
use App\Models\Parcel;
use Illuminate\Support\Collection;

interface ParcelRepositoryInterface
{
    public function getAll(): Collection;

    public function getById(string $id): Parcel;

    public function create(StoreParcelRequest $request): Parcel;

    public function update(
        string $id,
        UpdateParcelRequest $request
    ): Parcel;

    public function delete(string $id): bool;
    
    public function isDeletable(string $id);
}
