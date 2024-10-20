let bc = document.querySelector('body');

let lg = document.querySelector('#grey');
let bw = document.querySelector('#burlywood');
let sm = document.querySelector('#selmon');
let bk = document.querySelector('#lightgreen');



lg.addEventListener('click',function() {
    bc.style.backgroundColor = 'grey';
    console.log("grey");
})
bw.addEventListener('click',function() {
    bc.style.backgroundColor = 'burlywood';
    console.log("burlywood");
})
sm.addEventListener('click',function() {
    bc.style.backgroundColor = 'salmon';
    console.log("salmon");
})
bk.addEventListener('click',function() {
    bc.style.backgroundColor = 'lightgreen';
    console.log("lightgreen");
})
