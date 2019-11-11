/*
Organizacion de Codigo
    librerias/modulos
    contantes
    obejtos/variables
    funciones
    eventos
    ejecuciones

Usar camelCase
    Cuando una instruccion tenga una sola palabra, va en minisculas p.e require()
    Solo las clases rompen esta regla, siempre va en mayuscula la letra inicial p.e. EventEmmiter()
    Cuando una instruccion tenga 2 o mas palabaras, apartir de la segunda la primer letra va en mayuscula p.e createServer()  

    Tipod de CamelCase
        UpperCamelCase
            Date()
            EventEmmiter()
        lowerCamelCase
            getElementById()
            createServer()

*/

// Ejecutar en consola  ----- node "archivo"

'use strict'; //modo estricto para programar con buenas practicas
console.log('Hola Mundo desde Node.js, esto se vera en la terminal de comandos');

console.log(4 + 4);

console.log(global);

setInterval(function() {
    console.log('Hola Node.js');
}, 1000);

// ctl + c Detengo la ejecucion de un script en la consola