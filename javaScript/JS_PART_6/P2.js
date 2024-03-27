function uniqueStr(str) {
   let ans = '';
    for(let i=0; i<str.length; i++) {
       let currStr = str[i];
       if(ans.indexOf(currStr) == -1) {
        ans += currStr
       }
    }
    return ans;
}

console.log(uniqueStr("abcdabcdefgggh"))