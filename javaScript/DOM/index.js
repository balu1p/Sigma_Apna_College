let h1 = document.createElement('h1');
h1.innerText = 'I am Red'
h1.classList.add('red')
document.body.append(h1);

let h3 = document.createElement('h3');
h3.innerText = 'I am Blue'
h3.classList.add('blue')
document.body.append(h3);

let div = document.createElement('div');
div.classList.add('box');
document.body.insertAdjacentElement("afterend", div);

let h2 = document.createElement('h2');
h2.innerText = "I am in a div";
div.append(h2)

let p = document.createElement('p');
p.innerText = "ME TOO";
div.append(p)
console.dir(p)


