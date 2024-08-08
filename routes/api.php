<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\ableCreateuser;
use Illuminate\Routing\RouteGroup;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::prefix('auth')->group(function () {
    Route::post('/login', [AuthController::class, 'login']);
Route::get('/me', [AuthController::class, 'me'])->middleware('auth:sanctum');

});

Route::middleware(['auth:sanctum'])->group(function () {

    Route::post('/create-user',[UserController::class, 'store'] )->middleware([ 'ableCreateUser']);
    
    Route::post('/edit-jawaban',function(){
        return 'Edit Jawaban';
    })->middleware(['ableEditJawaban']);
});

