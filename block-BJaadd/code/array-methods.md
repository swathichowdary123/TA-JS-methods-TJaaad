Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
parameter:seperator-optional
return:A string with all array elements joined. If array.length is 0, the empty string is returned.
example:
```js
let numbers=[1,2,3];
numbers.join(4);
let sentenceArray='A quick brown fox jumped over a lazy'.split(' ');
senetnceArray.join('dog');
let colors= ['red', 'green', 'blue'];
colors.join('black','red',21,true);
```
join accets n number of values and returns one array with all the values in same order.it does not change the original array.
no it does not mutate the original array.
3. `flat`
parameter:depth-optional
return:it is used for creating a flat structure of an array
example:
```js
let numbers=[1,2,[3,4[5,6,[7,8]]]];
numbers.flat(4);
const arr1 = [1, 2, [3, 4]];
arr1.flat();
const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
```
join accets n number of values and returns one array with all the values in same order.it does not change the original array.
no it does not mutate the original array.

4. `push`
parameter:elements-the elements to add to the end of an array
return:add element to the array
example:
```js
const sports = ["soccer", "baseball"];
const total = sports.push("football", "swimming");
let numbers=[1,2,3,4,5,6];
const total=numbers.push("7","8");
```
push accets n number of values and returns one array with all the values in same order.it does not change the original array.
no it does not mutate the original array.
5. `indexOf`
parameter:search element and fromIndex-optional
return:The first index of searchElement in the array; -1 if not found.
example:
let colors=["aqua","brown","black","gold"];
let numbers=[1,2,3,4,5,6];
colors.indexOf("aqua");
numbers.indexOf(4);
colors.indexOf("BlackABC");

6. `lastIndexOf`
parameter:search element and fromIndex -optional
return:The last index of searchElement in the array; -1 if not found.
example:
let colors=["aqua","brown","black","gold","aqua"];
let numbers=[1,2,3,4,5,6];
colors.lastIndexOf("aqua");
numbers.lastIndexOf(4);
colors.lastIndexOf("BlackABC");
7. `includes`
parameter:search element and fromIndex -optional
return:A boolean value which is true if the value searchElement is found within the array
example:
let colors=["aqua","brown","black","gold","aqua"];
let numbers=[1,2,3,4,5,6];
colors.includes('aqua');
numbers.includes(4);
numbers.includes(3);
8. `reverse`
parameter:none
return:is used to reversing the index of the array
example:
let colors=["aqua","brown","black","gold"];
let numbers=[1,2,3,4,5,6];
colors.reverse();
numbers.reverse();
9. `every`
parameter:callback fn-element,index,array
return:true unless callbackFn returns a falsy value for an array element, in which case false is immediately returned.
example:
function isBigEnough(element, index, array) {
  return element >= 10;
}
const isSubset = (array1, array2) =>
  array2.every((element) => array1.includes(element));
10. `shift`
parameter:none
return:shift is used for returning the first element and shifting the order elements to the lower index
example:
let colors=["aqua","brown","black","gold"];
colors.shift();
11. `splice`
parameter:strat,deletCount-optional,item1--itemn-optional
return:An array containing the deleted elements.

If only one element is removed, an array of one element is returned.

If no elements are removed, an empty array is returned.
example:
let colors=["aqua","brown","black","gold"];
colors.splice(0)
colors.splice(1)
colors.splice(1,2)
12. `find`
parameter:callbackFn-element ,index and array
return:The first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.
example:
let numbers=[1,4,5,6,7,8,9,12,14,156,265];
function isTweleve(num){
  return num==12;
}
let findReturn=numbers.find(isTwelve);
13. `unshift`
parameter:element
return:unshift is used for adding an element in the start of an array
example:
let colors=["aqua","brown","black","gold"];
colors.unShift("tomato");
14. `findIndex`
parameter:callbackFn-element ,index and array
return:The index of the first element in the array that passes the test. Otherwise, -1.
example:
let numbers=[1,4,5,6,7,8,9,12,14,156,265];
function isTweleve(num){
  return num>5;
}
let findIndexReturn=numbers.findIndex(isTwelve);
15. `filter`
parameter:callbackFn-element ,index and array
return:A shallow copy of the given array containing just the elements that pass the test. If no elements pass the test, an empty array is returned.
example:
let numbers=[1,4,5,6,7,8,9,12,14,156,265];
function isEven(num){
  return num%2===0;
}
let evenNumbers=numbers.filter(isEven);
16. `flat`
parameter:depth-optional
return:it is used for creating a flat structure of an array
example:
```js
let numbers=[1,2,[3,4[5,6,[7,8]]]];
numbers.flat(4);
const arr1 = [1, 2, [3, 4]];
arr1.flat();
const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
```
17. `forEach`
parameter:callbackFn-element,index and array
return:none(undefined)
example:
let colors=["aqua","black","blue","brown"];
function log(color){
  console.log(color);
}
colors.forEach(log);
18. `map`
parameter:callbackFn-element,index and array
return:A new array with each element being the result of the callback function.
example:
let numbers=[1,4,5,6,7,8,9,12,14,156,265];
function double(number){
  return number*2;
}
let doubleNumbers=numbers.map(double);
console.log(doubleNumbers);
19. `pop`
parameter:none
return:The removed element from the array; undefined if the array is empty.
example:
```js
let colors=["aqua","brown","black","gold","white"];
colors.pop();
```
20. `reduce`
parameter:callbackFn-currentValue,accumulator,currentIndex
return:the value that results from running the "reducer" callback function to completion over the entire array.
example:
let numbers=[1,2,3,4,5,6,7,8,9];
let sum=0;
numbers.forEach((num)=>{
  sum=sum+num;
});
21. `slice`
parameter:start-optional,end-optionl
return:A new array containing the extracted elements.
example:
let colors=["aqua","brown","black","gold","white"];
colors.slice(0,3);
slice doesnot mutate
22. `some`
parameter:callbackFn-elements,index,array
return:false unless callbackFn returns a truthy value for an array element, in which case true is immediately returned.
example:
let numbers=[1,2,3,4,5,6,7,8,9];
function isBiggerThan10(element, index, array) {
  return element > 10;
}