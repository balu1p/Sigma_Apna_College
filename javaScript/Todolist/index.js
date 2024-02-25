let btn = document.querySelector('button')
let inp = document.querySelector('input');
let inpValue = inp.value;
let ul = document.querySelector('ul');
 btn.addEventListener('click', function(){
    let li = document.createElement('li');
    li.innerText = inp.value;
    ul.append(li);

    let buttn = document.createElement('button');
    buttn.classList.add('button');
    buttn.innerText = "Delete";
    li.appendChild(buttn);

})

ul.addEventListener('click', function(e){
    if(e.target.nodeName == 'BUTTON') {
        let listItem = e.target.parentElement;
        listItem.remove()
    }
})