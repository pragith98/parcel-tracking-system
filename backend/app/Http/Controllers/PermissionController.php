<?php

namespace App\Http\Controllers;

use App\Helpers\ApiResponse;
use App\Http\Requests\Permission\StorePermissionRequest;
use App\Http\Resources\Permission\PermissionResource;
use App\Repositories\Interfaces\PermissionRepositoryInterface;
use Exception;
use Illuminate\Http\Request;

class PermissionController extends Controller
{
    protected $repository;

    public function __construct(PermissionRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    public function store(StorePermissionRequest $request)
    {
        try {
            $permission = $this->repository->create($request);
            return new PermissionResource($permission);
        } catch (Exception $e) { 
            return ApiResponse::error($e->getMessage(), 500);
        }
    }
}
