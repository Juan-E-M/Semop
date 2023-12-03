<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('follow_sections', function (Blueprint $table) {
            $table->id();
            $table->double('tdr_amount');
            $table->double('paid_tdr_amount');
            $table->double('et_amount');
            $table->double('paid_et_amount');
            $table->double('requested_amount');
            $table->string('project_plan');
            $table->foreignId('project_id')
                ->nullable()
                ->constrained()
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
        Schema::dropIfExists('follow_sections');
    }
};
