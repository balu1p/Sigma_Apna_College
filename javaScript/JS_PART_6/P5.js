function generateRandom(strt, end) {
    let diff = end - strt;

    return Math.floor(Math.random()*diff)+strt
}

console.log(generateRandom(100, 200))