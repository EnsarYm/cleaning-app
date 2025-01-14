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
        Schema::create('menus', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // Menü adı
            $table->string('url')->nullable(); // Menü öğesi için URL
            $table->integer('parent_id')->nullable(); // Ana menü öğesi için parent_id
            $table->boolean('is_active')->default(1); // Aktif/Pasif durumu
            $table->integer('sort_order')->default(0); // Sıralama
            $table->timestamps(); // Oluşturulma ve güncellenme tarihleri
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('menus');
    }
};
