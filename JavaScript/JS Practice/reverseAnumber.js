function reverseNum(x){
    
    return Number(x.toString().split("").reverse().join(""));

}
// console.log(reverseNum(12345));


// Approach 2

function revNum(a){
    let ans = 0;
    while(a>0){
        let lastD = a%10;
        ans = ans*10+lastD;
        a = Math.floor(a/10);
    }
    return ans;
}

console.log(revNum(123));
