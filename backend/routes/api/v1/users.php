<?php

use App\Http\Controllers\UserController;
use App\Http\Middleware\AuthenticateWithSanctumCookie;
use Illuminate\Support\Facades\Route;

// Route::middleware(AuthenticateWithSanctumCookie::class)
Route::prefix('users')->group(function () {
    Route::post('/', [UserController::class, 'store']);
    Route::put('/{id}', [UserController::class, 'update']);
});