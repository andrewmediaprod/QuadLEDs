var SerialPort  = require('serialport').SerialPort;

var comPort = "COM3";

var arduinoSerial = new SerialPort(comPort, {
	baudRate: 4800, 		// this is synced to what was set for the Arduino Code
	dataBits: 8, 			// this is the default for Arduino serial communication
	parity: 'none', 		// this is the default for Arduino serial communication
	stopBits: 1, 			// this is the default for Arduino serial communication
	flowControl: false 		// this is the default for Arduino serial communication
}, false);

arduinoSerial.open(function () {

	console.log("OPEN");

	setInterval(function() {

		var iRed = Math.floor(Math.random()*256);
		var iBlue = Math.floor(Math.random()*256);
		var iGreen = Math.floor(Math.random()*256);

		/*var iRed = 255;
		var iBlue = 255;
		var iGreen = 255;*/

		var sRed = String.fromCharCode(iRed);
		var sBlue = String.fromCharCode(iBlue);
		var sGreen = String.fromCharCode(iGreen);

		//console.log("A"+sRed+sBlue+sGreen);

		arduinoSerial.write("A"+sRed+sBlue+sGreen, function(err, results) {
			console.log('err ' + err);
			console.log('results ' + results);
		});
	}, 1000);

	/*arduinoSerial.on('data', function(data) {
		console.log('data received: ' + data);
	});*/
});