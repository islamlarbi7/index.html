let object1 = { name: "John", age: 30, city: "New York" };
let object2 = { name: "Jane", age: 25, city: "San Francisco" };
let object3 = { name: "Jack", age: 40, city: "Los Angeles" };
let object4 = { name: "Jill", age: 35, city: "Chicago" };
let object5 = { name: "James", age: 45, city: "Miami" };

let array = [object1, object2, object3, object4, object5];

function test(array){

for (let i=0; i<array.length;i++){     
if (array[i].age>25)
    {console.log(array[i]);


}

} 

}test(array)