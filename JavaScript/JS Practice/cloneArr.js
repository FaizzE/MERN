// 1
function cloneArr(arr) {
    return [...arr];
}

// 2
function cloneArr1(arr) {
    var ansArr = [];
    arr.forEach(function(ele){
        ansArr.push(ele);
    })
    return ansArr;
}

console.log(cloneArr([1,2,3,4,5]));
console.log(cloneArr1([1,2,3,4,5]));