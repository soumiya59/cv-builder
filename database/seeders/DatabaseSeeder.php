<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Education;
use App\Models\Competence;
use App\Models\Experiencepro;
use App\Models\Infopersonnelle;
use App\Models\Language;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(10)->create();
        Education::factory()->count(10)->create();
        Competence::factory()->count(20)->create();
        Experiencepro::factory()->count(22)->create();
        Infopersonnelle::factory()->count(10)->create();
        Language::factory()->count(20)->create();
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
