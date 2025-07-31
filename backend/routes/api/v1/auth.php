<?php

use App\Http\Controllers\AuthController;
use App\Http\Middleware\AuthenticateWithSanctumCookie;
use Illuminate\Support\Facades\Route;

Route::prefix('auth')->group(function () {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/logout', [AuthController::class, 'logout']);
});

Route::middleware(AuthenticateWithSanctumCookie::class)
    ->prefix('auth')
    ->group(function () {
        Route::get('/user', [AuthController::class, 'getUser']);
    }
);