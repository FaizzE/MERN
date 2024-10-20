function shuffleKaro(arr) {
    var totalShuffleArea = arr.length;
    while(totalShuffleArea > 0) {
        totalShuffleArea--;
        var indexToBeExchanged = Math.floor(Math.random() * totalShuffleArea);
        var temp = arr[totalShuffleArea];
        arr[totalShuffleArea] = arr[indexToBeExchanged];
        arr[indexToBeExchanged] = temp;
    }
    return arr;
}

console.log(shuffleKaro[1,2,3,4,5,6,7]);