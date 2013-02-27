<?php
	require_once "config.php";
	require_once "Pusher.php";

	$pusher = new Pusher($pusherconfig['key'], $pusherconfig['secret'], $pusherconfig['appId']);
	echo $pusher->socket_auth($_POST['channel_name'], $_POST['socket_id']);
?>