<?php

use App\Models\Artist;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

test("login screen can be rendered", function () {
    $response = $this->get('/login');

    $response->assertStatus(200);
});

test("a user can authenticate using the login screen", function ($role) {
    \Pest\Laravel\withoutExceptionHandling();
    $user = User::factory()->create();

    $response = $this->post('/login', [
        'email' => $user->email,
        'is_artist' => $role == 'artist',
        'password' => 'password',
    ]);

    $this->assertAuthenticated();
    $response->assertRedirect(RouteServiceProvider::HOME);
})->with('user_types');

test("a user can not authenticate with invalid password", function ($role) {
    $user = User::factory()->create();

    $this->post('/login', [
        'email' => $user->email,
        'is_artist' => $role == 'artist',
        'password' => 'wrong-password',
    ]);

    $this->assertGuest();
})->with('user_types');

test("all users can logout", function () {
    $this->post("/logout")->assertRedirect('login');

    $this->assertGuest();
});
