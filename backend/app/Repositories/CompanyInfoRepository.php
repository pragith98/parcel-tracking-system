<?php

namespace App\Repositories;

use App\Http\Requests\CompanyInfo\SaveCompanyInfoRequest;
use App\Models\CompanyInfo;
use App\Repositories\Interfaces\CompanyInfoRepositoryInterface;
use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class CompanyInfoRepository implements CompanyInfoRepositoryInterface
{
    private $companyInfo;

    public function __construct(CompanyInfo $companyInfo) 
    {
        $this->companyInfo = $companyInfo;
    }

    public function get(): CompanyInfo
    {
        try {
            return $this->companyInfo->first();
        } catch (ModelNotFoundException $e) {
            throw new Exception('Company info not found', 404);
        }
    }

    private function create(SaveCompanyInfoRequest $request): CompanyInfo
    {
        try {
            $validatedData = $request->validated();

            $data = [
                'name' => $validatedData['name'],
                'address' => $validatedData['address'],
                'telephone' => $validatedData['telephone'],
                'email' => $validatedData['email']
            ];

            return $this->companyInfo->create($data);
        } catch (Exception $e) {
            throw new Exception("Failed to create company info.", 500);
        }
    }

    public function save(SaveCompanyInfoRequest $request): CompanyInfo {
        try {
            $companyInfo = $this->companyInfo->first();

            if (!$companyInfo) {
                return $this->create($request);
            }

            $validatedData = $request->validated();

            $data = [
                'name' => $validatedData['name'],
                'address' => $validatedData['address'],
                'telephone' => $validatedData['telephone'],
                'email' => $validatedData['email']
            ];

            $companyInfo->update($data);
            return $companyInfo;
        } catch (Exception $e) {
            throw new Exception("Failed to update company info.", 500);
        }
    }
}