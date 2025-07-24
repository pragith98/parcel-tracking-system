<?php

namespace App\Repositories\Interfaces;

use App\Http\Requests\CompanyInfo\SaveCompanyInfoRequest;
use App\Models\CompanyInfo;

interface CompanyInfoRepositoryInterface
{
    public function get(): CompanyInfo;

    public function save(SaveCompanyInfoRequest $request): CompanyInfo;
}
