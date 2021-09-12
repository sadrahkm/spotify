<?php

use App\Models\Album;
use App\Models\Artist;
use Illuminate\Database\Eloquent\Collection;
use function PHPUnit\Framework\assertInstanceOf;

it("must have some music", function () {
    $album = Album::factory()->create();

    assertInstanceOf(Collection::class, $album->musics);
});

it("has an onwer", function () {
    $album = Album::factory()->create();

    assertInstanceOf(Artist::class, $album->artist);
});
