function longestCountry (country) {
    let ansIdx = 0
    for(let i=0; i<country.length; i++) {
       let ansLength = country[ansIdx].length;
       let currLength  = country[i].length;

       if(currLength>ansLength) {
        ansIdx = i;
       }
    }
    return country[ansIdx]
}

console.log(longestCountry(["Australia","Germany","UnitedStatesofAmerica"]))