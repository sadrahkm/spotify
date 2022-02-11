<?php

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use function Pest\Laravel\actingAs;
use function Pest\Laravel\get;
use function Pest\Laravel\withoutExceptionHandling;

uses(RefreshDatabase::class);


test("a user can view account page", function ($role) {
    withoutExceptionHandling();
    $user = User::factory()->create(['is_artist' => $role == 'artist']);
    actingAs($user);
    get("account/{$user->id}")->assertStatus(200)->assertSee([
        $user->email,
        $user->name,
        $user->username
    ]);
})->with('user_types');
