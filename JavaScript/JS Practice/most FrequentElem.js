function freq(arr) {
    var frq = {};
    arr.forEach(function(elem){
        if(frq.hasOwnProperty(elem)) frq[elem]++;
        else freq[elem] = 1;
    })
    var ans = Object.keys(frq).reduce(function(acc,num) {
        return freq[acc] > freq[num] ? acc : num;
    })
    console.log(ans);
}

console.log(freq[1,2,3,1,1,1,4,5,6,7]);