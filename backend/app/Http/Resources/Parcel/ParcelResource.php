<?php

namespace App\Http\Resources\Parcel;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ParcelResource extends JsonResource
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
            'remarks' => $this->remarks,
            'receiverName' => $this->receiverName,
            'receiverTelephone' => $this->receiverTelephone,
            'receiverAddress' => $this->receiverAddress,
            'receiverEmail' => $this->receiverEmail,
            'receiverCity' => $this->receiverCity,
            'senderName' => $this->senderName,
            'senderTelephone' => $this->senderTelephone,
            'senderAddress' => $this->senderAddress,
            'senderEmail' => $this->senderEmail,
            'senderCity' => $this->senderCity,
            'estimatedDeliveryDate' => $this->estimatedDeliveryDate,
            'pickedUpAt' => $this->pickedUpAt,
            'deliveredAt' => $this->deliveredAt,
            'code' => $this->code,
            'createdAt' => $this->created_at,
            'updatedAt' => $this->updated_at,
            'createdBy' => [
                'id' => $this->createdByUser->id,
                'name' => $this->createdByUser->name
            ],
            'updatedBy' => [
                'id' => $this->updatedByUser->id,
                'name' => $this->updatedByUser->name
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
