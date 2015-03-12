var j5 = require("johnny-five");
var board = new j5.Board({port: "COM9"});
 
 
board.on("ready", function(){
  var led = new j5.Led.RGB({
    pins: {
      red: 11,
      green: 10,
      blue: 9
    }
  });
  led.on();
  led.color("#cc00cc");

  led.blink(1000);
});