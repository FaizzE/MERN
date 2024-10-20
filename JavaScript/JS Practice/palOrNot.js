function strPalOrNot(str) {
    var reversed = str.split("").reverse().join("");
    if(str === reversed) return true;
    else return false;
}


console.log(strPalOrNot("loop"));