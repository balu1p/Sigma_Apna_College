
function largerElement (arr, num) {
    let newArr = [];

    for(let i=0; i<arr.length; i++) {
        if(arr[i]>num) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(largerElement([1,2,3,4,5,6,7,8,9,10], 5));