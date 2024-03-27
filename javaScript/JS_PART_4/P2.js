// function sumOfDigits (n) {
//     let newN = n.toString().split('');
//     let newArr = newN.reduce((acc, curr)=>acc+Number(curr),0);
//     return newArr;
// }

// console.log(sumOfDigits(287152))



// function noCounts(n) {
//     let count = 0;
//     let copy = n;

//     while(copy>0) {
//         count++;
//         console.log("Before", "Count",count,"Copy",copy);
//         copy = Math.floor(copy/10);
//         console.log("After", copy)
//     }
//     return count
// }

// console.log(noCounts(287152));

function noOfDigits(n) {
    let sum = 0;
    let copy = n;

    while(copy>0) {
        
        let digit = copy % 10;
        sum += digit;
        copy = Math.floor(copy/10);
        
    }
    return sum
}

console.log(noOfDigits(287152))