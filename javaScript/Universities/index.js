
let btn = document.querySelector('button');


btn.addEventListener('click',async(country)=>{
    let inp = document.querySelector('input').value;
    country = inp;
    let collArr = await getUniversities(country);
     show(collArr);
    
   
    
})
async function show(collArr) {
    let ul = document.querySelector('ul');
    ul.innerText =""
    for(col of collArr) {
        let li = document.createElement('li');
        li.innerText = col.name;
        ul.append(li)
    }
}
let url = "http://universities.hipolabs.com/search?name=";
async function getUniversities (country){
    try {
        let res = await axios.get(url+country);
        return res.data
    } catch (error) {
        console.log(error)
    }
    
}