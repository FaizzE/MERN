var arr = ["uhsdg", 123, "dhuuhfe"];

var summation = 0;

arr.forEach(function(ele){
    if(typeof ele === 'number'){
        summation += ele;
    }
})

console.log(summation);