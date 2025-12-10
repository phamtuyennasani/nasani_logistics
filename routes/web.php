<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Foundation\Application;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

Route::middleware(['check_auth'])->group(function () {
    Route::get('/', function () {
        return Inertia::render('Welcome', [
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    });
});

Route::get('/contact',function(){
    return Inertia::render('Contact');
})->name('contact');

Route::get('/about',function(){
    return Inertia::render('About');
})->name('about');

Route::middleware(['guest'])->group(function () {
    Route::get('/login', function () {
        return Inertia::render('Auth/Login');
    })->name('login');
    Route::post('/login', [App\Http\Controllers\User::class, 'login']);
});
