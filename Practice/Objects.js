//Creating a new object 
//Object Literal
let john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

//How to retrieve data from objects:
//We can use dot notation:
console.log(john.firstName);
//Can also use brackets:
console.log(john['lastName']);
//Or this:
let x = 'birthYear';
console.log(john[x]);

//How to mutate object data
john.job = 'designer';
john['isMarried'] = true;
console.log(john);

//Creating an instance of an object
let jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1988;
jane['lastName'] = 'Smith';

console.log(jane);