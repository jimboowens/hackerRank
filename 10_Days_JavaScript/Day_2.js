// **************** fifth one

// function vowelsAndConsonants(input) {
//     let vowels = "";
//     let consonants = "";
//     for (const letter of input) {
//         if (letter == "a" ||letter == "e" ||letter == "i" ||letter == "o" ||letter == "u") {
//             vowels += letter;
//         }else{
//             consonants += letter;
//         }
//     }
//     for (let i = 0; i < vowels.length; i++) {
//         console.log(vowels.charAt(i));
//     }
//     for (const letter of consonants.split('')) {
//         console.log(letter);
//     }
// }


// function getGrade(score) {
//     let grade;
//     // Write your code here
//     if(score>25&&score<=30){grade='A'}
//     else if(score>20&&score<=25){grade='B'}
//     else if(score>15&&score<=20){grade='C'}
//     else if(score>10&&score<=15){grade='D'}
//     else if(score>5&&score<=10){grade='E'}
//     else{grade='F'}
//     return grade;
// }

// function getLetter(s) {
//     let letter;
//     // Write your code here
//     switch (true) {
//         case 'aeiou'.includes(s[0]):
//             letter = 'A';
//             break;
//         case 'bcdfg'.includes(s[0]):
//             letter = 'B';
//             break;
//         case 'hjklm'.includes(s[0]):
//             letter = 'C';
//             break;
//         case 'npqrstvwxyz'.includes(s[0]):
//             letter = 'D';
//             break;
//     }
//     return letter;
// }