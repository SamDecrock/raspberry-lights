# raspberry-lights #

Using a Raspberry PI, node.js, some php and the Pusher service to control 2 simple LED lights

![Header](http://samdecrock.github.com/raspberry-lights/rasbpi-lights.png)

## Raspberry Pi client ##

The Raspberry Pi client resides in the /node folder. It uses the Pusher Client module created by abhishiv

### Requirements ###
Make sure have node.js installed on your Pi. Also install the gpio tools to access the GPIO ports.

### Connecting the LED's ###
Follow this tutorial on how to connect an LED to your Raspberry Pi.

### Make to following changes to the Pusher Client ###

At this moment, the Pusher Client contains an error. You have to change the code on line 55 of node_modules/pusher-node-client/lib/pusher-node-client.js from

    stringToSign = "" + this.state.socket_id + ":" + channel_name + ":" + (JSON.stringify(channel_data));

to

    if(channel_data)
      stringToSign = "" + this.state.socket_id + ":" + channel_name + ":" + (JSON.stringify(channel_data));
    else
      stringToSign = "" + this.state.socket_id + ":" + channel_name;
