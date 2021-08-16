<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class UsersController extends Controller
{
    public function show()
    {
        return Inertia::render('UserProfile/Index');
    }

    public function artist()
    {
        return Inertia::render('ArtistProfile/Index');
    }
}
