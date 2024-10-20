function nNumOfArr(arr,n) {
    if(n > arr.length) n = arr.length;
    let newArr = [];
    for(let i=0; i<n;i++){
        newArr.push(arr[i]);
    }
    return newArr;
}

console.log(nNumOfArr([1,2,3,4,5,6],12));