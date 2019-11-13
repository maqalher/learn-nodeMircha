'use strict';

var EventEmitter = require('events').EventEmitter,
    pub = new EventEmitter();

pub
    .on('myevent', function(message){
        console.log(message);
    })

    .once('myevent', function(message){
        console.log('Se emite la pimera vez: ' + message);
    })

pub.emit('myevent', 'Soy un emisor de eventos');
pub.emit('myevent', 'Volviedo a emitir');
pub.removeAllListeners('myevent');
pub.emit('myevent', 'Volviedo a emitir por tercera vez');