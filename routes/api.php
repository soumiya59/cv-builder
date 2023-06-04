<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\CompetenceController;
use App\Http\Controllers\CvController;
use App\Http\Controllers\EducationController;
use App\Http\Controllers\GetcvuserController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------


| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    Route::post('/logout', [AuthController::class, 'logout']);
   
    return $request->user();
   

});
Route::get("/getcvuser",[GetcvuserController::class , 'getcvuser']);
Route::apiResource('/cv', CvController::class);
Route::apiResource('/education', EducationController::class);

Route::apiResource('/competence', CompetenceController::class);
Route::apiResource('/users', UserController::class);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/signup', [AuthController::class, 'signup']);

