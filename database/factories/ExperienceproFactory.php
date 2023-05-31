<?php

namespace Database\Factories;

use App\Models\Cv;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Experiencepro>
 */
class experienceproFactory extends Factory
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
            'position' => $this->faker->jobTitle,
            'location' => $this->faker->city,
            'dateDebut' => $this->faker->dateTimeBetween($startDate = '-5 years', 'now'),
            'dateFin' => $this->faker->dateTimeBetween($startDate = '-5 years', 'now'),
            'description' => $this->faker->paragraph,
        ];
    }
}
