<?php

use App\Http\Controllers\CardsSetController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', ['name' => 'Mundo']);
});

Route::get('/list', [CardsSetController::class, 'index'])->name('cards-set.index');
Route::get('/show/{code}', [CardsSetController::class, 'show'])->name('cards-set.show');
