let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of sex key from persons array
let peopleName=persons.map(person=>person.sex);
// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade=persons.map(person=>person.grade);
// Create an array peopleSex and store the value of sex key from persons array
let peopleSex=persons.map(person=>person.sex);
// Log the filtered named of people in peopleName that starts with 'J' or 'P'
let filterdNames=peopleName.filter(name=>name.startsWith('j')||name.startsWith('p'));
console.log(filterdNames);
// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
let filteredACNames=peopleName.filter(name=>name.startsWith('A')||name.startsWith('C'));
console.log(filteredACNames.length);
// Log all the filtered male ('M') in persons array
let filteredMale=persons.filter(person=>person.sex==='M');
console.log(filteredMale);
// Log all the filtered female ('F') in persons array
let filteredFemale=persons.filter(person=>person.sex==='F');
console.log(filteredFemale);
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
let filteredFemaleNames=persons.filter(person=>person.sex==='F' && (person.name.startsWith('c')||person.name.startsWith('j')));
console.log(filteredFemaleNames);
// Log all the even numbers from peopleGrade array
let evenGrades=persons.map(person=>person.grade).filter(grade=>grade%2===0);
console.log(evenGrades);
// Find the first name that starts with 'J' in persons array and log the object
let personWithJ=persons.find(person=>person.name.startsWith('j'));
console.log(personWithJ);
// Find the first name that starts with 'P' in persons array and log the object
let personWithP=persons.find(person=>person.name.startsWith('p'));
console.log(personWithP);
// Find the first name that starts with 'J', grade is greater than 10 and is a female
let specificPerson=persons.find(person=>person.name.startsWith('j') && person.grade>10 && person.sex==='F');
console.log(specificPerson);
// Filter all the female from persons array and store in femalePersons array
let femalePersons=persons.filter(person=>person.sex==='F');
// Filter all the male from persons array and store in malePersons array
let malePersons=persons.filter(person=>person.sex==='M');
// Find the sum of all grades and store in gradeTotal
let gradeTotal=persons.reduce((total,person)=>total+person.grade,0);
// Find the average grade
let averageGrade=gradeTotal/persons.length;
// Find the average grade of male
let maleGradeTotal=malePersons.reduce((total,person)=>total+person.grade,0);
let averageMaleGrade=maleGradeTotal/malePersons.length;
// Find the average grade of female
let femaleGradeTotal=femalePersons.reduce((total,person)=>total+person.grade,0);
let averagefemaleGrade=femaleGradeTotal/femalePersons.length;
// Find the highest grade
let highestGrade=persons.reduce((maxGrade,person)=>(person.grade>maxGrade ? person.grade:maxGrade),-Infinity);
// Find the highest grade in male
let highestMaleGrade=malePersons.reduce((maxGrade,person)=>(person.grade>maxGrade?person.grade:maxGrade),-Infinity);
// Find the highest grade in female
let highestFemaleGrade=femalePersons.reduce((maxGrade,person)=>(person.grade>maxGrade?person.grade:maxGrade),-Infinity);
// Find the highest grade for people whose name starts with 'J' or 'P'
let filteredNamesJP=persons.filter(person=>person.name.startsWith('j')||person.name.startsWith('p'));
let highestGradeJP=filteredNamesJP.reduce((maxGrade,person)=>(person.grade>maxGrade?person.grade:maxGrade),-Infinity);
// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
let sortedGrades=persons.map(person=>person.grade).sort((a,b)=>a-b);
console.log(sortedGrades);
// Sort the peopleGrade in descending order
let sortedGrade=persons.map(person=>person.grade).sort((a,b)=>b-a);
console.log(sortedGrade);
// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
let sortedGradesDescending=[...persons.map(person=>person.grade)].sort((a,b)=>b-a);
console.log(sortedGrade);
// Sort the array peopelName in ascending `ABCD..Za....z`
let sortAscending=peopleName.sort();
console.log(sortAscending);
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
let sortedPeopleName=[...peopleName].sort();
console.log(sortAscending);