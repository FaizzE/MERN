// console.log('Arrays - >');

// let numbers = [1,2,3,4,5];

// console.log(numbers);

// end -> push()
// add element in arrays beginning -> unshift()
// add element in array in middle -> splice()

// Searching 

// console.log(numbers);

// console.log(numbers.indexOf(9));

// check if a number exist in array or Not

// if(numbers.indexOf(10) != -1);
// console.log("Present");

// Search Element through Best Practice
// console.log(numbers.includes(4));

// console.log(numbers.indexOf(4,2));

// let courses =  [
//     {no:1, naame:'JavaScript'},
//     {no:2, naame:'Faiz'}
// ];

// console.log(courses);

// console.log(courses.indexOf({no:1,naame:'JavaScript'}));

// let course =  courses.find(function(course){
//     return course.naame == 'JavaScript';
// })

// console.log(course);

// let course = courses.find(function(course){
//     return course.naame === 'JavaScript';
// });

// console.log(course);

/* ============= Removing Element ===================*/

let numbers = [1,2,3,4,5,6,7];

// dele last element of array
numbers.pop();
// delete fisrt element of array
numbers.shift();
// delete middle element of array;
numbers.splice(3,1);

// console.log(numbers);

let array = [1,2,3,4,5];
let arr2 = array;
// array = [];

// array.length = 0;
array.splice(0,array.length);

console.log(array);
console.log(arr2);

/* =============== Combining and Slicing Arrays ================= */

let array1 = [1,2,3];
let array2 = [4,5,6];

let combined = array1.concat(array2);

console.log(combined);

let marks = [10,20,30,40,50,60,70,80];
// let sliced = marks.slice(2,6);
// let sliced = marks.slice();
let sliced = marks.slice(2);

console.log(sliced);

/* ======= Spread Operator =======*/

// Spread Operator => ...

let first  = [1,2,3];
let second = [4,5,6];

let add = [...first,'a',...second,'c'];
console.log(add);

let anotherArr = [...add];


/* ======================== iterating an Array ======================== */

let arr = [10,20,30,40,50];
// for of Loop
for(let value of arr) {
    console.log(value);
}

// For Each Loop
arr.forEach(function(arrElement){
    console.log(arrElement);
})

// Print Array Elements through arraow function
// arr.forEach(arrElements=>console.log(arrElements));


/* ========================= Joining Arrays =========================== */

let arrays = [10,20,30,40,50];
const joined = arrays.join(',');

console.log(joined);

let message = "This is My Sec Message";
let parts = message.split(' ');

console.log(parts);

let joind = parts.join('_');
console.log(joind);

/* ===================== Sorting ===================*/

let nums = [20,10,30,50,40];
nums.sort();
console.log(nums);

nums.reverse();
console.log(nums);

/* =========== Filtering  Arrays ===========*/

let nums1 = [1,2,-1,-4];

let filtered = nums1.filter (value => value >= 0);

console.log(filtered);

/* =========== Mapping =========== */

let number =  [7,8,9,10];

let mpp = number.map(value => 'student_no' + value);
console.log(mpp);


// Mapping With Objects ->
let num = [1,2,-6,-9];
// let filterd = num.filter (value => value >= 0);

let items = num
    .filter(value => value >= 0)
    .map(numss => {value: numss});

console.log(items);