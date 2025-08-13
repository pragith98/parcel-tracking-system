<?php

use App\Http\Controllers\CompanyInfoController;
use App\Http\Middleware\AuthenticateWithSanctumCookie;
use Illuminate\Support\Facades\Route;

Route::middleware(AuthenticateWithSanctumCookie::class)
    ->prefix('company-info')
    ->group(function () {
        Route::put('/', [CompanyInfoController::class, 'save']);
    }
);

Route::prefix('company-info')->group(function () {
    Route::get('/', [CompanyInfoController::class, 'show']);
});