// function factorial(n) {
//     let fact =1;
//     for(let i=1; i<=n; i++) {
//         fact *= i;
//     }
//     return fact;
// }

// console.log(factorial(4))


// Recursion

function factorial(n) {
   if(n === 0 || n === 1) return 1;
    return n * factorial(n-1);
}

console.log(factorial(4))