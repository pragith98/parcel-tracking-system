<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class TrackingHistory extends Model
{
    protected $table = 'tracking_histories';

    public $timestamps = true;

    public $incrementing = false;

    protected $keyType = 'string';

    protected $fillable = [
        'parcelId',
        'note',
        'status'
    ];

    public function handledBy()
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

            // Set updated_by when creating a new model
            if (Auth::check()) {
                $model->updatedBy = Auth::id();
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
