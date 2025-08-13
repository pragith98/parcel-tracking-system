<?php

namespace App\Providers;

use App\Events\UserRegistered;
use App\Listeners\SendUserRegisteredEmailListner;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\ServiceProvider;

class EventServiceProvider extends ServiceProvider
{

    protected $listen = [
        UserRegistered::class => [
            SendUserRegisteredEmailListner::class
        ]
    ];

    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
