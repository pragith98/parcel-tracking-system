<?php

use App\Http\Controllers\UserRoleController;
use App\Http\Middleware\AuthenticateWithSanctumCookie;
use Illuminate\Support\Facades\Route;

// Route::middleware(AuthenticateWithSanctumCookie::class)
Route::prefix('user-roles')->group(function () {
    Route::get('/', [UserRoleController::class, 'index']);
    Route::get('/{id}', [UserRoleController::class, 'show']);
    Route::post('/', [UserRoleController::class, 'store']);
    Route::put('/{id}', [UserRoleController::class, 'update']);
    Route::delete('/{id}', [UserRoleController::class, 'destroy']);
});