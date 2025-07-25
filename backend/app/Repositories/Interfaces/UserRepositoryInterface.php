<?php

namespace App\Repositories\Interfaces;

use App\Http\Requests\User\StoreUserRequest;
use App\Http\Requests\User\UpdateUserPasswordRequest;
use App\Http\Requests\User\UpdateUserRequest;
use App\Models\User;
use Illuminate\Support\Collection;

interface UserRepositoryInterface
{
    public function getAll(): Collection;

    public function getById(string $id): User;

    public function create(StoreUserRequest $request): User;

    public function update(
        string $id,
        UpdateUserRequest $request
    ): User;

    public function updatePassword(
        string $id,
        UpdateUserPasswordRequest $request
    ): bool;

    public function delete(string $id): bool;
    
    public function isDeletable(string $id);
}
