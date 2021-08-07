<?php

namespace App\Http\Controllers;

use App\Http\Resources\AlbumResource;
use App\Models\Album;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AlbumController extends Controller
{
    public function show(Album $album)
    {
        return Inertia::render('Album/Show', [
            'album' => new AlbumResource($album->load('musics'))
        ]);
    }
}
