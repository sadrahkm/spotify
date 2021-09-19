<?php

namespace App\Http\Controllers;

use App\Http\Resources\AlbumCollection;
use App\Models\Album;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Index', [
            'albums' => new AlbumCollection(Album::with('artist')->take(5)->get())
        ]);
    }
}
