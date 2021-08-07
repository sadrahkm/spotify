<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AlbumResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'title' => $this->title,
            'cover' => $this->cover,
            'header_picture' => $this->header_picture,
            'user' => [
                'username' => $this->user->username,
                'name' => $this->user->name,
                'profile_picture' => $this->user->profile_picture
            ],
            'musics' => $this->musics->map->only([
                'title',
                'plays',
                'path'
            ])
        ];
    }
}
