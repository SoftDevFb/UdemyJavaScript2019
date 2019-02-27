function calculateAge(birthYear) {
    return 2019 - birthYear;
}

let ageJohn = calculateAge(1990);
let ageMike = calculateAge(1987);
let ageJan  = calculateAge(1985);

//console.log(ageJohn, ageMike, ageJan);

function yearsUntilRetirement(year, firstName) {
    let age = calculateAge(year);
    let retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }
}

yearsUntilRetirement(1988, 'John');
yearsUntilRetirement(1969, 'Jack');
yearsUntilRetirement(1944, 'Jane');