const ClickMe_js = document.getElementsByClassName("genST"); // saves the 'Click Me' button in the ClickMe_js variable.
const Result_js = document.getElementById("Result"); // Same for the Result paragraph
const Addup_js = document.getElementById("addup")

function roll2d6() {
   return Math.floor(Math.random() * (12 - 2 + 1)) + 2;
}

function r2Dresult() {
   
}