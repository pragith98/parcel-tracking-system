<?php

use App\Http\Controllers\ParcelController;
use App\Http\Middleware\AuthenticateWithSanctumCookie;
use Illuminate\Support\Facades\Route;

Route::prefix('parcels')
    ->group(function () {
        Route::post('/', [ParcelController::class, 'store']);
        Route::put('/{id}', [ParcelController::class, 'update']);
    }
);