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
    
}   
//operator
let a = 10;
let b = 10;
let c = a + b;
//console.log((a) + (b));
console.log(c)

let n1 = 10;
let n2 = "10";
// is equal
let isEqual = n1 == n2; //true
console.log(isEqual);

//= = = is strict equal
let isStrictEqual = n1 === n2; //false
console.log(isStrictEqual);


//1.Function Declaration
/*function greetDeclaration(name) {
    console.log("Hello " + name + "!");
  }
  greetDeclaration("Negar");
  
  function addition(n1, n2) {
    return n1 + n2;
  }
  console.log(addition(10, 20));*/

function greetDeclaration(name){
    console.log("Hello " + name + "!")
  }
greetDeclaration("Camelia");

function addition(n1, n2){
    return n1 + n2;
}
console.log(addition(12,3));

//2. Function Expression
/*const greetExpression = function (name) {
    console.log("Hello " + name + "!");
  };
  greetExpression("Elnaz");*/

  const greetExpression = function(name){
    console.log("Hello " + name + "!");
  };
  greetExpression("Magdalena");

  //3. Arrow Function
/*const greetArrow = (name) => console.log("Hello " + name + "!");

greetArrow("JS");

const _addition = (n1, n2) => {
  const result = n1 + n2;
  return result;
};
console.log(_addition(10, 30));*/

const greetArrow = (name) => console.log("Hello " + name + "!");
greetArrow("Javascript");

const _addition = (n1, n2) =>{
    const result = n1 + n2;
    return result ;
};

console.log(_addition(4,7));

//for Each
/*function sum(...numbers) {
     //let total = 0;
    // for (let number of numbers) {
    //  total += number;
     }
    let total = 0;
    numbers.forEach((number) => {
      total += number;
    });
    return total;
  }
  console.log(sum(1, 2, 3, 4, 5)); //15*/

  //having many numbers
  function sum(... numbers){
    // declare the variable with default value
 let total = 0;
 //iterate thru numbers
 numbers.forEach((number) =>{
    total += number;
 });
 return total;
  }
  console.log(sum(1, 2, 3, 4, 5)); //15*/

//one way to write a message on console
let _name = "Alice";
let _age = 21;

let _message =
  "Hello, my name is " + _name + " and I am " + _age + " years old.";
console.log(_message);

// another way using template message
/*let templateMessage =
  //template literal (backtick `)
  `Hello, my name is ${_name} and I am ${_age} years old.`;
console.log(templateMessage);*/

 //template literal (backtick `) and $
let templateMessage = 
`Hello, my name is ${_name} and I am ${_age} years old.`;
console.log(templateMessage);

//backtick ` and $ 
const g = 5;
const h = 10;
const theResult = `The sum of g and h is ${g + h}`;
console.log(theResult);



//Math function
function add(x = 0, y = 0) {
    return x + y;
  }
function subtraction(x, y) {
    return x - y;
  }
function multiply(x, y) {
    return x * y;
  }
  
function divide(x, y) {
    if (y === 0) {
      throw new Error("Cannot divide by zero");
    }
    return x / y;
  }
  
function calculate(num1, num2, operation) {
    return operation(num1, num2);
  }


console.log(calculate(4,5,sum));
  
console.log(calculate(10, 0, subtraction));

console.log(calculate(2,3,multiply));

//try catch block
try{
    console.log(calculate(2,0,divide));
} catch(error){
    console.log("Caught an error: ", error.message);
}finally{
    console.log("Finally block has been executed");
}

//String methods
let text = "HEllo, World!";
console.log(text.length);
console.log(text.toUpperCase());
console.log(text.indexOf("World"));
console.log(text.slice(0, 5));


//Date
const currentDate = new Date(); //current date
console.log(currentDate);
console.log(currentDate.getFullYear());
console.log(currentDate.getMonth() + 1);
console.log(currentDate.getSeconds());

// console.log(currentDate.toLocaleDateString());
console.log(currentDate.toLocaleDateString("sv-SE"));
console.log(currentDate.toLocaleDateString("ro-Ro"));





