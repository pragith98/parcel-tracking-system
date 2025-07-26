<?php

namespace App\Http\Resources\TrackingHistory;

use App\Http\Resources\User\UserResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TrackingHistoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'parcelId' => $this->parcelId,
            'note' => $this->note,
            'status' => $this->status,
            'updatedBy' => [
                'id' => $this->handledBy->id,
                'name' => $this->handledBy->name
            ]
        ];
    }

    public function with(Request $request)
    {
        return [
            'success' => true
        ];
    }
}
