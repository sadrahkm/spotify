<?php

namespace App\Http\Controllers;

use App\Http\Resources\AlbumCollection;
use App\Models\Album;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SearchController extends Controller
{
    public function show()
    {
        return Inertia::render('Search/Show', [
            'albums' => new AlbumCollection(Album::with('artist')->take(5)->get())
        ]);
    }
}
