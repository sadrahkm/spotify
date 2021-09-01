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

test("a user can authenticate using the login screen", function () {
    $user = User::factory()->create();

    $response = $this->post('/login', [
        'email' => $user->email,
        'password' => 'password',
    ]);

    $this->assertAuthenticated();
    $response->assertRedirect(RouteServiceProvider::HOME);
});

test("an artist can authenticate using the login screen", function () {
    $artist = Artist::factory()->create();

    $response = $this->post('/login', [
        'is_artist' => true,
        'email' => $artist->email,
        'password' => 'password',
    ]);

    $this->assertAuthenticated('artist');
    $response->assertRedirect(RouteServiceProvider::HOME);
});

test("a user can not authenticate with invalid password", function () {
    $user = User::factory()->create();

    $this->post('/login', [
        'email' => $user->email,
        'password' => 'wrong-password',
    ]);

    $this->assertGuest();
});
test("all users can logout", function () {
    $this->post("/logout")->assertRedirect('login');

    $this->assertGuest();
});
