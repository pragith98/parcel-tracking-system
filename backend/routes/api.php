<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::prefix('v1')->group(function () {
    require base_path('routes/api/v1/userRoles.php');
    require base_path('routes/api/v1/companyInfo.php');
    require base_path('routes/api/v1/users.php');
    require base_path('routes/api/v1/auth.php');
    require base_path('routes/api/v1/parcels.php');
    require base_path('routes/api/v1/trackingHistories.php');
    require base_path('routes/api/v1/permissions.php');
});
