<?php


use App\Models\Album;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Facades\Tests\Setup\AlbumFactory;

uses(RefreshDatabase::class);

test("a user can view a single album", function () {
    $this->asUser();
    $album = Album::factory()->create();
    $this->get("albums/{$album->id}")->assertSee($album->title);
});

test("an artist cannot view create album page")
    ->asUser(true)
    ->get(fn() => route('album.create'))->assertOk();

test("an artist can creates an album", function () {
    \Pest\Laravel\withoutExceptionHandling();
    $this->asUser(true);

    $album = AlbumFactory::ownedBy(auth()->user())->make();

    $this->post('albums', $album->toArray())
        ->assertRedirect("albums");

    $this->assertDatabaseHas("albums", $album->only(['title', 'cover', 'header_picture']));
});

test("an authenticated user cannot creates an album", function () {
//    $this->asUser();
    $this->actingAs(User::factory()->create());

    $album = Album::factory()->make(['user_id' => auth()->id()]);

    $this->post('albums', $album->toArray())
        ->assertRedirect("/");

    $this->assertDatabaseMissing("albums", $album->only(['id', 'title']));
});

test("an album requires a title", function () {
    $attributes = Album::factory()->state(['title' => ''])->raw();
    $this->asUser(true)
        ->post('albums', $attributes)
        ->assertSessionHasErrors('title');
});

test("an album requires a cover", function () {
    $attributes = Album::factory()->raw(['cover' => '']);
    $this->actingAs(User::factory()->create(['is_artist' => 1]));

    $this->post('albums', $attributes)->assertSessionHasErrors('cover');
});

test("an album requires a header picture", function () {
    $attributes = Album::factory()->raw(['header_picture' => '']);
    $this->actingAs(User::factory()->create(['is_artist' => 1]));

    $this->post('albums', $attributes)->assertSessionHasErrors('header_picture');
});
