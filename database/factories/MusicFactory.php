<?php

namespace Database\Factories;

use App\Models\Album;
use App\Models\Music;
use Illuminate\Database\Eloquent\Factories\Factory;

class MusicFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Music::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'album_id' => Album::factory(),
            'title' => $this->faker->sentence,
            'plays' => $this->faker->randomDigit(),
            'path' => ''
        ];
    }
}
