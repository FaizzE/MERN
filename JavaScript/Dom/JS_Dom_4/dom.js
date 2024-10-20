console.log('Hello, this is JS DOM 4');

/* ============================ Promises ================================= */

let myPromise = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('This is Promise');
    },4000);
    // resolve(4444);
    reject(new Error('Error, Looks Like Some Mistake in your code'));
})
myPromise.then((value) => {console.log(value)});
myPromise.catch((error) => {console.log('Error')});

console.log('Hello');

