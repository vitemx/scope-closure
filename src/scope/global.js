// variables

var a; // declarando
var b = 'b'; //declaramos y asignamos
b = 'bb'; // reasingancion
var a = 'aa'; // reedeclaracion


// Global Scope
var fruit = 'Apple'; // global

function bestFruit() {
    console.log(fruit)
}

bestFruit();



function countries() {
    country = 'Colombia';
    console.log(country);
}

countries();
console.log(country);