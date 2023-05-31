<?php

namespace Database\Factories;

use App\Models\Cv;
use Illuminate\Database\Eloquent\Factories\Factory;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Competence>
 */
class competenceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'competence' => $this->faker->word,
            'cv_id' => Cv::inRandomOrder()->first()->id,
            
        ];
    }
}
