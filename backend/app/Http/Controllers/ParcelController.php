<?php

namespace App\Http\Controllers;

use App\Helpers\ApiResponse;
use App\Http\Requests\Parcel\StoreParcelRequest;
use App\Http\Resources\Parcel\ParcelResource;
use App\Repositories\Interfaces\ParcelRepositoryInterface;
use Exception;
use Illuminate\Http\Request;

class ParcelController extends Controller
{
    protected $repository;

    public function __construct(ParcelRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    public function store(StoreParcelRequest $request)
    {
        try {
            $parcel = $this->repository->create($request);
            return new ParcelResource($parcel);
        } catch (Exception $e) { 
            return ApiResponse::error($e->getMessage(), 500);
        }
    }
}
