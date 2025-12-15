<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
Route::middleware(['guest'])->group(function () {
    Route::get('/login', function () {
        return Inertia::render('Auth/Login');
    })->name('login');
    Route::post('/login', [App\Http\Controllers\User::class, 'login']);
});
Route::middleware(['auth'])->group(function () {
    Route::get('/logout',function () {
        auth()->logout();
        return to_route('login');
    })->name('logout');
    Route::get('/', function () {
        return to_route('manage');
    });
    Route::get('/quan-ly-don-hang', function () {
        return Inertia::render('Manage/Dashboard');
    })->name('manage');
    Route::get('/tao-don-nhanh', function () {
        return Inertia::render('Order/Create');
    })->name('createorder');
    Route::get('/quan-ly-cong-no', function () {
        return Inertia::render('CongNo/Index');
    })->name('qlcongno');
    Route::get('/quan-ly-tai', function () {
        return Inertia::render('TaiHang/Index');
    })->name('qltai');
    Route::get('/thong-ke', function () {
        return Inertia::render('ThongKe/Index');
    })->name('thongke');
});