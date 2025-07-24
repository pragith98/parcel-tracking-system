<?php

namespace App\Repositories;

use App\Http\Requests\UserRole\StoreUserRoleRequest;
use App\Http\Requests\UserRole\UpdateUserRoleRequest;
use App\Models\UserRole;
use App\Repositories\Interfaces\UserRoleRepositoryInterface;
use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Collection;

class UserRoleRepository implements UserRoleRepositoryInterface
{
    private $userRole;

    public function __construct(UserRole $userRole) 
    {
        $this->userRole = $userRole;
    }

    public function getAll(): Collection
    {
        try {
            return $this->userRole->all();
        } catch (ModelNotFoundException $e) {
            throw new Exception('User role not found', 404);
        }
    }

    public function getById(string $id): UserRole
    {
        try {
            return $this->userRole->findOrFail($id);
        } catch (ModelNotFoundException $e) {
            throw new Exception("User role with ID {$id} not found.", 404);
        }
    }

    public function create(StoreUserRoleRequest $request): UserRole
    {
        try {
            $validatedData = $request->validated();

            $data = [
                'name' => $validatedData['name']
            ];

            return $this->userRole->create($data);
        } catch (Exception $e) {
            throw new Exception("Failed to create User role.", 500);
        }
    }

    public function update(
        string $id,
        UpdateUserRoleRequest $request
    ): UserRole {
        try {
            $userRole = $this->userRole->findOrFail($id);
            $validatedData = $request->validated();

            $data = [
                'name' => $validatedData['name']
            ];

            return $userRole->update($data);
        } catch (ModelNotFoundException $e) {
            throw new Exception("User role with ID {$id} not found.", 404);
        } catch (Exception $e) {
            throw new Exception("Failed to update user role.", 500);
        }
    }

    public function delete(string $id): bool
    {
        try {
            $userRole = $this->userRole->findOrFail($id);

            $userRole->delete();
            return true;
        } catch (ModelNotFoundException $e) {
            throw new Exception("User role with ID {$id} not found.", 404);
        } catch (Exception $e) {
            throw new Exception("Failed to delete user role.", 500);
        }
    }

    public function isDeletable(string $id)
    {
        $isDeletable = true;
        $messages = [];
        try {
            return true;
        } catch (ModelNotFoundException $e) {
            throw new Exception("User role with ID {$id} not found.", 404);
        }
    }
}