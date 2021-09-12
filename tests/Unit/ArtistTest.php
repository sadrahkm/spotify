<?php

use App\Models\Artist;
use Illuminate\Database\Eloquent\Collection;
use function PHPUnit\Framework\assertInstanceOf;

test('artist can has albums', function () {
    $user = Artist::factory()->create();

    assertInstanceOf(Collection::class, $user->albums);
});
