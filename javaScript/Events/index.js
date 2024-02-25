
let btn = document.querySelector('button');
btn.addEventListener('click', ()=> {
    let randomColor = getrandomColor();
    let h2 = document.querySelector('h2');
    h2.innerText = randomColor;

    let div = document.querySelector('div')
    div.style.backgroundColor = randomColor
})

const getrandomColor = () => {
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red}, ${green}, ${blue})`
    return color
}