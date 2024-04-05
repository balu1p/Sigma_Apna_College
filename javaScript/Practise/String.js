function findStr(str, findStr) {
    return str.indexOf(findStr) !== -1 ? 1 : 0;
}

console.log(findStr('abcd', 'abe'));
console.log(findStr('abcd', 'abc'));
console.log(findStr('ghijkl', 'jkl'));