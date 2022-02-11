<?php

namespace Tests;

use App\Models\User;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    public function get($uri, $headers = [])
    {
        return parent::get(value($uri), $headers);
    }

    public function asUser(bool $isArtist = false, array $states = []) :self
    {
        return $this->actingAs(User::factory()->state(['is_artist' => $isArtist, ...$states])->make());
    }
}
