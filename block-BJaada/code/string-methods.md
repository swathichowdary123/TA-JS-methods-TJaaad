Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
parameter:none
return:a new string representing the calling string converted to upper case
example:
```js
let name='Arya Stark'
name.toUpperCase();
```
3. `toLowerCase`
parameter:none
return:A new string representing the calling string converted to lower case.
example:
```js
let name='Arya Stark'
name.toLowerCase();
```
4. `trim`
parameter:none
return:trim removes white sapces from start and the end
example:
```js
let name='   Arya Stark   '
name.trim();
```
5. `trimEnd`
parameter:none
return:trim removes white sapces from the end
example:
```js
let name='   Arya Stark   '
name.trimEnd();
```
6. `trimStart`
parameter:none
return:trim removes white sapces from the start
example:
```js
let name='   Arya Stark   '
name.trimStart();
```
7. `concat`
parameter:one or more string to concatenate to str
return:A new string containing the combined text of the strings provided.
example:
```js
let name='Arya Stark'
let sentance = 'A quick brown fox jumped over a lazy dog';
name.concat(" ",sentence);
```
8. `endsWith`
parameter:endPosition-optional
return:returns true or false based on weather that string ends with that specific character or value or not
example:
```js
let name='Arya Stark'
let sentence = 'A quick brown fox jumped over a lazy dog';
name.endsWith('rk')
```
9. `includes`
parameter:Position-optional
return:returns true or false based on weather the value or a character is present inside that string or not
example:
```js
let name='Arya Stark'
let sentance = 'A quick brown fox jumped over a lazy dog';
sentence.includes('brown')
```
10. `indexOf`
parameter:search string ,Position-optional
return:looks for index of the specific character
example:
```js
let name='Arya Stark'
let sentance = 'A quick brown fox jumped over a lazy dog';
sentence.indexOf('brown')
```
11. `lastIndexOf`
parameter:search string ,Position-optional
return:looks for last index of the specific value
example:
```js
let name='Arya Stark'
let sentance = 'A quick brown fox jumped over a lazy dog';
sentence.lastIndexOf('n')
```
12. `padEnd`
parameter:target length,pad string -optional
return:is used to add some padding to the string
example:
```js
let name='Arya Stark'
let sentance = 'A quick brown fox jumped over a lazy dog';
name.padEnd('20','.')
```
13. `padStart`
parameter:target length,pad string -optional
return:is used to add some padding to the string
example:
```js
let name='Arya Stark'
let sentance = 'A quick brown fox jumped over a lazy dog';
name.padStart('20','.')
```
14. `repeat`
parameter:count
return:A new string containing the specified number of copies of the given string.
example:
```js
let name='Arya Stark'
let sentence = 'A quick brown fox jumped over a lazy dog';
name.repeat(4)
```
15. `replace`
parameter:pattern and replacement
return:it will replace a character or specific set of characters from a string
example:
```js
let name='Arya Stark'
let sentence = 'A quick brown fox jumped over a lazy dog';
name.replace("stark","poha")
```
16. `slice`
parameter:indes start and index end
return:taking out a position of string in some or the other way
example:
```js
let name='Arya Stark'
let sentence = 'A quick brown fox jumped over a lazy dog';
tagline.slice(0,21);
```
17. `split`
parameter:seperator-optional-(string data type)
          limit-optional-(number-data-type)
return:an array of string
example:
```js
let name='Arya Stark'
let sentence = 'A quick brown fox jumped over a lazy dog';
name.split('');
```
18. `substring`
parameter:index start and index end-optional
return:A new string containing the specified part of the given string.
example:
```js
let name='Arya Stark'
let sentence = 'A quick brown fox jumped over a lazy dog';
tagline.subString(0,21);
```