<?php

use App\Http\Controllers\MainController;
use App\Http\Controllers\ContactContoller;

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


Route::middleware('inertia')->get('/', [MainController::class, 'index'])->name('index');

Route::middleware(['auth', 'verified', 'inertia'])->group(function () {
    Route::get('/dashboard', [MainController::class, 'dashboard'])->name('dashboard');
    Route::resource('/contacts', ContactContoller::class);
});

require __DIR__.'/auth.php';
