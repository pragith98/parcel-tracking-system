<?php

namespace App\Repositories\Interfaces;

use App\Http\Requests\Permission\StorePermissionRequest;
use App\Models\Permission;

interface PermissionRepositoryInterface
{
    public function create(StorePermissionRequest $request): Permission;

    public function delete(string $id): bool;   
}
