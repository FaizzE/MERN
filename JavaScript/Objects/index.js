// console.log('Objecs');

// // Objects Creation

// let rectangle = {
//     length: 1,
//     breadth: 2,

//     draw: function() {
//         console.log('draw');
//     }


// };
 
// Factory Function 
function createRectangle(len,bre) {
    return rectangle = {
        length: len,
        breadth: bre,

        draw() {
            console.log("drawing rectangle");
        }
    };
}

// let rectangleobj1 = createRectangle(4,5);
// let rectangle2 = createRectangle(2,3);
// let rectangle3 = createRectangle(7,9);

// let rectangle1  = {
//     length: 1,
//     breadth: 2,

//     draw: function() {
//         console.log('draw');
//     }


// };

// console.log(rectangle.length);



// Constructor function -> Pascals Notation -> first letter of Every Word is Capital
// Constructor function -> prop/method -> initialize/Define
function Rectangle(len,bre) {
    this.length = len;
    this.breadth = bre;
    this.draw = function() {
        console.log('drawing');
    }
}

// object creation using constructor function
let rectangleObject = new Rectangle(4,5);

rectangleObject.color = 'blue';
console.log(rectangleObject);

delete rectangleObject.color;
console.log(rectangleObject);
 

// let a = 10;
// let b = a;

// a++;
// console.log(a);
// console.log(b);


// let a = { value: 10};
// let b = a;

// a.value++;

// console.log(a);
// console.log(b);

let rectangle = {
    length:2,
    breadth:4
};

//for-in loop
for(let key in rectangle) {
    //keys are reflected through key variable
    //values are reflected through rectangle[key]
    console.log(key,rectangle[key]);
}


// for-of Loop
//Apply only on Iterables
for(let key of Object.keys (rectangle)) {
    console.log(key);
}

if('length' in rectangle) {
   console.log('Present')
}
else{
    console.log('Absent');
}


// Object Clone
// let src = {
//     a:10,
//     b:20,
//     c:30
// };
// let dest = {};

// for(let key in src) {
//     dest[key] = src[key];
// }

// console.log(dest);
// src.a++;
// console.log(dest);

