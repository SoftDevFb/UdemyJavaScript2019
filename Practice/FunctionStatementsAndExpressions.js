//Function Declaration
//function whatDoYouDo(jab, firstName){}

//Function Expression
let whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids to code.';
        case 'driver':
            return firstName + ' drives for uber';
        case 'designer':
            return firstName + ' designs websites.';
        default:
            return firstName + ' is unemployed.';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('driver', 'Jan'));
console.log(whatDoYouDo('designer', 'Jake'));
console.log(whatDoYouDo('Nothing', 'Tim'));