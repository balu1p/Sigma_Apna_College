// function multiplyNo(n) {
//     for(let i=1; i<=10; i++) {
//         console.log(i * n) ;
//     }
// }
// multiplyNo(3)

// function sum(n) {
//     let totalSum =0;
//     for(let i=1; i<=n; i++) {
//          totalSum += i
//     }
//     return totalSum
// }
// console.log(sum(10))

// function stringConcat(str) {
//     return str.join('')
// }
// console.log(stringConcat(['hi','hello','bye','!']))

// function stringConcat(str) {
//     let result = '';
//     for(let i=0; i<str.length; i++) {
//         result += str[i];
//     }
//     return result;

// }
// console.log(stringConcat(['hi','hello','bye','!']))

//Higher Order Function

// function multGreet(func, count) {
//     for(let i=0; i<count; i++) {
//         func()
//     }
// }
// function hello() {
//     console.log("Hello")
// }
// multGreet(hello,4)


const Student = {
    name : "Balu",
    age : 24,
    marks: 74,
    getName : function() {
        console.log(this.name);
        console.log(this) // object Scope
    },
    getMarks : () => {
        console.log(this)
        console.log(this.marks);
         //window scope parents Scope
    },
    getInfo1: function() {
        setTimeout(()=>{
            console.log(this.name) // in arow function jisne call lagaya uske parent ko object 
            
        },2000)
    },
    getInfo2: function() {
        setTimeout(function(){
            console.log('regular function',this) // in regular function jisne call kiya usko object manata hai...
        },2000)
    }

}
console.log(Student.getName());
console.log(Student.getMarks());
console.log(Student.getInfo1());
console.log(Student.getInfo2());