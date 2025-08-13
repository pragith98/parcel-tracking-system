<?php

namespace App\Repositories\Interfaces;

use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\Request;

interface AuthRepositoryInterface
{
    public function login(LoginRequest $request);

    public function getUser();

    public function logout(Request $request);
}
