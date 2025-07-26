<?php

namespace App\Http\Resources\Auth;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AuthResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $userRole = $this->resource['user_role'];
        return [
            'user' => [
                'id' => $this->resource['id'],
                'username' => $this->resource['username'],
                'name' => $this->resource['name'],
                'email' => $this->resource['email'],
                'telephone' => $this->resource['telephone'],
                'nic' => $this->resource['nic'],
                'address' => $this->resource['address'],
            ],
            'permission' => $userRole['permissions']
        ];
    }

    public function with(Request $request)
    {
        return [
            'success' => true
        ];
    }
}
