let johnTeamAvg = 89 + 120 + 103 / 3;
let mikeTeamAvg = 116 + 94 + 123 / 3;
let maryTeamAvg = 97 + 134 + 105 / 3;

console.log(johnTeamAvg, mikeTeamAvg, maryTeamAvg);

// if (johnTeamAvg > mikeTeamAvg && maryTeamAvg) {
//     console.log('John Wins');
// }else if ( mikeTeamAvg > johnTeamAvg && maryTeamAvg){
//     console.log('Mike Wins!');
// }else if (maryTeamAvg > mikeTeamAvg && johnTeamAvg) {
//     console.log('Mary Wins!');
//}

if (johnTeamAvg > mikeTeamAvg && johnTeamAvg > maryTeamAvg) {
    console.log('John Wins!');
} else if (mikeTeamAvg > johnTeamAvg && mikeTeamAvg > maryTeamAvg) {
    console.log('Mike Wins!');
} else if (maryTeamAvg > johnTeamAvg && maryTeamAvg > mikeTeamAvg) {
    console.log('Mary Wins!');
} else {
    console.log('There is a draw!');
}




// switch(true) {
//     case johnTeamAvg > mikeTeamAvg:
//         let johnTeamAvg = winner; 
//         console.log('The winner is John' + winner);
//         break;
//     case mikeTeamAvg > johnTeamAvg:
//         let mikeTeamAvg = winner;;
//         console.log('The winner is Mike' + winner);
//         break;
//     case maryTeamAvg > winner:
//         let maryTeamAvg = winner;
//         console.log('The winner is Mary' + winner);
//         break;
//      default:
//          console.log('Both teams are tied!');
// }