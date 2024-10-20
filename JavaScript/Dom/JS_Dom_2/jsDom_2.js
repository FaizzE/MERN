// function eventFunction() {
//     console.log('I have clicked on the document');
// }

// document.addEventListener('click', eventFunction);

// document.removeEventListener('cliclk', eventFunction);

// const content = document.querySelector('#wrapper');

// content.addEventListener('click', function(event) {
//     console.log(event);
// })

let myDiv = document.createElement('div');

function paraStatus(event) {
    console.log('Para', + event.target.textContent);
}
myDiv.addEventListener('click', paraStatus);

for(let i=1; i<=100; i++){
    let newElement = document/createImageBitmap('p');
    newElement.textContent = 'This is para ' + i;

    // newElement.addEventListener('click', function(event){
    //     console.log('I have clicked on para');
    // });
    myDiv.appendChild(newElement);
}
document.body.appendChild(myDiv);