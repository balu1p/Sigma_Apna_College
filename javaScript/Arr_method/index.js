// const months = ["jan", "july", "march", "august"];

// months.splice(0,1)


// months.splice(1,0,"june");
// console.log(months);


// const lang = ['c', 'c++', 'html', 'js', 'python', 'java', 'c#', 'sql'];

//  lang.reverse();
//  let langIdx = lang.indexOf("js")

// console.log(langIdx)


function getFirstElements (arr, n) {
    return arr.splice(0,n)
}
console.log(getFirstElements([7,9,0,-2], 3))

function getLastElements (arr, n) {
    return arr.splice(-n)
}
console.log(getLastElements([7,9,0,-2], 3))


function stringEmp(str) {
    if(str == '') {
        return "String is Blank..."
    } else {
        return "String is not Blank..."
    }
}

console.log(stringEmp(""));

function checkChar(str, idx) {
    return str[idx] == str[idx].toLowerCase()
}

console.log(checkChar("Balu",0));

const searchEl = (arr, el) => {
    for(let i=0; i<arr.length; i++) {
        if(arr[i] == el) {
            return `array element is :${arr[i]} and index : ${i}`
        }
    }
}

console.log(searchEl([1,45,6,7,8],7))