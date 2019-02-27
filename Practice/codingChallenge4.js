let mark = {
    name: 'Mark',
    mass: 200,
    height: 2,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
    }
}

let john = {
    name: 'John',
    mass: 250,
    height: 2,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
    }
}

john.calcBMI();
mark.calcBMI();

if (john.bmi > mark.bmi) {
    console.log(john.name + ' has the highest BMI with a BMI of ' + john.bmi);
} else if (mark.bmi > john.bmi) {
    console.log(mark.name + ' has the highest BMI with a BMI of ' + mark.bmi);
} else {
    console.log('Both have the same BMI');
}
