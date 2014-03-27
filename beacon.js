Bleacon = require('bleacon');
Bleacon.startScanning();

Bleacon.on('discover', function(bleacon){
   console.dir(bleacon);
});

//var uuid = 'AAAAAAAABBBBCCCCDDDDEEEEEEEE';
//var major = 0;
//var minor = 0;
//var measuredPower = -59;

//Bleacon. startAdvertising(uuid, major, minor, measuredPower);

