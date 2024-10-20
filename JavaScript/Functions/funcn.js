console.log('Functions -> ')


// run();
function run() {
    console.log('running');
}

// run();

// work();

// Named function Assignment
let work = function walk() {
    console.log('work');
};


// Anonymous function assignment
let stand = function() {
    console.log('working');
};

// work();

let jump = stand;

// jump();

// stand();

function sum(a,b) {
    let total = 0;
    for(let value of arguments)
        total = total + value;
    return total;
}

// console.log(sum());

let ans = sum(1,2,3,4,5,6);
// console.log(ans); 

/* ======================= rest operator ===================== */

function summ(...args){
    console.log(args);
}

// sum();

function addn(num,val,...args){ // rest parameter
    console.log(args);
}

// addn(1,2,3,4,5,6);


/* ======================== Default Parameter ================== */

function interest(p,r=6,y=9){
    return p*r*y/100;
}

// console.log(interest(1000,undefined,8));


/* ==================== GETTER , SETTER ======================= */

// Getter -> for access properties
// Setter -> for change or mutate properties

let person = {
    fName : 'Faizul',
    lName : 'Islam',

    get fullName() {
        return `${person.fName}  ${person.lName}`;
    },

    set fullName(value) {
        if(typeof value !== String) {
            throw new Error("You Have not Enter Your Correct Name");
        }
        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    }
};

// console.log(person);

// person.fullName = 'Faiz Arshad';
// console.log(person.fullName);


// try{
//     person.fullName = false; 
// }
// catch (e) {
//     alert(e);
// }

// console.log(person.fullName);

/* ========================= SCOPES ======================== */

// {
//     var a = 10;
// }

// console.log(a);

// function fail() {
//     var a = 7;
// }

// console.log(a);

// for(var i = 0; i<10; i++) {

// }

// console.log(i);

// if(true) {
//     let a = 8;
// }

// console.log(a);

// function b() {
//     const a = 8;
// }

// function b() {
//     const a = 8;
// }



// Summation of Array Elements

let arr = [1,2,3,4];
let summation = 0;
for(let value of arr){
    summation = summation + value;
}
// console.log(summation);

let totalSum = arr.reduce((accumulator,currentValue)  => accumulator + currentValue, 0);
console.log('Sum of Array');
console.log(totalSum);