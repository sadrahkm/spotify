<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AccountController extends Controller
{
    public function overview()
    {
        return Inertia::render("Account/Overview");
    }

    public function edit()
    {
        return Inertia::render("Account/Edit");
    }

    public function password()
    {
        return Inertia::render("Account/Password");
    }
}
