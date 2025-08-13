<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\UserRole;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'userRoleId' => 'a1fd7c92-7843-11f0-b2d2-d8c497a84272',
            'username' => 'pragith',
            'password' => 'pragith',
            'name' => 'Pragith Thilakarathna',
            'email' => 'test@example.com',
            'telephone' => '0715408871',
            'nic' => '121231212v',
            'address' => 'Matale',
        ]);
    }
}
