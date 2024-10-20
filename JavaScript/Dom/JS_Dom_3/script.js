// const t1 = performance.now();
// for(let i=1; i<=100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is Para' + i;

//     document.body.appendChild(newElement);  
// }
// const t2 = performance.now();
// console.log("this code took " + (t2-t1) + " ms");

//optimized version of above code :
// const t3 = performance.now();
// let myDiv = document.createElement('div');

// for(let i=1; i<=1000000000000000; i++){
//     let element = document.createElement('p');
//     element.textContent = 'This is Para' + i;

//     myDiv.appendChild(element);
// }

// document.body.appendChild(myDiv);
// const t4 = performance.now();
// console.log("this code took " + (t4-t3) +" ms");



function addPara() {
    let para = document.createElement('p');
    para.textContent = 'JS is Single threaded';
    document.body.appendChild(para);
}

function appendNewMessage() {
    let para = document.createElement('p');
    para.textContent = 'JS is not Multithreaded';
    document.body.appendChild(para);
}

addPara();
appendNewMessage();

document.addEventListener('click',function() {
    console.log('Hello, DOM')
});