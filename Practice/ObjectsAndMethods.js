let frankie = {
    firstName: 'Frankie',
    lastName: 'Barrios',
    birthYear: 1988,
    family: ['Mandy', 'Mariah', 'Bella', 'Sophia'],
    job: 'Software Development Intern',
    isMarried: false,
    //Method to add an age proprty to the object
    //based off of birthYear
    calcAge: function(birthYear) {
        this.age = 2019 - this.birthYear;
    }
};
frankie.calcAge();
console.log(frankie);

