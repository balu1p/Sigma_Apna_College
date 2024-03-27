function deleteOccurance(arr, n) {
    let i=0;
    let newArr = [];
    while(i<arr.length) {
        if(arr[i] == n) {
            i++;
            continue;
        }
        newArr.push(arr[i]);
        i++;
    }
    return newArr;
}
console.log(deleteOccurance([1,2,3,4,5,6,2,3], 2))