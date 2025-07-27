<?php

namespace App\Http\Resources\Parcel;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class ParcelPaginatedCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'data' => ParcelResource::collection($this->collection['data']),
            'total' => $this->collection['total']
        ];
    }

    public function with(Request $request)
    {
        return [
            'success' => true
        ];
    }
}
