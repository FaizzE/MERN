function firstLetterCapital(str){
    var allWords = str.split(" ").map(function(word){
        return word.charAt(0).toUpperCase() + word.subString(1);
    });
    allWords.join(" ");
}

console.log(firstLetterCapital("hello kaise ho"));