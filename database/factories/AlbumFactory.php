<?php

namespace Database\Factories;

use App\Models\Album;
use App\Models\Artist;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class AlbumFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Album::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->sentence,
            'user_id' => User::factory()->create(['is_artist' => 1]),
            'cover' => 'https://i.pravatar.cc/300',
            "header_picture" => "https://i.pravatar.cc/300"
        ];
    }
}
