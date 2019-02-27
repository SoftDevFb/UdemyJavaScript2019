
let markMass = 350;
let markHeight = 2;

let johnMass = 500;
let johnHeight = 2.5;

let higherBMI = false;

let markBMI = markMass / markHeight^2;
let johnBMI = johnMass / johnHeight^2;

if (markBMI > johnBMI) {
    higherBMI = true;
    console.log('Mark has a higher BMI than John' + higherBMI);
}else {
    console.log('John has a higher BMI ' + higherBMI);
}