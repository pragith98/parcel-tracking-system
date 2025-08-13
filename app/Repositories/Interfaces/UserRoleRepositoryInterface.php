<?php

namespace App\Repositories\Interfaces;

use App\Http\Requests\UserRole\StoreUserRoleRequest;
use App\Http\Requests\UserRole\UpdateUserRoleRequest;
use App\Models\UserRole;
use Illuminate\Support\Collection;

interface UserRoleRepositoryInterface
{
    public function getAll(): Collection;

    public function getById(string $id): UserRole;

    public function create(StoreUserRoleRequest $request): UserRole;

    public function update(
        string $id,
        UpdateUserRoleRequest $request
    ): UserRole;

    public function delete(string $id): bool;
    
    public function isDeletable(string $id);
}
