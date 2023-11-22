let message = 'If you are still thinking the answer is no!';

// Log the length of the variable message like `The length of [message] is [length]`
console.log(`the length of [message] is ${message.length}`);
// Log the character at index 0 of the variable message like `The first character of [message] is [character]`
console.log(`the first character of message is ${message.charAt(0)}`);
// Log the last character of message using length like `The last character of [message] is [character]`
console.log(`the last character of [message] is ${message.length-1}`);
// Log the index of word "you" in message
let index=message.indexOf("you");
console.log(`the index of you is ${index}`);
// Log the index of word "still" in message
let index1=message.indexOf("still");
console.log(`the index of you is ${index1}`);
// Log the index of word "answers" in message
let index2=message.indexOf("still");
console.log(`the index of you is ${index2}`);
// Log true or false based on whether the word "answers" exist in message or not
let containsAnswers=message.includes('answers');
console.log(containsAnswers);
// Log true or false based on whether the word "they" exist in message or not
let containsAnswer=message.includes('they');
console.log(containsAnswer);
// Log true or false based on whether the word "is" exist in message or not
let containsAns=message.includes('is');
console.log(containsAns);
// Log true or false based on whether the word "Is" exist in message or not
let containsIs=message.includes('Is');
console.log(containIs);
// Check and log whether the word from index 3 to 6 is "you" or not (use slice)
let wordAtIndex=message.slice(3,7);
console.log(wordAtIndex);
// Check and log whether the word from index 7 to 8 is "a" or not
let wordAtIndex1=message.slice(7,8);
console.log(wordAtIndex1);
// Check and log whether the last 3 character in message is "no!" or not (you can use -3 in slice)
let lastThreeCharacters=message.slice(-3);
console.log(lastThreeCharacters);
// Check and log whether the last 5 character in message is "no!" or not
let lastFiveCharacters=message.slice(-5);
console.log(lastFiveCharacters);
// Log the message variable, all in lowecase
let lowerCase=message.toLowerCase;
console.log(lowerCase);
// Log the message variable, all in uppercase
let upperCase=message.toUpperCase;
console.log(upperCase);
// Replace the word "are" to "can't", store it in a new variable named `newMessage` and log it.
let newMessage=message.replace("are","cant");
console.log(newMessage);
// Replace the word "still" to "" (empty) using newMessage variable, and re-assign the output to the variable `newMessage` and log it.
let newMessage1=message.replace("still","");
console.log(newMessage1);
// Replace the word "thinking" to "decide" using newMessage variable, and re-assign the output to the variable `newMessage` and log it.
let newMessage2=message.replace("thinking","decide");
console,log(newMessage2);
// Log all the characters from the message variable (you can user for..of loop on string)
for(let i=0;i<message.length;i++){
    console.log(message.charAt(i))
}
// Split all the words in message (split by " " space) and store it in a variable messageArray
let messageArray=message.split("");
console.log(messageArray);
// Log all the words of messageArray
for(let i=0;i<messageArray.length;i++){
    console.log(messageArray[i]);
}