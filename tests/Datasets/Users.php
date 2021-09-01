<?php

use App\Models\Artist;
use App\Models\User;

dataset('user_classes', function () {
    return [User::class, Artist::class];
});

dataset("user_types", function () {
    return ['user', 'artist'];
});
