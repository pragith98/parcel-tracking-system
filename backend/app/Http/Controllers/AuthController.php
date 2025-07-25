<?php

namespace App\Http\Controllers;

use App\Helpers\ApiResponse;
use App\Http\Requests\Auth\LoginRequest;
use App\Repositories\Interfaces\AuthRepositoryInterface;
use Exception;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    protected $repository;

    public function __construct(AuthRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    public function login(LoginRequest $request)
    {
        try {
            return $this->repository->login($request);
        } catch (Exception $e) { 
            return ApiResponse::error($e->getMessage(), 500);
        }
    }

    public function logout(Request $request)
    {
        try {
            return $this->repository->logout($request);
        } catch (Exception $e) { 
            return ApiResponse::error($e->getMessage(), 500);
        }
    }
}
