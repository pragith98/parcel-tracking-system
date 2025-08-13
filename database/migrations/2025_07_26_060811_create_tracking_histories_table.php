<?php

use App\Enums\ParcelStatus;
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
        Schema::create('tracking_histories', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('parcelId');
            $table->string('note', 255)->nullable();
            $table->enum('status', ParcelStatus::getValues())
                ->default(ParcelStatus::CREATED->value);
            $table->uuid('updatedBy')->nullable();
            $table->timestamps();

            $table->foreign('parcelId')->references('id')->on('parcel')
                ->onDelete('cascade');
            $table->foreign('updatedBy')->references('id')->on('users')
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
