<?php


use App\Models\Album;

use App\Models\User;
use Illuminate\Database\Eloquent\Collection;
use function PHPUnit\Framework\assertInstanceOf;

test('user can has albums', function () {
    $user = User::factory()->create();

    assertInstanceOf(Collection::class, $user->albums);
});
