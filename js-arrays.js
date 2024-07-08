let numbers = [1, 2, 3, 4];
console.log(numbers[2]);// output 3
//cgange 2 with 10
numbers[1] = 10;
//add new numbers
numbers.push(6, 7);
//delete a number
numbers.pop();
//print the array
console.log(numbers);
//print every element of the array
numbers.forEach((number) => console.log(number));
//print ever numbers using filter creating a new array
let evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);
//original array
console.log(numbers);

//create a new array double number
let doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers);

//sort in alphabetical order
const names = ["John", "Negar", "Alice"];
console.log(names.sort());

// sort 
const points = [100, 23, 56, 2, 90];
console.log(points.sort((a, b) => b - a));