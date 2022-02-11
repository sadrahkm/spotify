<?php


test('an artist has many albums', function () {
    $this->asUser(true);
    $user = Auth::user();
    $this->assertInstanceOf(\Illuminate\Database\Eloquent\Collection::class, $user->albums);
});
