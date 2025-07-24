<?php

namespace App\Http\Resources\UserRole;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class UserRoleCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'data' => UserRoleResource::collection($this->collection['data']),
            'total' => $this->collection->count()
        ];
    }

    public function with(Request $request)
    {
        return [
            'success' => true
        ];
    }
}
