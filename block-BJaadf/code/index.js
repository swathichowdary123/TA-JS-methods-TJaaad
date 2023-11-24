let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

// Add a new element ('Papaya') into fruits array at end
fruits.push("papaya");
// Remove the last element from fruits array
fruits.pop();
// Log the current length of fruits array
console.log(fruits.length);
// Remove the first element from fruits and log the value of fruits (use delete arr[0])
fruits.shift();
console.log(fruits);
// Log the element on index 0 and 1
console.log(fruits[0]);
console.log(fruits[1]);
// If the element at 0 index is undefined and index 1 is 'Banana' shift all the values to one lower index (use shift method)
 fruits=[undefined,'banana','orange','apple','mango'];
 fruits.shift();
 fruits.shift();
 console.log(fruits);
// Add a new element to the start ('Guava') and shift the index of all other to one higher value
fruits.unshift("guava");
console.log(fruits);
// Add a new element to the start ('Dragon Fruit') and shift the index of all other to one higher value
fruits.unshift("Dragon fruit");
console.log(fruits);
// Log true or false based on the value at index 0 and 1 is 'Dragon Fruit' and 'Guava' or not
console.log(fruits[0]==="dragon fruit" && fruits[1]==="guava");
// Update the value of index 1 to `Pears`
fruits[1]="pears";
console.log(fruits);
// Add the 'Kiwi' and 'Lemon' to the index 1 and 2 and shift the other element to next index (use splice to add element)
fruits.splice(1,0,"kiwi","lemon");
console.log(fruits);
// Remove (slice) all the element from index 5
fruits.splice(5);
console.log(fruits);
// Create another array named moreFruits with values ['Berries', 'Melons']
let moreFruits=["berries","melons"];
// Concat moreFruits into fruits array (re-assign so the value gets updated)
fruits=fruits.concat(moreFruits);
console.log(fruits);
// Log the name of all fruit in console
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
// Convert each fruit name to lowercase and log it
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i].toLowerCase());
}
// Convert all fruits name into lowercase and store in new array named lowercaseFruits
let lowercaseFruits=fruits.map(fruit=>fruit.toLowerCase());
console.log(lowercaseFruits);
// Convert all fruits name into uppercase and store in new array named uppercaseFruits
let uppercaseFruits=fruits.map(fruit=>fruit.toUpperCase());
console.log(uppercaseFruits);
let numbers = [1, 2, [3, 4]];
let numbersTwo = [1, 2, [3, 4, [5, 6]]];
let numbersThree = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

// Convert the numbers array to one level element. Remove sub-arrays to individual elements and log them
function flattenArray(arr){
    return arr.reduce((acc,val)=>acc.concat(Array.isArray(val)?flattenArray(val):val),[]);
}
let flattenedNumbers=flattenArray(numbers);
console.log(flattenedNumbers);
// Convert the numbersTwo array to one level element. Remove all sub-arrays to individual elements and log them.
// (for multiple level flat accepts argument by default it's 1 `array.flat(2)`)
function flattenArray(arr){
    return arr.reduce((acc,val)=>acc.concat(Array.isArray(val)?flattenArray(val):val),[]);
}
let flattenedNumbersTwo=flattenArray(numbers);
console.log(flattenedNumbersTwo);
// Convert the numbersThree array to one level element.
// Remove all sub-arrays to individual elements, log them and update the value of numbersThree to the new flat array.
let flattenedNumbersThree=flattenArray(numbers);
console.log(flattenedNumbersThree);
numbersThree=flattenedNumbersThree;
// Use forEach to log all the elements)
numbersThree.forEach(element=>{
    console.log(element);
});
// Create a new variable named doubleNumbers that store the numberThree array (each element should be multiplied by 2). Use map
let doubleNumbers=numbersThree;
function double(number){
    return number*2;
}
 doubleNumbers=numbersThree.map(double);
 console.log(doubleNumbers);
// Create a new variable named tripleNumbers that store the numberThree array (each element should be multiplied by 3). Use map
let tripleNumbers=numbersThree;
function triple(number){
    return number*3;
}
 tripleNumbers=numbersThree.map(triple);
 console.log(tripleNumbers);
// Create a new variable named halfNumbers that store the numberThree array (each element should be divided by 2). Use map
let halfNumbers=numbersThree;
 function half(number){
    return number/2
 }
 halfNumbers=numbersThree.map(half);
 console.log(halfNumbers);
// Create a new variable named oddNumbers that store all the odd numbers in numbersThree array
let oddNumbers=numbersThree;
function isOdd(num){
    return num%2!==0;
}
oddNumbers=numbersThree.filter(isOdd);
// Create a new variable named evenNumbers that store all the even numbers in numbersThree array
let evenNumbers=numbersThree;
function isEven(num){
    return num%2!==0;
}
evenNumbers=numbersThree.filter(isEven);
// Find the index of 10 in numbersThree array
let indexOfTen=numbersThree.indexOf(10);
console.log(indexOfTen);
// Reverse the values of numbersThree array
numbersThree.reverse();
// Reverse the values of numbersTwo array
numbersTwo.reverse();
// Join all fruits with '-', convert to uppercase and log it
let joinAndUppercase=fruits.join("-").toUpperCase();
console.log(joinAndUppercase);
// Join all fruits with '&', convert to lowercase and log it
let joinAndLowercase=fruits.join("-").toLowerCase();
console.log(joinAndLowercase);