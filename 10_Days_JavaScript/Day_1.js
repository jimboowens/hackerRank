// **************** first one

// 'use strict';

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', inputStdin => {
//     inputString += inputStdin;
// });

// process.stdin.on('end', _ => {
//     inputString = inputString.trim().split('\n').map(string => {
//         return string.trim();
//     });
    
//     main();    
// });

// function readLine() {
//     return inputString[currentLine++];
// }

// /**
// *   A line of code that prints "Hello, World!" on a new line is provided in the editor. 
// *   Write a second line of code that prints the contents of 'parameterVariable' on a new line.
// *
// *	Parameter:
// *   parameterVariable - A string of text.
// **/
// function greeting(parameterVariable) {
//     // This line prints 'Hello, World!' to the console:
//     console.log('Hello, World!');
//     console.log(parameterVariable)
//     // Write a line of code that prints parameterVariable to stdout using console.log:
    
// }
// *********************************second one 
// 'use strict';

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', inputStdin => {
//     inputString += inputStdin;
// });

// process.stdin.on('end', _ => {
//     inputString = inputString.trim().split('\n').map(string => {
//         return string.trim();
//     });
    
//     main();    
// });

// function readLine() {
//     return inputString[currentLine++];
// }

// /**
// *   The variables 'firstInteger', 'firstDecimal', and 'firstString' are declared for you -- do not modify them.
// *   Print three lines:
// *   1. The sum of 'firstInteger' and the Number representation of 'secondInteger'.
// *   2. The sum of 'firstDecimal' and the Number representation of 'secondDecimal'.
// *   3. The concatenation of 'firstString' and 'secondString' ('firstString' must be first).
// *
// *	Parameter(s):
// *   secondInteger - The string representation of an integer.
// *   secondDecimal - The string representation of a floating-point number.
// *   secondString - A string consisting of one or more space-separated words.
// **/
// function performOperation(secondInteger, secondDecimal, secondString) {
//     // Declare a variable named 'firstInteger' and initialize with integer value 4.
//     const firstInteger = 4;
    
    
//     // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
//     const firstDecimal = 4.0;
    
//     // Declare a variable named 'firstString' and initialize with the string "HackerRank".
//     const firstString = 'HackerRank ';
    
//     // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number type) on a new line.
//     console.log(firstInteger + parseInt(secondInteger))
    
//     // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number type) on a new line.
//     console.log(firstDecimal + parseFloat(secondDecimal))
    
//     // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The variable 'firstString' must be printed first.
//     console.log(firstString + secondString)
// }

// performOperation(12,4,"is crappy");

// ++++++++++++++++++++++++++++++++third one
// 'use strict';

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', inputStdin => {
//     inputString += inputStdin;
// });

// process.stdin.on('end', _ => {
//     inputString = inputString.trim().split('\n').map(string => {
//         return string.trim();
//     });
    
//     main();    
// });

// function readLine() {
//     return inputString[currentLine++];
// }
// /**
// *   Calculate the area of a rectangle.
// *
// *   length: The length of the rectangle.
// *   width: The width of the rectangle.
// *   
// *	Return a number denoting the rectangle's area.
// **/
// function getArea(length, width) {
//     let area=length*width;
//     // Write your code here
//     console.log("area is : ",area)
//     return area;
// }

// /**
// *   Calculate the perimeter of a rectangle.
// *	
// *	length: The length of the rectangle.
// *   width: The width of the rectangle.
// *   
// *	Return a number denoting the perimeter of a rectangle.
// **/
// function getPerimeter(length, width) {
//     let perimeter=2*(length+width);
//     // Write your code here
//     console.log("perimeter is: ", perimeter)
//     return perimeter;
// }
// getArea(3,4.5);
// getPerimeter(3,4.5);
// ++++++++++++++++++++++++++++++++fourth one
// 'use strict';

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', inputStdin => {
//     inputString += inputStdin;
// });

// process.stdin.on('end', _ => {
//     inputString = inputString.trim().split('\n').map(string => {
//         return string.trim();
//     });
    
//     main();    
// });

// function readLine() {
//     return inputString[currentLine++];
// }
/*
 * Create the function factorial here
 */
// function factorial(input){
//     function factorial(n) {
//         let product = n;
//         while (n-- > 1) {
//             product *= n;
//         }
//         return product;
//     }
// }
// factorial(14);
// **************** fifth one

function vowelsAndConsonants(input) {
    let vowels = "";
    let consonants = "";
    for (const letter of input) {
        if (letter == "a" ||letter == "e" ||letter == "i" ||letter == "o" ||letter == "u") {
            vowels += letter;
        }else{
            consonants += letter;
        }
    }
    for (let i = 0; i < vowels.length; i++) {
        console.log(vowels.charAt(i));
    }
    for (const letter of consonants.split('')) {
        console.log(letter);
    }
}

vowelsAndConsonants("javascriptloops");