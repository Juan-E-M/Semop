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
        Schema::create('deliverables', function (Blueprint $table) {
            $table->id();
            $table->string('denomination');
            $table->string('description');
            $table->string('technical_situation')->default('0%');
            $table->string('financial_situation')->default('0%');
            $table->unsignedBigInteger('milestone_id');
            $table->foreign('milestone_id')
                ->references('id')
                ->on('milestones')
                ->onDelete('cascade');
            $table->unsignedBigInteger('project_id');
                $table->foreign('project_id')
                    ->references('id')
                    ->on('projects')
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
        Schema::dropIfExists('deliverables');
    }
};
