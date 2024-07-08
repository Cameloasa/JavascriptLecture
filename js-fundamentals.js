//Javascript Variables
//numbers
let age = 56;
let temprature = -15.5;

//string
let name = "Rebecka";

let message = "Hello World!";
//console message
console.log(message);

//my var can be a number or a string
let myVar = 10; //number
myVar = "10"; //string

//boolean
let isRaining = true; //false

//Object data type
let person = { id: 1, name: "Rebecka", isStudent: true };
console.log(person);

//array
let numbers = [1, 2, 3, 4];
//message in console
console.log(numbers);

let nullVar = null;
let description; //undefined

//message in console- undefined
console.log(description);

// PI = 3.141;
const PI = 3.14;

//console message
console.log("PI", PI);

//naming convention for url 
const BASED_API_URL = "http://localhost:8080/api/v1/";

//Update the content of the object
const student = { name: "John", age: 32 };
student.name = "Thomas";
console.log(student.name);

//for loop
for (let i = 1; i < 10; i++) {
    // if (i % 2 == 0) {
    //   console.log(i, " is" + " even");
    // } else {
    //   console.log(i, " is" + " odd");
    // }
  
    //turnury operation
    console.log(i % 2 == 0 ? i + "even" : i + "odd");
  }

for(let i = 10; i<20; i++){
   /* if(i % 2 == 0){
        console.log(i," is" + " even");
    }else{
        console.log(i, "is" + " odd" );
    }*/

   //turnury operation
   console.log(i % 2 == 0 ? i + " even" : i + " odd");     
}

//switch
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("It's the beginning of the week.");
    break;
  case "Sunday":
    console.log("It's the end of the week.");
    break;
  default:
    console.log("It's the middle of the week");
    break;
}

let _day = "Friday"

switch(_day){
    case "Friday":
        console.log("It's time to prepare for weekend!" );
        break;
    case "Sunday":
        console.log("Damn! this weeken was very short!");
        break;
    default:
        console.log("Is an anost weekday.... ");
    break;
    
    
//operator
let a = 10;
let b = 10;
let c = a + b;
console.log(c);

let n1 = 10;
let n2 = "10";
// is equal
let isEqual = n1 == n2; //true
console.log(isEqual);

//= = = is strict equal
let isStrictEqual = n1 === n2; //false

}