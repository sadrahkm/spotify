<?php

namespace Tests\Setup;

use App\Models\Album;
use App\Models\User;

class AlbumFactory
{
    private User $user;

    public function ownedBy(User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function make()
    {
        return Album::factory()->make([
            "user_id" => $this->user ?? User::factory()->make()
        ]);
    }

    public function create()
    {
        return Album::factory()->create([
            "user_id" => $this->user ?? User::factory()->create()
        ]);
    }
}
