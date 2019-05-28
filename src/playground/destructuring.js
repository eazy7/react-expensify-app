import { maxHeaderSize } from "http";

// Object Destructuring

// const person = {
//     name:'Emir',
//     age:29,
//     location: {
//         city: 'Istanbul',
//         temp: 14
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// // const name = person.name;
// // const age = person.age;
// console.log(`${firstName} is ${age}.`);


// const { city, temp: temperature } = person.location;
// if( city && temperature ){
// console.log(`It's ${temperature} degrees in ${city}.`);
// };

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);


// Array Destructuring

// const address = ['Kozyatagi Sok No-1', 'Istanbul', 'Turkey', '34742'];

// const [street, city, country = 'Zimbabwe', zip] = address;

// console.log(`You are in ${city}, ${country}.`);

const item = ['Coffee (hot)','$2.00', '$2.50', '$2.75'];

const [product, small, medium, large] = item;

console.log(`A medium ${product} costs ${medium}.`);
