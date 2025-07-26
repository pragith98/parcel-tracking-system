<?php

namespace App\Providers;

use App\Repositories\AuthRepository;
use App\Repositories\CompanyInfoRepository;
use App\Repositories\Interfaces\AuthRepositoryInterface;
use App\Repositories\Interfaces\CompanyInfoRepositoryInterface;
use App\Repositories\Interfaces\ParcelRepositoryInterface;
use App\Repositories\Interfaces\TrackingHistoryRepositoryInterface;
use App\Repositories\Interfaces\UserRepositoryInterface;
use App\Repositories\Interfaces\UserRoleRepositoryInterface;
use App\Repositories\ParcelRepository;
use App\Repositories\TrackingHistoryRepository;
use App\Repositories\UserRepository;
use App\Repositories\UserRoleRepository;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(UserRoleRepositoryInterface::class, UserRoleRepository::class);
        $this->app->bind(CompanyInfoRepositoryInterface::class, CompanyInfoRepository::class);
        $this->app->bind(UserRepositoryInterface::class, UserRepository::class);
        $this->app->bind(AuthRepositoryInterface::class, AuthRepository::class);
        $this->app->bind(ParcelRepositoryInterface::class, ParcelRepository::class);
        $this->app->bind(TrackingHistoryRepositoryInterface::class, TrackingHistoryRepository::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
