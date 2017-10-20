//
//  OBJECT DESTRUCTURING
//
// const person = {
//   // name: 'Michel Nas',
//   age: 29,
//   location: {
//     city: 'Gothenburg',
//     temp: 21
//   }
// };
//
// // ES 6 DESTRUCTURING SAME AS
// // const name = person.name
// // const age = person.age
// const {name = 'Anonymous', age} = person;
//
// console.log(`${name} is ${age} years old.`);
//
// // if (person.location.city && person.location.temp) {
// //   console.log(`It's ${person.location.temp} in ${person.location.city}`);
// // }
// const {temp: temperature, city} = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };
//
// const {name: publisherName = 'Self-Published'} = book.publisher;
//
// console.log(publisherName);

//
//  ARRAY DESTRUCTURING
//

// const address = ['1299 S Juniper Street', 'Philidelphia', 'Pensylvania', '19147'];
//
// console.log(`You are in: ${address[1]} ${address[2]}`);
//
// const [street, city, state = 'New York', zip] = address;
// // const [, city, state] = address; if we just want city and state
//
// console.log(`You are in: ${city} ${state}`);

const item = ['Coffee (ICE)', '$2.00', '$2.50', '$2.75'];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);
