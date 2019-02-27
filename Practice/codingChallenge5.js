//First Part of coding challenge with John's info
//Steps 1-5 of the Challenge
let john = {
    name: 'John',
    bills: [124, 48, 268, 180, 42],
    calcTips: function () {
        this.tips = [];
        this.finalValues = [];

        for (i = 0; i < this.bills.length; i++) {
            //Determine % based on tipping rules
            let percentage;
            let bill = this.bills[i]

            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }

            //Add results to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

//Step 5 of the Challenge
//Second part of coding challenge (Mark)
let mark = {
    name: 'Mark',
    bills: [77, 475, 110, 45],
    calcTips: function () {
        this.tips = [];
        this.finalValues = [];

        for (i = 0; i < this.bills.length; i++) {
            //Determine % based on tipping rules
            let percentage;
            let bill = this.bills[i]

            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill < 300) {
                percentage = .1;
            } else if (bill > 300) {
                percentage = .25;
            }

            //Add results to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

//Step 6 of Challenge
function calcAverage(tips) {
    let sum = 0;
    for (let i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    //Returns average
    return sum / tips.length;
}

john.calcTips();
mark.calcTips();

//Step 7 of Challenge
//Do the calculations
john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

//Step 8 of the Challenge
if (john.average > mark.average) {
    console.log(john.name + '\'s family pays higher tips, with an average of $' + john.average);
} else {
    console.log(mark.name + '\'s family pays higher tips, with an average of $' + mark.average);
}