//Declaration Options:
//This way is most popular way to do it
let names = ['tim', 'jake', 'john'];
//Or
//This way is not widely used
let years = new Array(1990, 1955, 1934);



//Mutate Array Data
names[1] = 'Ben';
//Adds 'Mary' to end of the array
names[names.length] = 'Mary';
//console.log(names);

//Different Data Types
let john = ['John', 'Smith', 1990, 'designer', false];//Includes all of John's Info

//Pushes 'blue' onto end of the array
john.push('blue');
//Adds 'Mr.' to the beginning of the array
john.unshift('Mr.');
//Removes element from the end of the array
john.pop();
//Removes element from the beginning of the array
john.shift();
//Tells you the index of a certain element in the array
// console.log(john.indexOf(1990));

// console.log(john);

//Useful case for indexOf is the to test an element in an array like below:
//(If an element is looked for that is not in the array, return will be -1)

let isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' :
'John is a designer';

console.log(isDesigner);