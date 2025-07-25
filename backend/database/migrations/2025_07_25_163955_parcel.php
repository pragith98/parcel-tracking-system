<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('parcel', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('remarks', 255);
            $table->string('receiverName', 255);
            $table->string('receiverTelephone', 255);
            $table->string('receiverAddress', 255);
            $table->string('receiverEmail', 255);
            $table->string('senderName', 255);
            $table->string('senderTelephone', 255);
            $table->string('senderAddress', 255);
            $table->string('senderEmail', 255);
            $table->date('estimatedDelivery_date');
            $table->date('pickedUpAt');
            $table->date('deliveredAt');
            $table->string('code', 255);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
