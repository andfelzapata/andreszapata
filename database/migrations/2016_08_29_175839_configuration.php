<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Configuration extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // andres zapata
        // email
        // phone optional,
        // skype, twitter, github, linkedin, etc
        Schema::create('configuration', function (Blueprint $table) {

            $table->increments('id');
            $table->string('email');
            $table->string('phone');
            $table->text('intro');
            $table->text('bio');
            $table->json('external_accounts');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
