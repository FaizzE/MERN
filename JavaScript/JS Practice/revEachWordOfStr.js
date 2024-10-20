var str = "Remote Job Leni Hai";

var savedStr = str.split(" ")
    .map(function(word) {
        return word.split("").reverse().join("")
    })

console.log(savedStr.join(" "));