function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     * and is not more than four characters
     */
    let re = new RegExp(/^(a|e|i|o|u).*\1$/);
    
    /*
     * Do not remove the return statement
     */
    return re;
}

function regexVar1() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
    const re = new RegExp(/^(Mr?s|[MDE]r)\.[A-Za-z]+$/);
    
    /*
     * Do not remove the return statement
     */
    return re;
}

function regexVar2() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */
    let re = new RegExp(/\d+/g);
    
    /*
     * Do not remove the return statement
     */
    return re;
}