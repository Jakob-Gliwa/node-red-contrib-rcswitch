module.exports = function(RED) {
function RCSwitchNode(config){
	RED.nodes.createNode(this,config);
        var node = this;
	this.on('input', function(msg) {
	var rcswitch = require('rcswitch');

		try{
			rcswitch.enableTransmit(0); // Set WiringPi Pin 0 on OUTPUT (see http://wiringpi.com/pins/ for pin numerotation)
					rcswitch.send(msg.payload);
					rcswitch.disableTransmit();
			
		}
		catch(err){
			console.log(err);
		}
		
	
});
}
    RED.nodes.registerType("rcswitch",RCSwitchNode);
}


