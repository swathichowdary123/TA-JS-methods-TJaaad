// After knowing about string methods, practice those by solving problems given below.

let from = 'Syrio Forel';
let quote = 'There is only one thing we say to death: Not today';
let to = 'Arya Stark';

/*
1. Find the index of the first 'is' in the variable quote. And store it in a new variable named indexOfIs
*/
let indexOfIs=quote.indexOf('is');
/*
2. Find the character at the index indexOfIs (Problem 1) in quote.
*/
let characterAtIndexOfIs=quote.charAt(indexOfIs);
/*
3. Log the message saying `The index of first is in quote is 7`
*/
console.log(`the index of first is in quote is ${quote.indexOf(first)}`);
/*
4. Log the message for first 6 characters of quote like this.
  The character at index 0 is 'T'
  The character at index 1 is 'h'
  The character at index 2 is 'e'
  The character at index 3 is 'r'
  The character at index 4 is 'e'
  The character at index 5 is ' '
*/
for(let i=0;i<6;i++){
  console.log(`the character at index ${i} is ${quote.charAt(i)}`)
}
/*
5. Using the variable from , to and quote variable dispaly this message
  "Syrio Forel said There is only one thing we say to death: Not today to Arya Stark." (use concat method)
*/
let concat=from.concat("said",quote);
console.log(concat);
/*
6. Does from, to and quote ends with "rk". Check all three.
*/
let endsWithFrom=from.endsWith('rk');
let endsWithTo=to.endsWith('rk');
let endsWithQuote=quote.endsWith('rk');
console.log(`${endsWithFrom}`);
console.log(`${endsWithto}`);
console.log(`${endsWithquote}`);
/*
7. Does quote includes the word "Only"
*/
let word=quote.includes("only");
console.log(word);
/*
8. Does quote includes the word " we"
*/
let wordWe=quote.includes("we");
console.log(wordWe);
/*
9. Find the index of the the word `we` in quote
*/
let indexOfWord=quote.indexOf("we");
console.log(indexOfWord);
/*
10. Split the quote into individual word and store it in a variable name quoteSplitted
*/
let quoteSplitted=quote.split(" ");
console.log(quoteSplitted);
/*
11. Change the word "today" in quoteSplitted to "tomorrow" and join all the words to form a sentance.
*/
quoteSplitted=quote.replace("today","tommorrow");
console.log(quoteSplitted.join(''));
/*
12. Find the index of second "o" in quote. Use indexOf
*/
let indexOfSecond=quote.indexOf("o");
console.log(`${indexOfSecond}`);
/*
13. Find the last index of letter "a" in quote.
*/
let lastIndex=quote.lastIndexOf("a");
console.log(`${lastIndex}`);
/*
14. Find the second last index of letter "a" in quote.
*/
let seconLastIndex=quote.lastIndexOf("a",lastIndex-1);
console.log(`${seconLastIndex}`);
/*
15. Make the quote 70 character long. If it has less characters add rest as .......
Example: "Hello" (convert to 10 characters) => "Hello....."
Store the output in a new variable
*/
let padEnd=quote.padEnd('70','.');
console.log(`${padEnd}`);
/*
16. Do same as (15) but the ... should come in start. Store the output in a new variable
*/
let padStart=quote.padStart('70','.');
console.log(`${padStart}`);
/*
17. Log the repeat of "Hello World!" 10 times.
*/
console.log(`hello world!`.repeat(10));
/*
18. Replace today to tomorrow in quote.
*/
console.log(quote.replace("today","tommorrow"));
/*
19. Replace Stark to Lannister in quoteTo
*/
console.log(quote.replace("stark","lannister"));
/*
20. Make the quote of length 30 and put ... at the end. (use slice)
*/
let newQuote=quote.slice(0,27)+"...";
console.log(newQuote);
/*
21. Find out does quote, from, to starts with "A"
*/
console.log(quote.startsWith("A"));
console.log(from.startsWith("A"));
console.log(to.startsWith("A"));