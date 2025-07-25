<?php

use App\Http\Controllers\ParcelController;
use App\Http\Middleware\AuthenticateWithSanctumCookie;
use Illuminate\Support\Facades\Route;

Route::prefix('parcels')
    ->group(function () {
        Route::get('/', [ParcelController::class, 'index']);
        Route::get('/{id}', [ParcelController::class, 'show']);
        Route::post('/', [ParcelController::class, 'store']);
        Route::put('/{id}', [ParcelController::class, 'update']);
        Route::delete('/{id}', [ParcelController::class, 'destroy']);
    }
);