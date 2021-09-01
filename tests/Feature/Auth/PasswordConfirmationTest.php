<?php


use App\Models\User;
use App\Models\Artist;
use function Pest\Laravel\actingAs;

uses(\Illuminate\Foundation\Testing\RefreshDatabase::class);

test("confirm password screen can be rendered", function () {
    $user = User::factory()->create();

    $response = actingAs($user)->get('/confirm-password');

    $response->assertStatus(200);
});


test("user password can be confirmed", function () {
    \Pest\Laravel\withoutExceptionHandling();
    $user = User::factory()->create();
    $response = actingAs($user)->post('/confirm-password', [
        'password' => 'password',
    ]);

    $response->assertRedirect();
    $response->assertSessionHasNoErrors();
});

test("artist password can be confirmed", function () {
    \Pest\Laravel\withoutExceptionHandling();
    $user = Artist::factory()->create();
    $response = actingAs($user, 'artist')->post('/confirm-password', [
        'password' => 'password',
    ]);

    $response->assertRedirect();
    $response->assertSessionHasNoErrors();
});

test("password is not confirmed with invalid password", function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->post('/confirm-password', [
        'password' => 'wrong-password',
    ]);

    $response->assertSessionHasErrors();

});
