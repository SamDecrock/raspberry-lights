var config = require('./config');
var PusherClient = require('pusher-node-client').PusherClient;
var util = require('util')
var exec = require('child_process').exec;
function puts(error, stdout, stderr) { util.puts(stdout) }

var pusherClient = new PusherClient(config.pusher);


exec("gpio mode 0 out", puts);
exec("gpio mode 1 out", puts);

var lightswitchChannel;

pusherClient.on('connect', function(){
	lightswitchChannel = pusherClient.subscribe("private-lightswitch");
	lightswitchChannel.on('success', function(){
		lightswitchChannel.on('client-lighton', function (data){
			console.log("all lights on");
			exec("gpio write 0 1", puts);
			exec("gpio write 1 1", puts);
		});

		lightswitchChannel.on('client-lightoff', function (data){
			console.log("all lights off");
			exec("gpio write 0 0", puts);
			exec("gpio write 1 0", puts);
		});

		lightswitchChannel.on('client-lighton0', function (data){
			console.log("light 0 on");
			exec("gpio write 0 1", puts);
		});

		lightswitchChannel.on('client-lightoff0', function (data){
			console.log("light 0 off");
			exec("gpio write 0 0", puts);
		});

		lightswitchChannel.on('client-lighton1', function (data){
			console.log("light 1 on");
			exec("gpio write 1 1", puts);
		});

		lightswitchChannel.on('client-lightoff1', function (data){
			console.log("light 1 off");
			exec("gpio write 1 0", puts);
		});

	});
});

pusherClient.connect();

