<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class AlbumCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param \Illuminate\Http\Request $request
     */
    public function toArray($request)
    {
        return $this->collection->map(function ($item) {
            return [
                'title' => $item->title,
                'username' => $item->user->name,
                'cover' => $item->cover,
                'header_picture' => $item->header_picture
            ];
        });
    }
}
