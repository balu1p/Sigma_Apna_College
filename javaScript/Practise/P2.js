const sizes = ['XL', 'L', 'M', 'S'];
const num = Math.floor(Math.random()*sizes.length)
console.log(num)
function sizewithPrice(size) {
    if(size === 'XL') {
        console.log("Price is 250");
    } else if(size === "L") {
        console.log("Price is 200");
    } else if(size === "M") {
        console.log("Price is 100");
    } else if(size === "S") {
        console.log("Price is 50");
    } else {
        console.log('No shirts available!')
    }
}

sizewithPrice(sizes[num])