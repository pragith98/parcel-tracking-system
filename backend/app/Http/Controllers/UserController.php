<?php

namespace App\Http\Controllers;

use App\Helpers\ApiResponse;
use App\Http\Requests\User\StoreUserRequest;
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

    public function store(StoreUserRequest $request)
    {
        try {
            $user = $this->repository->create($request);
            return new UserResource($user);
        } catch (Exception $e) { 
            return ApiResponse::error($e->getMessage(), 500);
        }
    }
}
