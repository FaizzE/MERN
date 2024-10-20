function arrayOrNot(value) {
    return Array.isArray(value);
}

console.log(arrayOrNot([1,2,3,4,5]));
console.log(arrayOrNot({}));