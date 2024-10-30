// for (var i=1;i<=100;i++){

// if  (  i%3==0  &&i%5!=0    ) {

// console.log("fizz");
// }

// if( i%5==0  && i%3!=0     ) {

//     console.log("buzz");
// }
// if (  i%3==0 && i%5==0      ){
//     console.log("fizzbuzz");
// }
// else {

//     console.log(i);

// }
// let n = 7;

// while (n != 1) {
//   if (n % 2 == 0) {
//     console.log(n / 2);
//   }

//   if (n % 2 == 1) {
//     console.log(n * 3 + 1);
//   }
// }

let object1 = { name: "John", age: 30, city: "New York" };
let object2 = { name: "Jane", age: 25, city: "San Francisco" };
let object3 = { name: "Jack", age: 40, city: "Los Angeles" };
let object4 = { name: "Jill", age: 35, city: "Chicago" };
let object5 = { name: "James", age: 45, city: "Miami" };

let array = [object1, object2, object3, object4, object5];

function test(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].age > 30) {
      console.log(array[i]);
    }
  }
}

test(array);



console.log(                                                                     )
function removeVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    return str.split('').filter(char => !vowels.includes(char)).join('');
}


console.log(removeVowels("Hello World")); 