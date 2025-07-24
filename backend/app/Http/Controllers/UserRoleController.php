<?php

namespace App\Http\Controllers;

use App\Helpers\ApiResponse;
use App\Http\Requests\UserRole\StoreUserRoleRequest;
use App\Http\Resources\UserRole\UserRoleResource;
use App\Repositories\Interfaces\UserRoleRepositoryInterface;
use Exception;

class UserRoleController extends Controller
{
    protected $repository;

    public function __construct(UserRoleRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    public function index()
    {
        try {
            $userRoles = $this->repository->getAll();
            return UserRoleResource::collection($userRoles);
        } catch (Exception $e) {
            return ApiResponse::error($e->getMessage(), 404);
        }
    }

    public function store(StoreUserRoleRequest $request)
    {
        try {
            $userRole = $this->repository->create($request);
            return new UserRoleResource($userRole);
        } catch (Exception $e) { 
            return ApiResponse::error($e->getMessage(), 500);
        }
    }
}
