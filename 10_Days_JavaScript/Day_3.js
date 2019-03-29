
// function reverseString(s) {
//     try{
//         s = s.split('').reverse().join('')
//     }catch(err){
//         console.log(err.message);
//     }finally{
//         console.log(s);
//     }
// }

// function isPositive(a) {
//     return a > 0 ? "YES"
//         : a < 0 ? "Negative Error"
//         : "Zero Error";  
// }

function getSecondLargest(nums) {
    let largest=0;
    let secondLargest;
    for(const i of nums){
        if (i>largest){
            secondLargest=largest;
            largest=i;
            continue;
        } else if (i<largest && i > secondLargest){
            secondLargest=i;
        }
    }
    return secondLargest;
}