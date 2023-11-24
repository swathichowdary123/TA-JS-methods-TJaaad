// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
numbers.indexOf["101"];
// - Find the last index of `9` in numbers
numbers.indexOf["9"];
// - Convert value of strings array into a sentance like "This is a collection of words"
strings.join('');
// - Add two new words in the strings array "called" and "sentance"
strings.push("called","sentance");
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
strings.join('');
// - Remove the first word in the array (strings)
strings.pop();
// - Find all the words that contain 'is' use string method 'includes'
strings.includes("is");
// - Find all the words that contain 'is' use string method 'indexOf'
strings.indexOf("is");
// - Check if all the numbers in numbers array are divisible by three use array method (every)
let ret=numbers.every(function(number){
  return number%3===0
});
// -  Sort Array from smallest to largest
numbers.sort(function(a,b){
  return a-b;
});
// - Remove the last word in strings
strings.pop();
// - Find largest number in numbers
let largestNumber=Math.max(...numbers);
// - Find longest string in strings
let longestString=strings.reduce(function(longest,current){
  return current.length>longest.length?current:longest;
},'');
// - Find all the even numbers
function isEven(num){
  return num%2===0;
}
let evenNumbers=numbers.filter(isEven);
// - Find all the odd numbers
function isOdd(num){
  return num%2!==0;
}
let oddNumbers=numbers.filter(isEven);
// - Place a new word at the start of the array use (unshift)
strings.unshift('newWord');
// - Make a subset of numbers array [18,9,7,11]
numbers.slice(3,7);
// - Make a subset of strings array ['a','collection']
strings.slice(2,4);
// - Replace 12 & 18 with 1221 and 1881
numbers=numbers.map(function(number){
  if(number===12){
    return 1221;
  }
  else if(number===18){
    return 1881;
  }
  else{
    return number;
  }
});
// - Replace words in strings array with the length of the word
let length=strings.map(function(word){
  return word.length;
});
// - Find the sum of the length of words using above question
let sunOfLengths=strings.reduce(function(sum,word){
  return sum+word.length;
},0);
// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
var customersj=customers.filter(customer=>customer.firstname.toLowerCase().startsWith('j'));
// - Create new array with only first name
let firstNames=customers.map(customer=>customer.firstname);
// - Create new array with all the full names (ex: "Joe Blogs")
let fullNames=customers.map(customer=>`${customer.firstname} ${customer.lastname}`);
// - Sort the array created above alphabetically
let sortedFullNames=fullNames.sort();
// - Create a new array that contains only user who has at least one vowel in the firstname.
