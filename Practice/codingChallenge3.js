let bills = [124, 48, 268];

function tipCalculator(bill) {
    let percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}

let tips = [tipCalculator(bills[0]),
    tipCalculator(bills[1]),
    tipCalculator(bills[2])
];

let totals = [tipCalculator(bills[0]) + (bills[0]),
    tipCalculator(bills[1]) + (bills[1]),
    tipCalculator(bills[2]) + (bills[2])
];

console.log(tips);
console.log(totals);