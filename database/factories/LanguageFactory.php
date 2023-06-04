<?php

namespace Database\Factories;

use App\Models\Cv;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Language>
 */
class languageFactory extends Factory
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
            'language' => $this->faker->languageCode,
            'Level' => $this->faker->randomElement(['a1', 'a2', 'b1','b2','b1']),
        ];
    }
}
