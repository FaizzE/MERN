function occ(str) {
    let occurances = {};
    str.split("").forEach(function(ele){
        if(occurances.hasOwnProperty(ele) === false){
            occurances[ele] = 1;
        }
        else{
            occurances[ele]++
        }
    })
    return occurances;
}

console.log(occ("apple"));