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
            $table->string('remarks', 255)->nullable();
            $table->string('receiverName', 255);
            $table->string('receiverTelephone', 10);
            $table->string('receiverAddress', 255);
            $table->string('receiverEmail', 255);
            $table->string('senderName', 255);
            $table->string('senderTelephone', 10);
            $table->string('senderAddress', 255);
            $table->string('senderEmail', 255);
            $table->date('estimatedDeliveryDate')->nullable();
            $table->date('pickedUpAt')->nullable();
            $table->date('deliveredAt')->nullable();
            $table->string('code', 255);
            $table->timestamps();
            $table->uuid('updatedBy')->nullable();
            $table->uuid('createdBy')->nullable();

            $table->foreign('updatedBy')->references('id')->on('users')
                ->onDelete('set null');
            $table->foreign('createdBy')->references('id')->on('users')
                ->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tracking_histories');
    }
};
