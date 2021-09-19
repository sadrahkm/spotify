<?php


use App\Models\Album;
use App\Models\Artist;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use function Pest\Laravel\actingAs;
use function Pest\Laravel\assertDatabaseHas;
use function Pest\Laravel\assertDatabaseMissing;
use function Pest\Laravel\get;
use function Pest\Laravel\post;
use function Pest\Laravel\withoutExceptionHandling;

uses(RefreshDatabase::class);

test("an authenticated user can see all albums", function () {
    actingAs(User::factory()->create());

    $album = Album::factory()->create();

    get("/")->assertSee($album->title);
});

test("guests cannot view album pages", function () {
    $album = Album::factory()->create();

    get("/")->assertDontSee($album->title)->assertRedirect('/login');

    get("/album/{$album->id}")->assertDontSee($album->title)->assertRedirect('/login');
});

test("an authenticated artist can creates an album", function () {
    actingAs(User::factory()->create(['is_artist' => 1]));

    get('/albums/create')->assertStatus(200);

    $album = Album::factory()->make(['user_id' => auth()->id()]);

    post('albums', $album->toArray())->assertRedirect("albums");

    assertDatabaseHas("albums", $album->only(['title', 'cover', 'header_picture']));
});

test("an authenticated user cannot creates an album", function () {
    actingAs(User::factory()->create());

    $album = Album::factory()->make(['user_id' => auth()->id()]);

    post('albums', $album->toArray())->assertRedirect("/");

    assertDatabaseMissing("albums", $album->only(['id', 'title']));
});

test("a user can view an single album", function () {
    $album = Album::factory()->create();

    actingAs(User::factory()->create())
        ->get('album/' . $album->id)
        ->assertSee($album->title);
});


test("an album requires a title", function () {
    $attributes = Album::factory()->raw(['title' => '']);
    actingAs(User::factory()->create(['is_artist' => 1]));

    post('albums', $attributes)->assertSessionHasErrors('title');
});

test("an album requires a cover", function () {
    $attributes = Album::factory()->raw(['cover' => '']);
    actingAs(User::factory()->create(['is_artist' => 1]));

    post('albums', $attributes)->assertSessionHasErrors('cover');
});

test("an album requires a header picture", function () {
    $attributes = Album::factory()->raw(['header_picture' => '']);
    actingAs(User::factory()->create(['is_artist' => 1]));

    post('albums', $attributes)->assertSessionHasErrors('header_picture');
});
