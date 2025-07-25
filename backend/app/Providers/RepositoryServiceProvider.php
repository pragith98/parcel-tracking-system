<?php

namespace App\Providers;

use App\Repositories\CompanyInfoRepository;
use App\Repositories\Interfaces\CompanyInfoRepositoryInterface;
use App\Repositories\Interfaces\UserRepositoryInterface;
use App\Repositories\Interfaces\UserRoleRepositoryInterface;
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
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
