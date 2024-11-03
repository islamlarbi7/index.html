


// let count = 0; 

// let paragraph = document.getElementById("count");
// let button=document.getElementById("btn")
// button.addEventlistener("click",clickme)



// function clickme(){
// count=count+1 ;
//  paragraph.innerHTML = count;

// }
// let count = 0; 

// let paragraph = document.getElementById("count");

// let button = document.getElementById("btn");
// button.addEventListener("click", clickme);

// function clickme() {
//     count += 1;
//     paragraph.innerHTML = count;
//     };

 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function averageEvenNumbers(numbers) {
   const evenNumbers = numbers.filter((num) => num % 2 === 0);
   const sum = evenNumbers.reduce((acc, num) => acc + num, 0);
   return evenNumbers.length ? sum / evenNumbers.length : 0;
 }
console.log(averageEvenNumbers(numbers));
console.log(                                                );




const words = ["apple", "banana", "strawberry", "kiwi", "orange"];

function findLongestWord(words) {
    return words.reduce((longest, word) => word.length > longest.length ? word : longest, "");
}


console.log(findLongestWord(words));

console.log(                                                  );

const people = [
  { name: "Alice", age: 30, city: "New York" },
  { name: "Bob", age: 40, city: "Chicago" },
  { name: "Charlie", age: 50, city: "New York" },
];

function countPeopleByCity(people) {
  return people.reduce((cityCount, person) => {
    cityCount[person.city] = (cityCount[person.city] || 0) + 1;
    return cityCount;
  }, {});
}

console.log(countPeopleByCity(people));