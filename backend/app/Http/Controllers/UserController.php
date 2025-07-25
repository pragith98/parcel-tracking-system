<?php

namespace App\Http\Controllers;

use App\Helpers\ApiResponse;
use App\Http\Requests\User\StoreUserRequest;
use App\Http\Requests\User\UpdateUserPasswordRequest;
use App\Http\Requests\User\UpdateUserRequest;
use App\Http\Resources\User\UserResource;
use App\Repositories\Interfaces\UserRepositoryInterface;
use Exception;
use Illuminate\Http\Request;

class UserController extends Controller
{
    protected $repository;

    public function __construct(UserRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    public function index()
    {
        try {
            $users = $this->repository->getAll();
            return UserResource::collection($users);
        } catch (Exception $e) {
            return ApiResponse::error($e->getMessage(), 404);
        }
    }

    public function show(string $id)
    {
        try {
            $user = $this->repository->getById($id);
            return new UserResource($user);
        } catch (Exception $e) {
            return ApiResponse::error($e->getMessage(), 404);
        }
    }

    public function store(StoreUserRequest $request)
    {
        try {
            $user = $this->repository->create($request);
            return new UserResource($user);
        } catch (Exception $e) { 
            return ApiResponse::error($e->getMessage(), 500);
        }
    }

    public function update(
        string $id,
        UpdateUserRequest $request
    ) {
        try {
            $userRole = $this->repository->update($id, $request);
            return new UserResource($userRole);
        } catch (Exception $e) { 
            return ApiResponse::error($e->getMessage(), 500);
        }
    }

    public function updatePassword(
        string $id,
        UpdateUserPasswordRequest $request
    ) {
        try {
            $this->repository->updatePassword($id, $request);
            return response()->json(['success' => true], 200);
        } catch (Exception $e) { 
            return ApiResponse::error($e->getMessage(), 500);
        }
    }

    public function destroy(string $id)
    {
        try {
            $this->repository->delete($id);
            return response()->json(['success' => true], 200);
        } catch (Exception $e) {
            return ApiResponse::error($e->getMessage(), 404);
        }
    }
}
