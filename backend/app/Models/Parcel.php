<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class Parcel extends Model
{
    protected $table = 'parcel';

    public $timestamps = true;

    public $incrementing = false;

    protected $keyType = 'string';

    protected $fillable = [
        'remarks',
        'receiverName',
        'receiverTelephone',
        'receiverAddress',
        'receiverEmail',
        'senderName',
        'senderTelephone',
        'senderAddress',
        'senderEmail',
        'estimatedDeliveryDate',
        'pickedUpAt',
        'deliveredAt',
        'code'
    ];

    public function createdByUser()
    {
        return $this->hasOne(User::class, 'id', 'createdBy');
    }

    public function updatedByUser()
    {
        return $this->hasOne(User::class, 'id', 'updatedBy');
    }

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            if (empty($model->id)) {
                $model->id = Str::uuid()->toString();
            }

            // Set created_by, updated_by when creating a new model
            if (Auth::check()) {
                $model->updatedBy = Auth::id();
                $model->createdBy = Auth::id();
            }
        });

        static::updating(function ($model) {
            // Set updated_by when updating an existing model
            if (Auth::check()) {
                $model->updatedBy = Auth::id();
            }
        });
    }
}
