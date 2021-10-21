// console.log('Test');

//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
};

for (let food in person3){
    console.log(`${person3[food]}`) //this works
    console.log(`${person3.shakes.values}`) //not working
};


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years.
*/

// Create our Person Prototype (Person class)
console.clear()

class Person {
    constructor(name, age){
    this.name = name
    this.age = age
}
    printInfo(){
        console.log(`This person's name is ${this.name} and age is ${this.age}`)
    }
    newAge(){
        console.log(`${this.name}'s age has increased by one.`)
        this.age ++
        console.log(`${this.name}'s new age is ${this.age}`)
    }
}

const kellar = new Person('Kellar', 25);
const david = new Person('David', 22)

console.log(kellar);
console.log(david);

console.log(kellar.printInfo()); //It will work but prints 'undefined' afterwards. Maybe because no arg was given/not required?
console.log(david.printInfo());

console.log(kellar.newAge());
console.log(kellar.newAge());
console.log(kellar.newAge()); // It works but gives me another line that says 'undefined' as well.

// create the printInfo method

// Create another method for the addAge method




//=======Exercise #3=========//

/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */
console.clear()

function replaceEvens(arr){
    console.log(arr)
    for (let i = 0; i < arr.length; i+=2){ //I AM SO SHOCKED I ACTUALLY GOT THIS TO WORK!!!!!!!!!!!!
    arr.splice(i, 1, 'even index')}
    console.log(arr)
}

replaceEvens(["Max","Baseball","Reboot","Goku","Trucks","Rodger"])

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]
