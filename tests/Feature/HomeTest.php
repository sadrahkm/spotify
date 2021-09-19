<?php

use App\Models\User;
use function Pest\Laravel\actingAs;

uses(\Illuminate\Foundation\Testing\RefreshDatabase::class);

it('has home page', function () {
    actingAs($user = User::factory()->create());

    $this->get('/')->assertStatus(200)->assertSee($user->name);
});
