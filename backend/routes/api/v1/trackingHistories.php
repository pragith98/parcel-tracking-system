<?php

use App\Http\Controllers\TrackingHistoryController;
use App\Http\Middleware\AuthenticateWithSanctumCookie;
use Illuminate\Support\Facades\Route;

Route::prefix('tracking-histories')
    ->group(function () {
        Route::post('/', [TrackingHistoryController::class, 'store']);
    }
);