let maxNum = prompt('Enter maxNum');
let randomNum = Math.floor(Math.random()*maxNum+1);
let guessNum = prompt('guess number')

while(true) {
    if(guessNum == 'quit') {
        console.log('user quit');
        break;
    }
    if(randomNum == guessNum) {
        console.log('Congratulation u win', randomNum);
        break;
    } else if(randomNum>guessNum) {
        guessNum = prompt("hint: guessNum is smailler than randomNum..");
    } else {
        guessNum = prompt("hint: guessNum is greter than randomNum..");
    }
}
    