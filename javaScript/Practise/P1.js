const color = ['red', 'green', 'yellow']
let num = Math.floor(Math.random()*color.length);

function traficLight(color) {
    if(color == "red") {
        console.log("stop")
    } else if(color == "green") {
        console.log("go");
    } else if(color == "yellow") {
        console.log("go slow")
    }
}

console.log(traficLight(color[num]))