// let object1 = { name: "John", age: 30, city: "New York" };
// let object2 = { name: "Jane", age: 25, city: "San Francisco" };
// let object3 = { name: "Jack", age: 40, city: "Los Angeles" };
// let object4 = { name: "Jill", age: 35, city: "Chicago" };
// let object5 = { name: "James", age: 45, city: "Miami" };

// let array = [object1, object2, object3, object4, object5];

// function test(array){

// for (let i=0; i<array.length;i++){
//     if (array[i].name=="John" ) {
// console.log(array[i]); break }
// else {console.log ("not found")}}

// }

// test(array)

// let anArray = [10, "Named", 3.14,true]
//  for (let element in anArray ){ console.log(anArray [element]) }

// function kelvinToCelsius (kelvin) {
//      let celsius = kelvin -273
//       return celsius
//  }
//  console.log(kelvinToCelsius (290) ) ;

//  let cpt =0
//  let message = "There is no war in Ba Sing Se"
//  Array [message  ]

// for(var i=0; i<=Array.length ;i++)
// { cpt=cpt+1

// }

// console.log(cpt)

//  challenge one

 let message = "There is no war in Ba Sing Se";

 let wordCount = message.split(" ").length;

 console.log("Number of words in the message:", wordCount);

// const numbers = [1, 2, 3, 4, 5];

//  Using forEach to iterate over each element in the array
// numbers.forEach((number) => {
//   console.log(`Number: ${number}`);
// });

// numbers.forEach((number, index) => {
//   console.log(`Index: ${index}, Number: ${number}`);
// });
  
let countries = ["China", "Japan", "South Korea", "Vietnam", "Malaysia"];
let capital = ["Beijing", "Tokyo", "Seoul", "Hanoï", "Kuala Lumpur"];

for (i=0 ; i < countries.length ;i++){
console.log("Your country : " ,countries[i] , "has the capital named :", capital[i] );

}




console.log("                                                             ");
let randomizer  = Math.floor( Math.random() * 4);




if (randomizer === 0) {
  console.log("A certain victory");
} else if (randomizer === 1) {
  console.log("Not so certain victory");
} else if (randomizer === 2) {
  console.log("An uneasy victory");
} else {
  console.log("Your fate is unclear, ô chosen undead");
}