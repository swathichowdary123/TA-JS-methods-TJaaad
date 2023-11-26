For the given code below you have to draw the diagram of how these things are working. Make it similar to the how it was done in previous (Visualise Array Methods) exercise.

- Keep the images in the `img` folder
- using the `![](./img/imagename.png)` add images below each code snippet

```js
let numbers = [100, 200, 33, 45, 65, 76, 51];
function double(num) {
  alert(num);
}
let doubleNum = numbers.forEach(double);
```
![](./img/main.png)
[100, 200, 33, 45, 65, 76, 51];

```js
let numbers = [100, 200, 33, 45, 65, 76, 51];
function double(num) {
  return num * 2;
}
let doubleNum = numbers.forEach(double);
```
[100, 200, 33, 45, 65, 76, 51];
function double(num) {
  return num * 2;
}
200,400,66,90,130,152,102//garbage collected
these values will be deleted ,so forEach converts the array in stream of data and taking each value at a time call the call back function.
```js
let numbers = [100, 200, 33, 45, 65, 76, 51];
function double(num) {
  console.log(num);
}
let doubleNum = numbers.forEach(double);
```
forEach will convert array into stream of data .stream of data means is the value is flowing one after the another.
[100, 200, 33, 45, 65, 76, 51]
function double(num) {
  console.log(num);
}
[200,400,66,90,130,152,102];
```js
let numbers = [100, 200, 33, 45, 65, 76, 51];
function double(num) {
  return num * 2;
}
let doubleNumbers = numbers.map(double);
```
[200,400,66,90,130,152,102];
map always return the same size of an array.
```js
let numbers = [100, 200, 33, 45, 65, 76, 51];
function addTwo(num) {
  return num + 2;
}
let doubleNumbers = numbers.map(addTwo);
```
[202,402,68,92,132,152,104];
```js
let numbers = [100, 200, 33, 45, 65, 76, 51];
function addTwo(num) {
  console.log(num);
}
let doubleNumbers = numbers.map(addTwo);
```
[undeined,undeined,undeined,undeined,undeined,undeined,undeined];
there is no return statement in this function and because of that the value return undefined.
map will always return the same size of an array.
```js
let numbers = [100, 200, 33, 45, 65, 76, 51];
function addTwo(num) {
  alert(num);
}
let doubleNumbers = numbers.map(addTwo);
```
[100, 200, 33, 45, 65, 76, 51];
```js
let numbers = [100, 200, 33, 45, 65, 76, 51];
function isOdd(num) {
  return num % 2 !== 0;
}
let oddNumbers = numbers.filter(isOdd);
```
[45,65,51];
filter does the similat thing that map ,the only difference is map stores each value return from the call back function.but filter checks weather the return from the call back function is truthy or not.
```js
let numbers = [100, 200, 33, 45, 65, 76, 51];
function test(num) {
  return num;
}
let filteredNumbers = numbers.filter(test);
```
[100, 200, 33, 45, 65, 76, 51];
filter does the similat thing that map ,the only difference is map stores each value return from the call back function.but filter checks weather the return from the call back function is truthy or not.
```js
let numbers = [100, 200, 33, 45, 65, 76, 51];
function test(num) {
  console.log(num);
}
let filteredNumbers = numbers.filter(test);
```
[100, 200, 33, 45, 65, 76, 51];
filter does the similat thing that map ,the only difference is map stores each value return from the call back function.but filter checks weather the return from the call back function is truthy or not.
```js
let numbers = [100, 200, 33, 45, 65, 76, 51];
function add(accumulator, currentValue) {
  return accumulator + currentValue;
}
let sum = numbers.reduce(add);
```
670
the initial value of accumulator is decided by a second parameter by here,the initial value of accumulator will be zero
the current value is always going to be the elements of array i.e 100.
the final value will be 670 and the final value of accumulator is what gets returned from reduce .value of accumulator is initialised by the second parameter here and the finalvalue of ccumulator is the value that gets returned from reduce.
```js
let numbers = [100, 200, 33, 45, 65, 76, 51];
function add(accumulator, currentValue) {
  console.log(accumulator + currentValue);
}
let sum = numbers.reduce(add);
```
670
the initial value of accumulator is decided by a second parameter by here,the initial value of accumulator will be zero
the current value is always going to be the elements of array i.e 100.
the final value will be 670 and the final value of accumulator is what gets returned from reduce .value of accumulator is initialised by the second parameter here and the finalvalue of ccumulator is the value that gets returned from reduce.