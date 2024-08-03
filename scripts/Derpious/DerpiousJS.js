const ClickMe_js = document.getElementById("genST"); // saves the 'Click Me' button in the ClickMe_js variable.
const Result_js = document.getElementById("Result"); // Same for the Result paragraph
const STType_js = document.getElementById("sttype");
const test_js = document.getElementById("result_box");
const roll2d = (Math.floor(Math.random() * (12 - 2 + 1)) + 2);
let SLC_V = " V"

function roll2d6() {
   return (Math.floor(Math.random() * (12 - 2 + 1)) + 2);
}

function r2Dresult() {
   document.querySelectorAll('#result_box').forEach(el => { el.innerHTML = roll2d6() + "" + roll2d6() + SLC_V; });
}

function val_transf() {
   Math.random()              //I realised that rolling 2d6 to determine value adds extra and unnecessary complexity. The whole reason for rolling the 2d6
   let x = Math.random()      //is to generate a random number between 2 and 12. Aka 11 different numbers. Dividing the 4 types based on their frequency,
   if (x < 0.45) {            //I get a percentage number which I can randomly generate via math.random()
      document.getElementById("result_box2").innerHTML = "M";  
   } else if (x > 0.45, x < 0.67) {
      document.getElementById("result_box2").innerHTML = "K";   // example: roll 2d6. a roll of 3, 4, 5, and 6 gives you M. 4 / 9 is roughly 45%.
   } else if (x > 0.67, x < 0.89) {                             // a roll of 7 or 8 gives you K. 22%. Same goes for G, etc.
      document.getElementById("result_box2").innerHTML = "G";   // 
   } else if (x > 0.89, x < 1) {
      document.getElementById("result_box2").innerHTML = "F";
   }
      document.getElementById("result_box3").innerHTML = x;

}

