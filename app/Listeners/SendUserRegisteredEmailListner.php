<?php

namespace App\Listeners;

use App\Events\UserRegistered;
use App\Jobs\SendUserRegisteredEmail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SendUserRegisteredEmailListner
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(UserRegistered $event): void
    {
        SendUserRegisteredEmail::dispatch($event->user);
    }
}
