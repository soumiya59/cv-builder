<?php

namespace Database\Factories;

use App\Models\Cv;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Infopersonnelle>
 */
class infopersonnelleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'cv_id' => Cv::inRandomOrder()->first()->id,
            'nom' => $this->faker->lastName,
            'prenom' => $this->faker->firstName,
            'about' => $this->faker->paragraph,
            'email' => $this->faker->unique()->safeEmail,
            // 'adresse' => $this->faker->address,
            'tel' => $this->faker->phoneNumber,
        ];
    }
}