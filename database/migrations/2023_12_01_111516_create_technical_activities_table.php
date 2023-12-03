<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('technical_activities', function (Blueprint $table) {
            $table->id();
            $table->text('how');
            $table->string('in_charge');
            $table->date('start_date');
            $table->date('end_date');
            $table->text('observation');
            $table->foreignId('deliverable_id')
                ->nullable()
                ->constrained('deliverables')
                ->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('technical_activities');
    }
};
