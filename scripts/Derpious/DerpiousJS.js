function STType() {

   // Generate random number between 0 and 1.
   let x = Math.random();
   let y = Math.random();

   // compare generated 'x' value to apply star type.
   let result_type;
   if (x < 0.091) {
      result_type = "Special";
   } else if (x > 0.091 && x < 0.454) {
      result_type = "M";
   } else if (x > 0.454 && x < 0.636) {
      result_type = "K";   // 
   } else if (x > 0.636 && x < 0.818) {
      result_type = "G";
   } else if (x > 0.818 && x < 0.909) {
      result_type = "F";
   } else if (x > 0.909 && x < 1.000) {
      result_type = "Hot";
   }

   // Star type "special" and "hot" are different from ordinary, so I'll updated that in future.
   if (x < 0.091 || x > 0.909 && x < 1.000) {
      document.getElementById("result_box").innerHTML = "Error"
      console.log("startype:", result_type, "(not yet supported.)")
      return
   }

   // compare generated 'y' value to apply star subtype.
   let result_subtype;
   if (y < 0.182) {
      result_subtype = "0";
   } else if (y > 0.182 && y < 0.273) {
      result_subtype = "1";
   } else if (y > 0.273 && y < 0.364) {
      result_subtype = "2";   // 
   } else if (y > 0.364 && y < 0.455) {
      result_subtype = "3";
   } else if (y > 0.455 && y < 0.546) {
      result_subtype = "4";
   } else if (y > 0.546 && y < 0.637) {
      result_subtype = "5";
   } else if (y > 0.637 && y < 0.728) {
      result_subtype = "6";
   } else if (y > 0.728 && y < 0.819) {
      result_subtype = "7";   // 
   } else if (y > 0.819 && y < 0.910) {
      result_subtype = "8";
   } else if (y > 0.910 && y < 1.000) {
      result_subtype = "9";
   }

   // print information in result.
   document.getElementById("result_box").innerHTML = result_type + result_subtype + " " + "V";
   console.log("Startype:", result_type, " ", " ", "gen.val", "=", x)
   console.log("Starsubtype:", result_subtype, " ", " ", "gen.val", "=", y)

}

function temp() {
   document.getElementById("testbox1").addEventListener("input")
   if (x = "hello") {
      document.getElementById("testbox2") = "Works!"
   } else {
      document.getElementById("testbox2") = "Error"
   }
}