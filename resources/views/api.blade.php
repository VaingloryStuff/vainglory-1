<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Vainglory - Advanced Vainglory Stats, Leaderboards, Player Profiles and Dashbaords</title>
</head>

<body>
<?php
	use GuzzleHttp\Client;

	$client = new GuzzleHttp\Client(['headers' => [
			'Authorization' => 'Bearer aaa.bbb.ccc',
			'X-TITLE-ID' => 'semc-vainglory',
			'Accept' => 'application/vnd.api+json',
			'Content-Encoding' => 'gzip'
			]]);
    $response = $client->request('GET', 'https://api.dc01.gamelockerapp.com/shards/na/matches');
    $body = $response->getBody();
    echo $body;
?>
</body>
</html>
