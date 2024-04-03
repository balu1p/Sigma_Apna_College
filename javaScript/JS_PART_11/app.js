

/** Callback helll */

function savetoDb(data, success, failure) {
    let internetSpeed = Math.floor(Math.random()*10)+1;
    if(internetSpeed>4) {
        success()
    } else {
        failure()
    }
}

savetoDb("ApnaCollege", ()=> {
    console.log("Data1 Saved successfully.");
    savetoDb("shradhaKhapra",()=>{
        console.log("Data2 Saved successfully.");
        savetoDb("Balupatil", ()=> {
            console.log("Data3 saved successfully.")
        }, ()=> {
            console.log("weak connection3")
        })
    }, ()=> {
        console.log("weak connection2");
    })
},()=> {
    console.log("weak connection1");
});


/** Promises */

function savetoDb(data) {
    return new Promise((resolve, reject)=> {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed>4) {
            resolve(data);
        } else {
            reject("Weak connections !")
        }
    }) 
}

savetoDb("balu")
.then((data) => {
    console.log("data 1 :", data);
   return savetoDb("apnaCollege")
})
.then((data) => {
    console.log("data 2 :", data);
    return savetoDb("shradhaKhapra")
})
.then((data)=> {
    console.log("data 3 :", data)
})
.catch((error)=> {
    console.log("error :", error)
});



/** Color Change using Callback helll */

let h1 = document.querySelector('h1');
function changeColor(color, delay, nextChangeColor) {
    setTimeout(()=> {
        h1.style.color = color;
        nextChangeColor();
    },delay)
}
changeColor("red",1000, ()=> {
    changeColor("purple",1000, ()=> {
        changeColor('green', 1000, ()=> {
            changeColor('blue', 1000)
        });
    });
});

/** Color Change Using promise */

let h1 = document.querySelector('h1');

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            h1.style.color = color;
            resolve("Color was changed!");
        }, delay);
    })
}

changeColor("red", 1000)
.then(()=> {
    return changeColor("green", 1000)
})
.then(() => {
    return changeColor("purple", 1000);
})
.then(()=> {
    return changeColor("blue", 1000);
})


/*  async await*/

async function demo() {
    await changeColor("red", 1000)
    await changeColor("green", 1000)
    await changeColor("purple", 1000)
    await changeColor("blue", 1000)
}

demo()