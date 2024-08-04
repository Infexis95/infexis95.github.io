function STType() { //This Function Generates a star Type and Subtype as a string. Then applies the star's data.

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
      callSTinf()
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
      console.log('%cStar Type, Subtype, and Class: ', 'color: yellow', result_type + result_M_subtype + " " + "V")
      callSTinf()

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
      callSTinf()

   }
}

function callSTinf() { // This Function fetches the data for each of the applied startypes, it is then called by STType().
   var x = document.getElementById("result_box").value

   //Start of F0 V - F9 V ---------------------------------

   if (x == "F0 V") {
      console.log("F0 V!")
      document.getElementById("STmass").value = F0V.mass
      document.getElementById("STtemp").value = F0V.temp
      document.getElementById("STdiam").value = F0V.diam
      document.getElementById("STlumi").value = F0V.lumi
   } else if (x == "F1 V") {
      console.log("F1 V!")
      document.getElementById("STmass").value = F1V.mass
      document.getElementById("STtemp").value = F1V.temp
      document.getElementById("STdiam").value = F1V.diam
      document.getElementById("STlumi").value = F1V.lumi
   } else if (x == "F2 V") {
      console.log("F2 V!")
      document.getElementById("STmass").value = F2V.mass
      document.getElementById("STtemp").value = F2V.temp
      document.getElementById("STdiam").value = F2V.diam
      document.getElementById("STlumi").value = F2V.lumi
   } else if (x == "F3 V") {
      console.log("F3 V!")
      document.getElementById("STmass").value = F3V.mass
      document.getElementById("STtemp").value = F3V.temp
      document.getElementById("STdiam").value = F3V.diam
      document.getElementById("STlumi").value = F3V.lumi
   } else if (x == "F4 V") {
      console.log("F4 V!")
      document.getElementById("STmass").value = F4V.mass
      document.getElementById("STtemp").value = F4V.temp
      document.getElementById("STdiam").value = F4V.diam
      document.getElementById("STlumi").value = F4V.lumi
   } else if (x == "F5 V") {
      console.log("F5 V!")
      document.getElementById("STmass").value = F5V.mass
      document.getElementById("STtemp").value = F5V.temp
      document.getElementById("STdiam").value = F5V.diam
      document.getElementById("STlumi").value = F5V.lumi
   } else if (x == "F6 V") {
      console.log("F6 V!")
      document.getElementById("STmass").value = F6V.mass
      document.getElementById("STtemp").value = F6V.temp
      document.getElementById("STdiam").value = F6V.diam
      document.getElementById("STlumi").value = F6V.lumi
   } else if (x == "F7 V") {
      console.log("F7 V!")
      document.getElementById("STmass").value = F7V.mass
      document.getElementById("STtemp").value = F7V.temp
      document.getElementById("STdiam").value = F7V.diam
      document.getElementById("STlumi").value = F7V.lumi
   } else if (x == "F8 V") {
      console.log("F8 V!")
      document.getElementById("STmass").value = F8V.mass
      document.getElementById("STtemp").value = F8V.temp
      document.getElementById("STdiam").value = F8V.diam
      document.getElementById("STlumi").value = F8V.lumi
   } else if (x == "F9 V") {
      console.log("F9 V!")
      document.getElementById("STmass").value = F9V.mass
      document.getElementById("STtemp").value = F9V.temp
      document.getElementById("STdiam").value = F9V.diam
      document.getElementById("STlumi").value = F9V.lumi
   }

   // End of F0 V - F9 V ------------- Start of G0 V - G9 V

   else if (x == "G0 V") {
      console.log("G0 V!")
      document.getElementById("STmass").value = G0V.mass
      document.getElementById("STtemp").value = G0V.temp
      document.getElementById("STdiam").value = G0V.diam
      document.getElementById("STlumi").value = G0V.lumi
   } else if (x == "G1 V") {
      console.log("G1 V!")
      document.getElementById("STmass").value = G1V.mass
      document.getElementById("STtemp").value = G1V.temp
      document.getElementById("STdiam").value = G1V.diam
      document.getElementById("STlumi").value = G1V.lumi
   } else if (x == "G2 V") {
      console.log("G2 V!")
      document.getElementById("STmass").value = G2V.mass
      document.getElementById("STtemp").value = G2V.temp
      document.getElementById("STdiam").value = G2V.diam
      document.getElementById("STlumi").value = G2V.lumi
   } else if (x == "G3 V") {
      console.log("G3 V!")
      document.getElementById("STmass").value = G3V.mass
      document.getElementById("STtemp").value = G3V.temp
      document.getElementById("STdiam").value = G3V.diam
      document.getElementById("STlumi").value = G3V.lumi
   } else if (x == "G4 V") {
      console.log("G4 V!")
      document.getElementById("STmass").value = G4V.mass
      document.getElementById("STtemp").value = G4V.temp
      document.getElementById("STdiam").value = G4V.diam
      document.getElementById("STlumi").value = G4V.lumi
   } else if (x == "G5 V") {
      console.log("G5 V!")
      document.getElementById("STmass").value = G5V.mass
      document.getElementById("STtemp").value = G5V.temp
      document.getElementById("STdiam").value = G5V.diam
      document.getElementById("STlumi").value = G5V.lumi
   } else if (x == "G6 V") {
      console.log("G6 V!")
      document.getElementById("STmass").value = G6V.mass
      document.getElementById("STtemp").value = G6V.temp
      document.getElementById("STdiam").value = G6V.diam
      document.getElementById("STlumi").value = G6V.lumi
   } else if (x == "G7 V") {
      console.log("G7 V!")
      document.getElementById("STmass").value = G7V.mass
      document.getElementById("STtemp").value = G7V.temp
      document.getElementById("STdiam").value = G7V.diam
      document.getElementById("STlumi").value = G7V.lumi
   } else if (x == "G8 V") {
      console.log("G8 V!")
      document.getElementById("STmass").value = G8V.mass
      document.getElementById("STtemp").value = G8V.temp
      document.getElementById("STdiam").value = G8V.diam
      document.getElementById("STlumi").value = G8V.lumi
   } else if (x == "G9 V") {
      console.log("G9 V!")
      document.getElementById("STmass").value = G9V.mass
      document.getElementById("STtemp").value = G9V.temp
      document.getElementById("STdiam").value = G9V.diam
      document.getElementById("STlumi").value = G9V.lumi
   }

   // End of G0 V - G9 V ------------- Start of K0 V - K9 V

   else if (x == "K0 V") {
      console.log("K0 V!")
      document.getElementById("STmass").value = K0V.mass
      document.getElementById("STtemp").value = K0V.temp
      document.getElementById("STdiam").value = K0V.diam
      document.getElementById("STlumi").value = K0V.lumi
   } else if (x == "K1 V") {
      console.log("K1 V!")
      document.getElementById("STmass").value = K1V.mass
      document.getElementById("STtemp").value = K1V.temp
      document.getElementById("STdiam").value = K1V.diam
      document.getElementById("STlumi").value = K1V.lumi
   } else if (x == "K2 V") {
      console.log("K2 V!")
      document.getElementById("STmass").value = K2V.mass
      document.getElementById("STtemp").value = K2V.temp
      document.getElementById("STdiam").value = K2V.diam
      document.getElementById("STlumi").value = K2V.lumi
   } else if (x == "K3 V") {
      console.log("K3 V!")
      document.getElementById("STmass").value = K3V.mass
      document.getElementById("STtemp").value = K3V.temp
      document.getElementById("STdiam").value = K3V.diam
      document.getElementById("STlumi").value = K3V.lumi
   } else if (x == "K4 V") {
      console.log("K4 V!")
      document.getElementById("STmass").value = K4V.mass
      document.getElementById("STtemp").value = K4V.temp
      document.getElementById("STdiam").value = K4V.diam
      document.getElementById("STlumi").value = K4V.lumi
   } else if (x == "K5 V") {
      console.log("K5 V!")
      document.getElementById("STmass").value = K5V.mass
      document.getElementById("STtemp").value = K5V.temp
      document.getElementById("STdiam").value = K5V.diam
      document.getElementById("STlumi").value = K5V.lumi
   } else if (x == "K6 V") {
      console.log("K6 V!")
      document.getElementById("STmass").value = K6V.mass
      document.getElementById("STtemp").value = K6V.temp
      document.getElementById("STdiam").value = K6V.diam
      document.getElementById("STlumi").value = K6V.lumi
   } else if (x == "K6 V") {
      console.log("K7 V!")
      document.getElementById("STmass").value = K7V.mass
      document.getElementById("STtemp").value = K7V.temp
      document.getElementById("STdiam").value = K7V.diam
      document.getElementById("STlumi").value = K7V.lumi
   } else if (x == "K8 V") {
      console.log("K8 V!")
      document.getElementById("STmass").value = K8V.mass
      document.getElementById("STtemp").value = K8V.temp
      document.getElementById("STdiam").value = K8V.diam
      document.getElementById("STlumi").value = K8V.lumi
   } else if (x == "K9 V") {
      console.log("K9 V!")
      document.getElementById("STmass").value = K9V.mass
      document.getElementById("STtemp").value = K9V.temp
      document.getElementById("STdiam").value = K9V.diam
      document.getElementById("STlumi").value = K9V.lumi
   }

   // End of K0 V - K9 V ------------- Start of M0 V - M9 V   

   else if (x == "M0 V") {
      console.log("M0 V!")
      document.getElementById("STmass").value = M0V.mass
      document.getElementById("STtemp").value = M0V.temp
      document.getElementById("STdiam").value = M0V.diam
      document.getElementById("STlumi").value = M0V.lumi
   } else if (x == "M1 V") {
      console.log("M1 V!")
      document.getElementById("STmass").value = M1V.mass
      document.getElementById("STtemp").value = M1V.temp
      document.getElementById("STdiam").value = M1V.diam
      document.getElementById("STlumi").value = M1V.lumi
   } else if (x == "M2 V") {
      console.log("M2 V!")
      document.getElementById("STmass").value = M2V.mass
      document.getElementById("STtemp").value = M2V.temp
      document.getElementById("STdiam").value = M2V.diam
      document.getElementById("STlumi").value = M2V.lumi
   } else if (x == "M3 V") {
      console.log("M3 V!")
      document.getElementById("STmass").value = M3V.mass
      document.getElementById("STtemp").value = M3V.temp
      document.getElementById("STdiam").value = M3V.diam
      document.getElementById("STlumi").value = M3V.lumi
   } else if (x == "M4 V") {
      console.log("M4 V!")
      document.getElementById("STmass").value = M4V.mass
      document.getElementById("STtemp").value = M4V.temp
      document.getElementById("STdiam").value = M4V.diam
      document.getElementById("STlumi").value = M4V.lumi
   } else if (x == "M5 V") {
      console.log("M5 V!")
      document.getElementById("STmass").value = M5V.mass
      document.getElementById("STtemp").value = M5V.temp
      document.getElementById("STdiam").value = M5V.diam
      document.getElementById("STlumi").value = M5V.lumi
   } else if (x == "M6 V") {
      console.log("M6 V!")
      document.getElementById("STmass").value = M6V.mass
      document.getElementById("STtemp").value = M6V.temp
      document.getElementById("STdiam").value = M6V.diam
      document.getElementById("STlumi").value = M6V.lumi
   } else if (x == "M7 V") {
      console.log("M7 V!")
      document.getElementById("STmass").value = M7V.mass
      document.getElementById("STtemp").value = M7V.temp
      document.getElementById("STdiam").value = M7V.diam
      document.getElementById("STlumi").value = M7V.lumi
   } else if (x == "M8 V") {
      console.log("M8 V!")
      document.getElementById("STmass").value = M8V.mass
      document.getElementById("STtemp").value = M8V.temp
      document.getElementById("STdiam").value = M8V.diam
      document.getElementById("STlumi").value = M8V.lumi
   } else if (x == "M9 V") {
      console.log("M9 V!")
      document.getElementById("STmass").value = M9V.mass
      document.getElementById("STtemp").value = M9V.temp
      document.getElementById("STdiam").value = M9V.diam
      document.getElementById("STlumi").value = M9V.lumi
   }

   //End of M0 V - M9 V -----------------------------------

   else if (x == "Error") { // For unsupported Startypes
      console.log("No details for this startype")
      document.getElementById("STmass").value = " "
      document.getElementById("STtemp").value = " "
      document.getElementById("STdiam").value = " "
      document.getElementById("STlumi").value = " "
   }

   starvariance();

}

