/*
//Basic For Loop
for (let i = 1; i < 21; i+= 2) {
    console.log(i);
}

//Whats going on:
//i = 0, 0 < 10 true, log i to console, iterate i by 1
//i = 1, 1 < 10 true, log i to console, iterate i by 1
//i = 2, 2 < 10 true, log i to console, iterate i by 1...and so on
//Keep going until i's value is not < 10

//Iterating through an array adnd displaying all of the elements example:
let john = ['John', 'Smith', 1990, 'designer', false];

for (let i = 0; i < john.length; i++) {
    console.log(john[i]);
}

let john = ['John', 'Smith', 1990, 'designer', false];
//While Loop
let i = 0;                  //Dont forget to define i first with while loops
while (i < john.length) {
    console.log(john[i]);
    i++;                    //Dont forget to increment here in a while loop
}
*/

//Continue and Break Statements
let john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

// //Continue Statement
// for (let i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') continue;  //if type of value in this iteration is not a string, continue over it and move to next iteration
//     console.log(john[i]);   //Outputs only strings from the array
// }

// //Break Statement
// for (let i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') break; //if type of value in this iteration is not a string, break out of the loop
//     console.log(john[i]);
// }

//Looping backwards
for (let i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}