<?php

namespace App\Http\Controllers;

use App\Helpers\ApiResponse;
use App\Http\Requests\TrackingHistory\StoreTrackingHistoryRequest;
use App\Http\Resources\TrackingHistory\TrackingHistoryResource;
use App\Repositories\Interfaces\TrackingHistoryRepositoryInterface;
use Exception;
use Illuminate\Http\Request;

class TrackingHistoryController extends Controller
{
    protected $repository;

    public function __construct(TrackingHistoryRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    public function getByParcelId(string $id)
    {
        try {
            $histories = $this->repository->getByParcelId($id);
            return TrackingHistoryResource::collection($histories);
        } catch (Exception $e) {
            return ApiResponse::error($e->getMessage(), 404);
        }
    }

    public function store(StoreTrackingHistoryRequest $request)
    {
        try {
            $history = $this->repository->create($request);
            return new TrackingHistoryResource($history);
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
