var firstNum = document.getElementById('firstNum');
var secNum = document.getElementById('secNum');

var ans = document.querySelector('.result');

var mul = document.querySelector('.multiply');
var div = document.querySelector('.divide');

mul.addEventListener('click', function() {
    var first = parseFloat(firstNum.value);
    var sec = parseFloat(secNum.value);
    if (!isNaN(first) && !isNaN(sec)) {
        var res = first * sec;
        ans.innerHTML = res;
    } else {
        ans.innerHTML = "Invalid input";
    }
});

div.addEventListener('click', function() {
    var first = parseFloat(firstNum.value);
    var sec = parseFloat(secNum.value);
    if (!isNaN(first) && !isNaN(sec)) {
        if (sec !== 0) {
            var res = first / sec;
            ans.innerHTML = res;
        } else {
            ans.innerHTML = "Cannot divide by zero";
        }
    } else {
        ans.innerHTML = "Invalid input";
    }
});
