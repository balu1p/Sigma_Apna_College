// // Get Character at specific position

// let str = 'It is a great day';

// // let newStr = str.charAt(4)
// // console.log(newStr)

// // let newStr = str.substring(4, 7)
// // console.log(newStr)

// // let newStr = str.slice(4,6)
// // console.log(newStr)

// let newStr = str[4]
// console.log(newStr)


// Character Replace from sttring

// let str = "GeeksForGeeks";

// let newStr = str.replace("B", "z");
// console.log(newStr)

// let newStr = str.replace(/B/g,"Z")
// console.log(newStr)

// let firstRemove = str.slice(1)
// console.log(firstRemove)
// let lastRemove = str.slice(0, str.length-1)
// console.log(lastRemove)

// let newStr = str.substring(0,5) + str.substring(6, str.length-1)
// console.log(newStr)

// Reversed String 

// let str = "GeeksForGeeks";

// let newStr = str.split("").reduce((acc,char)=>char+acc,"")
// console.log(newStr)

// let str = "  Welcome     here   new Worlddd...!   ";

// let newStr = str.replace(/\s+/g, " ")
// console.log(newStr)


// let newStr = str.trim().split(/[\s,\t,\n]+/).join(" ");
// console.log(newStr)


// let str = "Welcome to GeeksForGeeks Welcome geeks";

// let newStr = str.split("Welcome").join("Hello");
// console.log(newStr)
// let newStr = str.replaceAll("Welcome","Hello");
// console.log(newStr)
// let newStr = str.replace(/Welcome/gi,"Hello");
// console.log(newStr)


// function convertSintoI() {
//     let a = "100";
//     // let b = a *1;
//     // let b = Number(a);
//     // let b = +a;
//     // let b = Math.floor(a);
//     let b = Math.ceil(a);
//     console.log(typeof b, b)
// }
// convertSintoI()

