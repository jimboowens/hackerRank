// function Rectangle(a, b) {
//     return{ length : a,
//     width : b,
//     perimeter : 2 * (a + b),
//     area : (a*b),}
// }

// /*
//  * Return a count of the total number of objects 'o' satisfying o.x == o.y.
//  * 
//  * Parameter(s):
//  * objects: an array of objects with integer properties 'x' and 'y'
//  */
// function getCount(objects) {
//     return objects.filter(function (o) { return o.x == o.y }).length
// }

/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */

class Polygon {
    constructor(sides) {
        this.sides = sides
    }
    perimeter() {
        return this.sides.reduce((a, b)=>{ return a + b; })
    }
}