<?php

use App\Http\Controllers\AlbumController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PlaylistController;
use App\Http\Controllers\UsersController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

$domain = config('app.domain');

//Route::get('/', function () {
//    return Inertia::render('Welcome', [
//        'canLogin' => Route::has('login'),
//        'canRegister' => Route::has('register'),
//        'laravelVersion' => Application::VERSION,
//        'phpVersion' => PHP_VERSION,
//    ]);
//});

Route::get('/', [HomeController::class, 'index'])->name('home')->middleware('auth');

Route::get('/albums/create', [AlbumController::class, 'create'])->name('album.create');

Route::post('/albums', [AlbumController::class, 'store'])->name('album.store');

Route::get('/album/{album}', [AlbumController::class, 'show'])->name('album.show');

Route::get('/user/{username}', [UsersController::class, 'show'])->name('user.show');

Route::get('/artist/{artist}', [UsersController::class, 'artist'])->name('artist.show');

//Route::get('/playlist/{playlist}', [PlaylistController::class, 'show'])->name('playlist.show');

//Route::get('player', function () {
//    return Inertia::render("AudioPlayer");
//});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__ . '/auth.php';
