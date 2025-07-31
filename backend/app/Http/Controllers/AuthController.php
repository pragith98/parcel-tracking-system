<?php

namespace App\Http\Controllers;

use App\Helpers\ApiResponse;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Resources\Auth\AuthResource;
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
            $auth = $this->repository->login($request);
            $userData = json_decode($auth->getContent(), true);
            $transformedData = new AuthResource($userData);
    
            return response($transformedData)
                ->withCookie($auth->headers->getCookies()[0]);
        } catch (Exception $e) { 
            return ApiResponse::error($e->getMessage(), 500);
        }
    }

    public function getUser()
    {
        try {
            $auth = $this->repository->getUser();
            $userData = json_decode($auth->getContent(), true);
            $transformedData = new AuthResource($userData);
    
            return response($transformedData);
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
