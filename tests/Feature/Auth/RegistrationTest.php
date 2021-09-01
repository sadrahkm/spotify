<?php

use App\Models\Artist;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use function Pest\Laravel\assertAuthenticated;
use function Pest\Laravel\get;
use function Pest\Laravel\post;
use function PHPUnit\Framework\assertInstanceOf;

uses(\Illuminate\Foundation\Testing\RefreshDatabase::class);

test("registration screen can be rendered", function () {
    get('/register')->assertStatus(200);
});

test("a user can register", function () {
    $response = post('/register', [
        'username' => 'sadrahkm',
        'name' => 'Test User',
        'email' => 'test@example.com',
        'password' => 'password',
        'password_confirmation' => 'password',
    ]);

    assertAuthenticated();
    assertInstanceOf(User::class, Auth::user());
    $response->assertRedirect(RouteServiceProvider::HOME);
});

test("an artist can register", function () {

    $response = post('/register', [
        'is_artist' => true,
        'username' => 'sadrahkm',
        'name' => 'Test User',
        'email' => 'test@example.com',
        'password' => 'password',
        'password_confirmation' => 'password',
    ]);

    assertAuthenticated('artist');
    assertInstanceOf(Artist::class, Auth::guard('artist')->user());
    $response->assertRedirect(RouteServiceProvider::HOME);
});




