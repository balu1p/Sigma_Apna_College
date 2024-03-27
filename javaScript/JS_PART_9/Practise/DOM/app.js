// // let body = document.getElementsByTagName('body');

// let p = document.createElement('p');
// p.innerText = "Hey I'm Red!";
// p.style.color = 'red';
// // console.dir(p)
// document.body.append(p);

// let h3 = document.createElement('h3');
// h3.innerText = "I'm a blue h3!";
// h3.style.color = "blue";
// document.body.append(h3);

// let div = document.createElement('div');
// div.style.border = "2px solid black";
// div.style.backgroundColor = 'pink';
// div.style.height = '200px';
// div.style.width = '200px';
// document.body.append(div);

// let h1 = document.createElement('h1');
// h1.innerText = "I'm in a div";

// let divP = document.createElement('p');
// divP.innerText = "ME TOO!";

// let a = document.body.childNodes[10];
// a.appendChild(h1);
// a.appendChild(divP)
// // console.dir(document.body.childNodes[10])


let para1 = document.createElement('p');
para1.innerText = "I'm a Red";
para1.classList.add('red')
document.querySelector('body').append(para1);


let h3 = document.createElement('h3');
h3.innerText = "I'm a Blue in h3!";
h3.classList.add('blue')
document.querySelector('body').append(h3);

let div = document.createElement('div');
let h1 = document.createElement('h1');
let para2 = document.createElement('p');

h1.innerText = "I'm in a div!";
para2.innerText = "ME TOO";

div.append(h1);
div.append(para2);

div.classList.add('box');

document.querySelector('body').append(div);
