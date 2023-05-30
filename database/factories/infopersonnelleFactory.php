<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;
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
            'user_id' => User::inRandomOrder()->first()->id,
            'nom' => $this->faker->lastName,
            'prenom' => $this->faker->firstName,
            'about' => $this->faker->paragraph,
            'email' => $this->faker->unique()->safeEmail,
            'adresse' => $this->faker->address,
            'tel' => $this->faker->phoneNumber,
        ];
    }
}
