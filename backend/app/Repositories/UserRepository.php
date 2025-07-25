<?php

namespace App\Repositories;

use App\Http\Requests\User\StoreUserRequest;
use App\Http\Requests\User\UpdateUserPasswordRequest;
use App\Http\Requests\User\UpdateUserRequest;
use App\Models\User;
use App\Repositories\Interfaces\UserRepositoryInterface;
use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Collection;

class UserRepository implements UserRepositoryInterface
{
    private $user;

    public function __construct(User $user) 
    {
        $this->user = $user;
    }

    public function getAll(): Collection
    {
        try {
            return $this->user->all();
        } catch (ModelNotFoundException  $e) {
            throw new Exception('User not found', 404);
        }
    }

    public function getById(string $id): User
    {
        try {
            return $this->user->findOrFail($id);
        } catch (ModelNotFoundException $e) {
            throw new Exception("User with ID {$id} not found.", 404);
        }
    }

    public function create(StoreUserRequest $request): User
    {
        try {
            $validatedData = $request->validated();

            $data = [
                'name' => $validatedData['name'],
                'email' => $validatedData['email'],
                'telephone' => $validatedData['telephone'],
                'nic' => $validatedData['nic'],
                'address' => $validatedData['address'],
                'password' => $validatedData['password']
            ];

            return $this->user->create($data);
        } catch (Exception $e) {
            throw new Exception("Failed to create user.", 500);
        }
    }

    public function update(
        string $id,
        UpdateUserRequest $request
    ): User {
        try {
            $user = $this->user->findOrFail($id);
            $validatedData = $request->validated();

            $data = [
                'name' => $validatedData['name'],
                'email' => $validatedData['email'],
                'telephone' => $validatedData['telephone'],
                'nic' => $validatedData['nic'],
                'address' => $validatedData['address']
            ];

            $user->update($data);
            return $user;
        } catch (ModelNotFoundException $e) {
            throw new Exception("User with ID {$id} not found.", 404);
        } catch (Exception $e) {
            throw new Exception("Failed to update user.", 500);
        }
    }

    public function updatePassword(
        string $id,
        UpdateUserPasswordRequest $request
    ): bool {
        try {
            $user = $this->user->findOrFail($id);
            $validatedData = $request->validated();

            $data = [
                'password' => $validatedData['password']
            ];

            $user->update($data);
            return true;
        } catch (ModelNotFoundException $e) {
            throw new Exception("User with ID {$id} not found.", 404);
        } catch (Exception $e) {
            throw new Exception("Failed to update user.", 500);
        }
    }

    public function delete(string $id): bool
    {
        try {
            $user = $this->user->findOrFail($id);

            $user->delete();
            return true;
        } catch (ModelNotFoundException $e) {
            throw new Exception("User with ID {$id} not found.", 404);
        } catch (Exception $e) {
            throw new Exception("Failed to delete user.", 500);
        }
    }

    public function isDeletable(string $id)
    {
        $isDeletable = true;
        $messages = [];
        try {
            return true;
        } catch (ModelNotFoundException $e) {
            throw new Exception("User with ID {$id} not found.", 404);
        }
    }
}
