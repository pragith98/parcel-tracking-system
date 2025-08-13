<?php

namespace App\Enums;

enum ParcelStatus: string
{
    case CREATED = 'created';
    case ASSIGNED = 'assigned';
    case PICKED_UP = 'pickedUp';
    case IN_TRANSIT = 'inTransit';
    case OUT_OF_DELIVERY = 'outOfDelivery';
    case DELIVERED = 'delivered';
    case FAILED = 'failed';

    public static function getValues(): array
    {
        return array_column(self::cases(), 'value');
    }
}
