<?php
	require_once "config.php";
	require_once "Pusher.php";

	$event = $_REQUEST['event'];
	$light = $_REQUEST['light'];

	$pusher = new Pusher($pusherconfig['key'], $pusherconfig['secret'], $pusherconfig['appId']);


	if($light == 'all'){
		if($event == 'on'){
			$pusher->trigger('private-lightswitch', 'client-lighton');
		}

		if($event == 'off'){
			$pusher->trigger('private-lightswitch', 'client-lightoff');
		}
	}else if($light == 'light0'){
		if($event == 'on'){
			$pusher->trigger('private-lightswitch', 'client-lighton0');
		}

		if($event == 'off'){
			$pusher->trigger('private-lightswitch', 'client-lightoff0');
		}
	}else if($light == 'light1'){
		if($event == 'on'){
			$pusher->trigger('private-lightswitch', 'client-lighton1');
		}

		if($event == 'off'){
			$pusher->trigger('private-lightswitch', 'client-lightoff1');
		}
	}
?>