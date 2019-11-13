'use strict';

//var myData = require('./my-data.js');
var myData = require('./my-data'),
    Clock = require('./clock-es5'),
    cucu = new Clock();

console.log(
    myData.name,
    myData.email,
    myData._phone
);

cucu.on('tictac', function(){
    cucu.theTime();
});