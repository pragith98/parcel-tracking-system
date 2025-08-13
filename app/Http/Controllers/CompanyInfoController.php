<?php

namespace App\Http\Controllers;

use App\Helpers\ApiResponse;
use App\Http\Requests\CompanyInfo\SaveCompanyInfoRequest;
use App\Http\Resources\CompanyInfo\CompanyInfoResource;
use App\Repositories\Interfaces\CompanyInfoRepositoryInterface;
use Exception;
use Illuminate\Http\Request;

class CompanyInfoController extends Controller
{
    protected $repository;

    public function __construct(CompanyInfoRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    public function show()
    {
        try {
            $companyInfo = $this->repository->get();
            return new CompanyInfoResource($companyInfo);
        } catch (Exception $e) {
            return ApiResponse::error($e->getMessage(), 404);
        }
    }

    public function save(SaveCompanyInfoRequest $request) {
        try {
            $companyInfo = $this->repository->save($request);
            return new CompanyInfoResource($companyInfo);
        } catch (Exception $e) { 
            return ApiResponse::error($e->getMessage(), 500);
        }
    }
}