// Objective

// Today, we're practicing bitwise operations. Check the attached tutorial for more details.

// Task

// We define S to be a sequence of distinct sequential integers from 1 to n; in other words, S e N. We want to know the maximum bitwise 
// AND value of any two integers, n and k (where n<k), in sequence s that is also less than a given integer, a.

// Complete the function in the editor so that given a and b, it returns the maximum a&b<k.

// Note: The & symbol represents the bitwise AND operator.

// Input Format

// The first line contains an integer, n, denoting the number of function calls. 
// Each of the  subsequent lines defines a dataset for a function call in the form of two space-separated integers describing the 
// respective values of  and .


// Output Format

// Return the maximum possible value of a&b<k for any a<b in sequence S.

function getMaxLessThanK(n, k) {
    console.log(((k | (k - 1)) > n) ? (k - 2) : (k - 1))
    return ((k | (k - 1)) > n) ? (k - 2) : (k - 1);
}

getMaxLessThanK(50001,5000);

// this one is to return the day of the week based on an input that is guaranteed to be valid. With MM/DD/YYYY, 
// momentJS is different. It takes YYYY/MM/DD, but I take for granted the input is valid.There is, with the 'en-US',
// the MM/DD/YYYY format, and the weekday is the method to find the day. Simplified into the return statement, 
// it works quickly and simply. I don't need to build an array of days and reference it, as the DateTimeFormate has
// this already as a quality. 

function getDayName(dateString) {
    return new Intl.DateTimeFormat('en-US', { weekday: "long" }).format(new Date(dateString));
}