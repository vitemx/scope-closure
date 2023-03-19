// Reedeclaración y Reeasignación

var firstName; // Undefined
firstName = 'Brandon';
console.log(firstName);

var lastName = 'Ramsel'; // declarar / asignar
lastName = 'Ramses'; // reasignar
console.log(lastName);

var secondName = 'Ramsel'; // declaran / asignar
var secondName = 'Ramses'; // reasignando
console.log(secondName);

// Let
let fruit = 'Apple'; // declara y asignar
fruit = 'Kiwi'; // reasignar
console.log(fruit);

//let fruit = 'Banana';

// const
const animal = 'dog'; // declara y asigna
//animal = 'cat'; // reasignar
console.log(animal);

const vehicles = [];
vehicles.push('Porche');
console.log(vehicles);

vehicles.pop();
console.log(vehicles);
