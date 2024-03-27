

const arr = [1,3,4,5,6];
const n = arr.length;
let square = arr.map((x)=>x*x);

let sum = square.reduce((acc, curr)=>acc+curr,0);

console.log(sum/n);