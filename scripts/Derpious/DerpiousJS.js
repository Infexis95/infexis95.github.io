function STType() { //This Function Generates a star Type and Subtype as a string. For now, all stars are assumed to be class V.

   // Generate random number between 0 and 1 to be used for caluclating percentages.
   let x = Math.random();
   let y = Math.random();
   let z = Math.random();

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
      document.getElementById("result_box").value = "Error"
      console.log("startype:", result_type, "(not yet supported.)")
      return
   }

   // compare generated 'z' value to apply star subtype, star type "M" has a higher probability of having a higher subtype value.
   if (x > 0.091 && x < 0.454) {
      let result_M_subtype;
      console.log("startype: M (higher average subtype value)")
      if (y < 0.091) {
         result_M_subtype = "0";
      } else if (y > 0.091 && y < 0.182) {
         result_M_subtype = "1";
      } else if (y > 0.182 && y < 0.273) {
         result_M_subtype = "2";   // 
      } else if (y > 0.273 && y < 0.364) {
         result_M_subtype = "3";
      } else if (y > 0.364 && y < 0.455) {
         result_M_subtype = "4";
      } else if (y > 0.455 && y < 0.637) {
         result_M_subtype = "5";
      } else if (y > 0.637 && y < 0.728) {
         result_M_subtype = "6";
      } else if (y > 0.728 && y < 0.819) {
         result_M_subtype = "7";   // 
      } else if (y > 0.819 && y < 0.910) {
         result_M_subtype = "8";
      } else if (y > 0.910 && y < 1.000) {
         result_M_subtype = "9";
      }

      // print information in result.
      document.getElementById("result_box").value = result_type + result_M_subtype + " " + "V";
      console.log("Startype:", result_type, " ", " ", "gen.val", "=", x)
      console.log("M-Starsubtype:", result_M_subtype, " ", " ", "gen.val", "=", y)

   } else {

      // compare generated 'z' value to apply star subtype if star type is //NOT// M!
      let result_subtype;
      if (z < 0.182) {
         result_subtype = "0";
      } else if (z > 0.182 && z < 0.273) {
         result_subtype = "1";
      } else if (z > 0.273 && z < 0.364) {
         result_subtype = "2";   // 
      } else if (z > 0.364 && z < 0.455) {
         result_subtype = "3";
      } else if (z > 0.455 && z < 0.546) {
         result_subtype = "4";
      } else if (z > 0.546 && z < 0.637) {
         result_subtype = "5";
      } else if (z > 0.637 && z < 0.728) {
         result_subtype = "6";
      } else if (z > 0.728 && z < 0.819) {
         result_subtype = "7";   // 
      } else if (z > 0.819 && z < 0.910) {
         result_subtype = "8";
      } else if (z > 0.910 && z < 1.000) {
         result_subtype = "9";
      }

      // print information in result.
      document.getElementById("result_box").value = result_type + result_subtype + " " + "V";
      console.log("Startype:", result_type, " ", " ", "gen.val", "=", x)
      console.log("Starsubtype:", result_subtype, " ", " ", "gen.val", "=", y)
      console.log('%cStar Type, Subtype, and Class: ', 'color: yellow', result_type + result_subtype + " " + "V")

   }
}

function testX() {
   var x = document.getElementById("result_box").value;
   document.getElementById("herepls").innerHTML = x;
}

function test() {
   console.log(document.getElementById("result_box").value)

   var x = document.getElementById("result_box").value
   console.log("answer:", " ", x)

   if (x == "F0 V") {
      console.log("works!")
      document.getElementById("STmass").value = F0V.mass
      document.getElementById("STtemp").value = F0V.temp
      document.getElementById("STdiam").value = F0V.diam
      document.getElementById("STlumi").value = F0V.lumi
   } else {
      console.log("fail!")
   }
}

src = "../../scripts/Derpious/stellar_data.js"