<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
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

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            if (empty($model->id)) {
                $model->id = Str::uuid()->toString();
            }
        });
    }
}
