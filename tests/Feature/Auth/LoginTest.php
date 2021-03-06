<?php

use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

test("a guest can view the login page")
    ->get(fn() => route('login'))
    ->assertStatus(200);

test('an authenticated user cannot view the login page', function () {
    $this->asUser()->get(route('login'))->assertRedirect(route('home'));
});

test("a user can authenticate using the login screen", function ($role) {
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
    $this->post(route('logout'))->assertRedirect(route('login'));

    $this->assertGuest();
});
