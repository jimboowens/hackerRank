class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
Rectangle.prototype.area = ()=> {
    return (this.w * this.h);
};
/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */

class Square extends Rectangle {
    constructor(s) {
        super(s);
        this.h = s;
        this.w = s;
    }
};

if (JSON.stringify(Object.getOwnPropertyNames(Square.prototype)) === JSON.stringify([ 'constructor' ])) {
    const rec = new Rectangle(3, 4);
    const sqr = new Square(3);
    
    console.log(rec.area());
    console.log(sqr.area());
} else {
    console.log(-1);
    console.log(-1);
}

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
Rectangle.prototype.area = function() {
    return this.w * this.h;
}

/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
class Square extends Rectangle {
    constructor(s) {
        super(s, s);
    }
}

// Rest operator
// When used within the signature of a function, where the function’s arguments should be, either replacing the arguments 
// completely or alongside the function’s arguments, the three dots are also called the rest operator.

// When it is used like that, the rest operator enables the developer to create functions that can take an indefinite 
// number of arguments, also called functions of variable arity or variadic functions.

// Here’s the simplest example of such a function. Let’s assume you want to create a function that calculates the sum of 
// all its arguments. Note that it’s not the sum of two, three or four numbers but the sum of all the numbers the function 
// would receive as arguments.

// Here is a naive implementation, using the rest operator:

function sum(...numbers) {
	return numbers.reduce((accumulator, current) => {
		return accumulator += current;
	});
};
 
sum(1,2) // 3
sum(1,2,3,4,5) // 15


// Objective

// In this challenge, we practice using JavaScript Template Literals. Check the attached tutorial for more details.

// Task

// The code in the editor has a tagged template literal that passes the area and perimeter of a rectangle to a tag function 
// named sides. Recall that the first argument of a tag function is an array of string literals from the template, and the 
// subsequent values are the template's respective expression values.

// Complete the function in the editor so that it does the following:

// s=(P(+/-)sqrt(p^2-16A))/4

// Finds the initial values of  and  by plugging the area and perimeter values into the formula:

// where  is the rectangle's area and  is its perimeter.
// Creates an array consisting of  and  and sorts it in ascending order.
// Returns the sorted array.
// Input Format

// The first line contains an integer denoting . 
// The second line contains an integer denoting .




function sides(literals, ...expressions) {
    // ES6 can destructure arrays into multiple variables
    let [a, p] = expressions;
    let root = Math.sqrt((p * p) - (16 * a))
    let s1 = (p + root) / 4;
    let s2 = (p - root) / 4;
    return ([s2, s1]);
}

