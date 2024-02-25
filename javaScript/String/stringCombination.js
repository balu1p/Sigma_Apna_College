

// function combinationStr(str) {
//     let combination = [];

//     for(let i=0; i<str.length; i++) {
//         for(let j=i+1; j<=str.length; j++) {
//             combination.push(str.slice(i,j))
//         }
//     }
//     return combination;
// }

// console.log(combinationStr('Dog'));

const combination = (str) => {
    let result = [];
    let tempArr = [];

    for(let i=0; i<str.length; i++) {
        tempArr = [str[i]];
        let index = 0;

        while(result[index]) {
            tempArr.push(result[index]+str[i]);
            index++;
        }
        result = result.concat(tempArr);
    }
    return result;
}


console.log(combination("dog"))