function starvariance() {
   const m = document.getElementById("STmass").value;
   const t = document.getElementById("STtemp").value;
   const d = document.getElementById("STdiam").value;
   const l = document.getElementById("STlumi").value;
   const M = Number(m);
   const T = Number(t);
   const D = Number(d);
   const L = Number(l);
   const r = (Math.floor(Math.random() * 1001) - 500) / 1000;
   const STvar = document.getElementById("test").value;
   console.log(" ");
   console.log("Adding Variance of +-" + STvar + "%")

   //  console.log("Mass: " + M);
   //  console.log("Temperature: " + T);
   //  console.log("Diamter: " + D);
   //  console.log("Luminosity: " + L);
   //
   //  console.log(((M * 0.2) * r) + M);
   //  console.log(((T * 0.2) * r) + T);
   //  console.log(((D * 0.2) * r) + D);
   //  console.log(((L * 0.2) * r) + L);

   const mr = (((M * STvar) * r) + M);
   const tr = (((T * STvar) * r) + T);
   const dr = (((D * STvar) * r) + D);
   const lr = (((L * STvar) * r) + L);

   console.log("Mass with Variance: " + Math.round(mr * 10000) / 10000);
   console.log("Temperature with Variance: " + Math.round(tr));
   console.log("Diameter with Variance: " + Math.round(dr * 10000) / 10000);
   console.log("Luminosity with Variance: " + Math.round(lr * 10000) / 10000);

   const mrR = (Math.round(mr * 10000) / 10000);
   const trR = (Math.round(tr));
   const drR = (Math.round(dr * 10000) / 10000);
   const lrR = (Math.round(lr * 10000) / 10000);

   document.getElementById("STmass").value = mrR;
   document.getElementById("STtemp").value = trR;
   document.getElementById("STdiam").value = drR;
   document.getElementById("STlumi").value = lrR;

}

var slider = document.getElementById("test");
var output = document.getElementById("STvar");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
} 

function test() {
console.log(document.getElementById("test").value)
}

function death() {
   location.reload(true);
   console.log("Welcome To The Afterlife")
}

src = "../../scripts/Derpious/stellar_data.js"