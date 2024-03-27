let div = document.createElement('div');
let input = document.createElement('input');
let button = document.createElement('button');
button.innerText = "Click ME!";

// button.setAttribute('id', "btn");
button.classList.add('btnstyle');
input.setAttribute('placeholder', 'username');

let h1 = document.createElement('h1');
h1.innerText  = "DOM Manipulation in JS";
h1.classList.add('textstyle');

let p = document.createElement('p');
p.innerHTML = "Apna College <b>Delta</b> Practise"

div.append(input);
div.append(button);
document.querySelector('body').append(h1);
document.querySelector('body').append(div);
document.querySelector('body').append(p);