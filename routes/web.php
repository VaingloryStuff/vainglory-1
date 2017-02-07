<?php

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

use GuzzleHttp\Client;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/home', function () {
    return view('home');
});

Route::get('/api', function () {
	$client = new GuzzleHttp\Client(['headers' => [
			'Authorization' => 'Bearer aaa.bbb.ccc',
			'X-TITLE-ID' => 'semc-vainglory',
			'Accept' => 'application/vnd.api+json',
			'Content-Encoding' => 'gzip'
			]]);
    $response = $client->request('GET', 'https://api.dc01.gamelockerapp.com/shards/sg/matches?filter[StormCallerSr]');
    $body = $response->getBody();
    return response($body) -> header('Content-Type', 'application/json');
});
