<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Album extends Model
{
    use HasFactory, Searchable;

    protected $guarded = [];

    public function artist()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function musics()
    {
        return $this->hasMany(Music::class);
    }
}
