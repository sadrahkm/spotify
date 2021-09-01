<?php


if (!function_exists('activeGuard')) {
    function activeGuard()
    {
        foreach (array_keys(config('auth.guards')) as $guard) {
            if (auth()->guard($guard)->check()) {
                return $guard;
            }
        }
        return null;
    }
}


function guardNameUsingObject($object)
{
    if ($object instanceof \App\Models\User) {
        return 'user';
    } else {
        if ($object instanceof \App\Models\Artist) {
            return 'artist';
        }
    }
    return null;
}
