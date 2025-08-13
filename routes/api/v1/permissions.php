<?php

use App\Http\Controllers\PermissionController;
use App\Http\Middleware\AuthenticateWithSanctumCookie;
use Illuminate\Support\Facades\Route;

Route::middleware(AuthenticateWithSanctumCookie::class)
    ->prefix('permissions')
    ->group(function () {
        Route::post('/', [PermissionController::class, 'store']);
        Route::delete('/{id}', [PermissionController::class, 'destroy']);
    }
);