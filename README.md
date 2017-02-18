# Raspberry-Lights #

Using a Raspberry PI, node.js, some php and the [Pusher](http://pusher.com/) service to control 2 simple LED lights

![Header](http://samdecrock.github.com/raspberry-lights/rasbpi-lights.jpg)

## (for English see below) Deze Raspberry Pi kwam in Scheire en de Schepping ##
Dit project werd gebruikt in de aflevering van [Scheire en Schepping van 14 maart 2013](https://www.youtube.com/watch?v=A-7thI_8OUo). Jonas Geirnaert, die momenteel in Nieuw-Zeeland zit, werd via 3 camera's en 3 schermen tot in de studio gebracht. Omdat het soms moeilijk was om zich te mengen in de discussies in de studio, prutste ik dit miniprojectje in elkaar :-). Jonas kon zo vanuit Nieuw Zeeland deze LEDjes bedienen die op de tafel in de studio lagen. Zo kon hij kenbaar maken dat hij iets te zeggen had. Ook hielp ik mee met het opzetten van de verbinding naar Nieuw-Zeeland. Het was een heus avontuur :-)

## This Pi featured on the Belgian televsion show Scheire en de Schepping ##
This Pi featured on the Belgian television show ["Scheire en de Schepping" on March 14, 2013](https://www.youtube.com/watch?v=A-7thI_8OUo). It's a humorous show and one of the guests is currently in New Zealand. They established a video feed using 3 cameras to let him interact with the guests here in Belgium. Because of the delay, it was sometimes hard to join the conversation. Therefore, they used the Raspberry Lights to signal the host of the show when he had something important to say. At the moment of writing, I'm not sure if they've cut out the scenes with the lights or not (let's hope not). I was also one of the people that helped them in establishing the video feed to New Zealand.

![Screenscapture from SCheire en de Schepping](http://samdecrock.github.com/raspberry-lights/scheireschepping.jpg)

## Use it yourself ##

### The Raspberry Pi ###

#### Requirements ####
Make sure you have [Node.js](http://nodejs.org/) installed on your Pi. Also install [wiringPi](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/) to access the GPIO ports.

#### Connecting the LED's ####
Follow [this tutorial](https://projects.drogon.net/raspberry-pi/gpio-examples/tux-crossing/gpio-examples-1-a-single-led/) on how to connect an LED to your Raspberry Pi.

#### The code ####
Copy the contents of ```/node``` to a folder on your Raspberry Pi.

The code uses the [Pusher Client module](https://github.com/abhishiv/pusher-node-client) created by [abhishiv](https://github.com/abhishiv).

Edit ```/node/config.js``` with your [Pusher](http://pusher.com/) keys. Run ```npm install``` to install the required node modules.

Run ```node app.js``` from the ```/node``` folder to start the client. You can run it inside [screen](http://www.debian-administration.org/articles/34) if you want to disconnection from the console.

### The online controller ###

#### Requirements ####
Use any free online php web hosting service for this. Communication is done using the free [Pusher](http://pusher.com/) service.

#### The code ####
Edit ```config.php``` with your Pusher keys and copy the contents of ```/php``` to your online web server.

If you want to use the simulator, located at ```/php/simulator.html```, edit the file with your Pusher keys. The simulator shows the incomming signal just like the Raspbery Pi lights.

### Troubleshooting ###

#### Problems with the Node.js Pusher Client ####

At this moment, the Pusher Client contains an error. You have to change the code on line 55 of ```/node_modules/pusher-node-client/lib/pusher-node-client.js``` from

    stringToSign = "" + this.state.socket_id + ":" + channel_name + ":" + (JSON.stringify(channel_data));

to

    if(channel_data)
      stringToSign = "" + this.state.socket_id + ":" + channel_name + ":" + (JSON.stringify(channel_data));
    else
      stringToSign = "" + this.state.socket_id + ":" + channel_name;


