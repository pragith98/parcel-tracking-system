<?php

namespace App\Http\Controllers;

use App\Helpers\ApiResponse;
use App\Http\Requests\Parcel\PaginatedParcelRequest;
use App\Http\Requests\Parcel\StoreParcelRequest;
use App\Http\Requests\Parcel\UpdateParcelRequest;
use App\Http\Resources\Parcel\ParcelPaginatedCollection;
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

    public function index(PaginatedParcelRequest $request)
    {
        try {
            $parcels = $this->repository->getAll($request);
            return new ParcelPaginatedCollection($parcels);
            return $parcels;
        } catch (Exception $e) {
            return ApiResponse::error($e->getMessage(), 404);
        }
    }

    public function show(string $id)
    {
        try {
            $parcel = $this->repository->getById($id);
            return new ParcelResource($parcel);
        } catch (Exception $e) {
            return ApiResponse::error($e->getMessage(), 404);
        }
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

    public function update(
        string $id,
        UpdateParcelRequest $request
    ) {
        try {
            $parcel = $this->repository->update($id, $request);
            return new ParcelResource($parcel);
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
