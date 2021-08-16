<?php

namespace App\Http\Controllers;

use App\Http\Resources\AlbumResource;
use App\Models\Album;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AlbumController extends Controller
{
    public function create()
    {
        return Inertia::render("Album/Create");
    }

    public function store()
    {
        $attributes = \request()->validate([
            'title' => 'required|max:255|min:2',
            'cover' => 'required',
            'header_picture' => 'required',
        ]);

        auth()->user()->albums()->create($attributes);

        return redirect("albums");
    }

    public function show(Album $album)
    {
        return Inertia::render('Album/Show', [
            'album' => new AlbumResource($album->load('musics'))
        ]);
    }
}
