const ClickMe_js = document.getElementsByClassName("genST"); // saves the 'Click Me' button in the ClickMe_js variable.
const Result_js = document.getElementById("Result"); // Same for the Result paragraph
const STType_js = document.getElementById("sttype")

function roll2d6() {
    return Math.floor(Math.random() * (12 - 2 + 1)) + 2;
}

function r2Dresult() {
    result = roll2d6();
    Result_js.innerHTML = result;
}

function startype() {
    x = roll2d6();
    STType_js.innerHTML = x;
}

let a, b, c; {
    a = 5;
    b = 6;
    c = a + b;
    document.getElementById("demo1").innerHTML = c;
}