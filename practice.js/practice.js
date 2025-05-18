// let book = {
//     title: 'book auther',
//     author: 'Author Name',
//     pages: 200,
//     year: 2025,
// };
// book.genre='fiction';
// book.year=2024;
// delete book.author;
// console.log(book);

// let car={
//     model:'Toyota',
//     year:2010,
//     color:'red',
//     mileage:50000,
// };
// console.log(car);
// console.log((car.model))
// console.log((car['color']))
// console.log((car.year))
// let student={
//     name:'John',
//     age:20,
//     mark:{
//         math:90,
//         science:80,
//     }
// };
// console.log(object.entries(student))
// console.log(student.mark.math);
// console.log(student.mark.science);
let student={
    name:'John',
    age:20,
    getDetails: function(){
        return 'Student name: ${this.name} age:${this.age}' ;
    }
};
// console.log(student.getDetails());
// function countProperties(obj) {
//     return Object.keys(obj).length;
// }

// let user = { name: "Alice", age: 25, city: "Paris" };
// console.log(countProperties(user)); // Output: 3
// function mygreet(name){
//     console.log(`Hello ${name}`);
// };
// mygreet('John');
function describePerson(name, age, city){
    return `${name} is ${age} year old and lives in ${city}.`
};
console.log(describePerson('Alice', 30, 'New York'));

function introducePerson(name, job, country){
    return `Hello my name is ${name}. I work as a ${job} in the ${country}. `
};
console.log(introducePerson('John', 'Engineer', 'USA'));
//loops in js
//for loops
let fruits = ['apple', 'banana', 'cherry'];
for (let i = 0; i < fruits.length; i++) {//i=0 initilization//then set controled & stopping condition, then updation
    console.log(fruits[i]);
}
for(let count=0;count<=5; count++){
    console.log(' hello kartik');
}
let sum=0;
for (let i = 0; i <= 5; i++) {
    sum += i;
    console.log(sum);
}
    //while loops
    let i = 0; 
    while (i < 10) {
        console.log(i);
        i++
    }
    //do while
    let j = 0;
    do {
        console.log(j);
        j++;
        } while (j <5);
        //array of cars
        let cars = ['Toyota', 'Honda', 'Ford'];
        

