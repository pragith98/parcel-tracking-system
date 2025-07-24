<?php

namespace App\Providers;

use App\Repositories\Interfaces\UserRoleRepositoryInterface;
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
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
