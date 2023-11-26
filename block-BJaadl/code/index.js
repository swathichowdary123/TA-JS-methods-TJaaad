let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
function findLongestWord(words){
  let longestWord='';
  for(let i=0;i<words.length;i++){
    if(words[i].length>longestWord.length){
      longestWord=words[i];
    }
  }
  return longestWord;
}
let longestWord=findLongestWord(words);
console.log(longestWord);
// - Convert the above array "words" into an array of length of word instead of word.
let wordLength=words.map(word=>word.length);
console.log(wordLength);
// - Create a new array that only contains word with atleast one vowel.
let wordsWithVowel=words.filter(word=>/[aeiouAEIOU]/.test(word));
console.log(wordsWithVowel);
// - Find the index of the word "rhythm"
words.indesOf("rhythm");
// - Create a new array that contians words not starting with vowel.
let wordsNotWithVowel=words.filter(word=>!['a','e','i','o','u'].includes(word[0].toLowerCase));
// - Create a new array that contianse words not ending with vowel
let nonVowels=words.filter(word=>!['a','e','i','o','u'].includes(word[word.length-1].toLowerCase()));
let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
function calculateSum(numbers){
  return numbers.reduce((sum,num)=>sum+num,0);
}
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let multipliedBy3=numbers.map(num=>num*3);
// - Create a new array that contains only even numbers
let evenNumbers=numbers.filter(num=>num%2===0);
// - Create  a new array that contains only odd numbers.
let oddNumbers=numbers.filter(num=>num%2!==0);
// - Create a new array that should have true for even number and false for odd numbers.
let evenOrOddArray=numbers.map(num=>num%2===0);
// - Sort the above number in assending order.
let sortedNumbers=numbers.sort((a,b)=>a-b);
// - Does sort mutate the original array?
yes
// - Find the sum of the numbers in the array.
let sum=numbers.reduce((acc,cv)=>acc+cv,0);
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
function averageNumbers(numbers){
  if(numbers.length===0){
    return 0;
  }
  let sum=numbers.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
  return sum/numbers.length;
}
let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
function averageWordLength(words){
  if(words.length===0){
    return 0;
  }
  let totalLength=words.reduce((sum,word)=>sum+word.length,0);
  return totalLength/words.length;
}