<?php

use App\Http\Controllers\TrackingHistoryController;
use App\Http\Middleware\AuthenticateWithSanctumCookie;
use Illuminate\Support\Facades\Route;

Route::prefix('tracking-histories')
    ->group(function () {
        Route::get('/parcel/{id}', [TrackingHistoryController::class, 'getByParcelId']);
        Route::post('/', [TrackingHistoryController::class, 'store']);
        Route::delete('/{id}', [TrackingHistoryController::class, 'destroy']);
    }
);