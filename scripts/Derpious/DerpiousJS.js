src = "../../scripts/Derpious/stellar_data.js"

const Flee = "FLEEEEE"

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
      document.getElementById("PS-type").value = "Error"
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
      document.getElementById("PS-type").value = result_type + result_M_subtype + " " + "V";
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
      document.getElementById("PS-type").value = result_type + result_subtype + " " + "V";
      console.log("Startype:", result_type, " ", " ", "gen.val", "=", x)
      console.log("Starsubtype:", result_subtype, " ", " ", "gen.val", "=", y)
      console.log('%cStar Type, Subtype, and Class: ', 'color: yellow', result_type + result_subtype + " " + "V")
      callSTinf()

   }
}

function callSTinf() { // This Function fetches the data for each of the applied startypes, it is then called by STType().
   var x = document.getElementById("PS-type").value

   //Start of F0 V - F9 V ---------------------------------

   if (x == "F0 V") {
      document.getElementById("PS-STmass").value = F0V.mass
      document.getElementById("PS-STtemp").value = F0V.temp
      document.getElementById("PS-STdiam").value = F0V.diam
   } else if (x == "F1 V") {
      document.getElementById("PS-STmass").value = F1V.mass
      document.getElementById("PS-STtemp").value = F1V.temp
      document.getElementById("PS-STdiam").value = F1V.diam
   } else if (x == "F2 V") {
      document.getElementById("PS-STmass").value = F2V.mass
      document.getElementById("PS-STtemp").value = F2V.temp
      document.getElementById("PS-STdiam").value = F2V.diam
   } else if (x == "F3 V") {
      document.getElementById("PS-STmass").value = F3V.mass
      document.getElementById("PS-STtemp").value = F3V.temp
      document.getElementById("PS-STdiam").value = F3V.diam
   } else if (x == "F4 V") {
      document.getElementById("PS-STmass").value = F4V.mass
      document.getElementById("PS-STtemp").value = F4V.temp
      document.getElementById("PS-STdiam").value = F4V.diam
   } else if (x == "F5 V") {
      document.getElementById("PS-STmass").value = F5V.mass
      document.getElementById("PS-STtemp").value = F5V.temp
      document.getElementById("PS-STdiam").value = F5V.diam
   } else if (x == "F6 V") {
      document.getElementById("PS-STmass").value = F6V.mass
      document.getElementById("PS-STtemp").value = F6V.temp
      document.getElementById("PS-STdiam").value = F6V.diam
   } else if (x == "F7 V") {
      document.getElementById("PS-STmass").value = F7V.mass
      document.getElementById("PS-STtemp").value = F7V.temp
      document.getElementById("PS-STdiam").value = F7V.diam
   } else if (x == "F8 V") {
      document.getElementById("PS-STmass").value = F8V.mass
      document.getElementById("PS-STtemp").value = F8V.temp
      document.getElementById("PS-STdiam").value = F8V.diam
   } else if (x == "F9 V") {
      document.getElementById("PS-STmass").value = F9V.mass
      document.getElementById("PS-STtemp").value = F9V.temp
      document.getElementById("PS-STdiam").value = F9V.diam
   }

   // End of F0 V - F9 V ------------- Start of G0 V - G9 V

   else if (x == "G0 V") {
      document.getElementById("PS-STmass").value = G0V.mass
      document.getElementById("PS-STtemp").value = G0V.temp
      document.getElementById("PS-STdiam").value = G0V.diam
   } else if (x == "G1 V") {
      document.getElementById("PS-STmass").value = G1V.mass
      document.getElementById("PS-STtemp").value = G1V.temp
      document.getElementById("PS-STdiam").value = G1V.diam
   } else if (x == "G2 V") {
      document.getElementById("PS-STmass").value = G2V.mass
      document.getElementById("PS-STtemp").value = G2V.temp
      document.getElementById("PS-STdiam").value = G2V.diam
   } else if (x == "G3 V") {
      document.getElementById("PS-STmass").value = G3V.mass
      document.getElementById("PS-STtemp").value = G3V.temp
      document.getElementById("PS-STdiam").value = G3V.diam
   } else if (x == "G4 V") {
      document.getElementById("PS-STmass").value = G4V.mass
      document.getElementById("PS-STtemp").value = G4V.temp
      document.getElementById("PS-STdiam").value = G4V.diam
   } else if (x == "G5 V") {
      document.getElementById("PS-STmass").value = G5V.mass
      document.getElementById("PS-STtemp").value = G5V.temp
      document.getElementById("PS-STdiam").value = G5V.diam
   } else if (x == "G6 V") {
      document.getElementById("PS-STmass").value = G6V.mass
      document.getElementById("PS-STtemp").value = G6V.temp
      document.getElementById("PS-STdiam").value = G6V.diam
   } else if (x == "G7 V") {
      document.getElementById("PS-STmass").value = G7V.mass
      document.getElementById("PS-STtemp").value = G7V.temp
      document.getElementById("PS-STdiam").value = G7V.diam
   } else if (x == "G8 V") {
      document.getElementById("PS-STmass").value = G8V.mass
      document.getElementById("PS-STtemp").value = G8V.temp
      document.getElementById("PS-STdiam").value = G8V.diam
   } else if (x == "G9 V") {
      document.getElementById("PS-STmass").value = G9V.mass
      document.getElementById("PS-STtemp").value = G9V.temp
      document.getElementById("PS-STdiam").value = G9V.diam
   }

   // End of G0 V - G9 V ------------- Start of K0 V - K9 V

   else if (x == "K0 V") {
      document.getElementById("PS-STmass").value = K0V.mass
      document.getElementById("PS-STtemp").value = K0V.temp
      document.getElementById("PS-STdiam").value = K0V.diam
   } else if (x == "K1 V") {
      document.getElementById("PS-STmass").value = K1V.mass
      document.getElementById("PS-STtemp").value = K1V.temp
      document.getElementById("PS-STdiam").value = K1V.diam
   } else if (x == "K2 V") {
      document.getElementById("PS-STmass").value = K2V.mass
      document.getElementById("PS-STtemp").value = K2V.temp
      document.getElementById("PS-STdiam").value = K2V.diam
   } else if (x == "K3 V") {
      document.getElementById("PS-STmass").value = K3V.mass
      document.getElementById("PS-STtemp").value = K3V.temp
      document.getElementById("PS-STdiam").value = K3V.diam
   } else if (x == "K4 V") {
      document.getElementById("PS-STmass").value = K4V.mass
      document.getElementById("PS-STtemp").value = K4V.temp
      document.getElementById("PS-STdiam").value = K4V.diam
   } else if (x == "K5 V") {
      document.getElementById("PS-STmass").value = K5V.mass
      document.getElementById("PS-STtemp").value = K5V.temp
      document.getElementById("PS-STdiam").value = K5V.diam
   } else if (x == "K6 V") {
      document.getElementById("PS-STmass").value = K6V.mass
      document.getElementById("PS-STtemp").value = K6V.temp
      document.getElementById("PS-STdiam").value = K6V.diam
   } else if (x == "K6 V") {
      document.getElementById("PS-STmass").value = K7V.mass
      document.getElementById("PS-STtemp").value = K7V.temp
      document.getElementById("PS-STdiam").value = K7V.diam
   } else if (x == "K8 V") {
      document.getElementById("PS-STmass").value = K8V.mass
      document.getElementById("PS-STtemp").value = K8V.temp
      document.getElementById("PS-STdiam").value = K8V.diam
   } else if (x == "K9 V") {
      document.getElementById("PS-STmass").value = K9V.mass
      document.getElementById("PS-STtemp").value = K9V.temp
      document.getElementById("PS-STdiam").value = K9V.diam
   }

   // End of K0 V - K9 V ------------- Start of M0 V - M9 V   

   else if (x == "M0 V") {
      document.getElementById("PS-STmass").value = M0V.mass
      document.getElementById("PS-STtemp").value = M0V.temp
      document.getElementById("PS-STdiam").value = M0V.diam
   } else if (x == "M1 V") {
      document.getElementById("PS-STmass").value = M1V.mass
      document.getElementById("PS-STtemp").value = M1V.temp
      document.getElementById("PS-STdiam").value = M1V.diam
   } else if (x == "M2 V") {
      document.getElementById("PS-STmass").value = M2V.mass
      document.getElementById("PS-STtemp").value = M2V.temp
      document.getElementById("PS-STdiam").value = M2V.diam
   } else if (x == "M3 V") {
      document.getElementById("PS-STmass").value = M3V.mass
      document.getElementById("PS-STtemp").value = M3V.temp
      document.getElementById("PS-STdiam").value = M3V.diam
   } else if (x == "M4 V") {
      document.getElementById("PS-STmass").value = M4V.mass
      document.getElementById("PS-STtemp").value = M4V.temp
      document.getElementById("PS-STdiam").value = M4V.diam
   } else if (x == "M5 V") {
      document.getElementById("PS-STmass").value = M5V.mass
      document.getElementById("PS-STtemp").value = M5V.temp
      document.getElementById("PS-STdiam").value = M5V.diam
   } else if (x == "M6 V") {
      document.getElementById("PS-STmass").value = M6V.mass
      document.getElementById("PS-STtemp").value = M6V.temp
      document.getElementById("PS-STdiam").value = M6V.diam
   } else if (x == "M7 V") {
      document.getElementById("PS-STmass").value = M7V.mass
      document.getElementById("PS-STtemp").value = M7V.temp
      document.getElementById("PS-STdiam").value = M7V.diam
   } else if (x == "M8 V") {
      document.getElementById("PS-STmass").value = M8V.mass
      document.getElementById("PS-STtemp").value = M8V.temp
      document.getElementById("PS-STdiam").value = M8V.diam
   } else if (x == "M9 V") {
      document.getElementById("PS-STmass").value = M9V.mass
      document.getElementById("PS-STtemp").value = M9V.temp
      document.getElementById("PS-STdiam").value = M9V.diam
   }

   //End of M0 V - M9 V -----------------------------------

   else if (x == "Error") { // For (currently) unsupported Startypes
      console.log("No details for this startype")
      document.getElementById("PS-STmass").value = "0"
      document.getElementById("PS-STtemp").value = "0"
      document.getElementById("PS-STdiam").value = "0"
      document.getElementById("PS-STlumi").value = "0"
   }

   starvariance();
   lumcalc();
   sysage();
}

function starvariance() { // this function applies a variable to the base star data, as set by the user. Does not affect Luminosity or System Age. called by stargen function
   const m = document.getElementById("PS-STmass").value;
   const t = document.getElementById("PS-STtemp").value;
   const d = document.getElementById("PS-STdiam").value;
   const M = Number(m);
   const T = Number(t);
   const D = Number(d);
   const r = (Math.floor(Math.random() * 1001) - 500) / 1000;
   const STvar = document.getElementById("test").value;
   console.log(" ");
   console.log("Adding Variance of +-" + STvar + "%")

   const mr = (((M * STvar) * r) + M);
   const tr = (((T * STvar) * r) + T);
   const dr = (((D * STvar) * r) + D);

   console.log("Mass with Variance: " + Math.round(mr * 10000) / 10000);
   console.log("Temperature with Variance: " + Math.round(tr));
   console.log("Diameter with Variance: " + Math.round(dr * 10000) / 10000);

   const mrR = (Math.round(mr * 10000) / 10000);
   const trR = (Math.round(tr));
   const drR = (Math.round(dr * 10000) / 10000);

   document.getElementById("PS-STmass").value = mrR;
   document.getElementById("PS-STtemp").value = trR;
   document.getElementById("PS-STdiam").value = drR;

}

function lumcalc() { // This function generates the star's luminosity and is called during stargen function.
   const x = document.getElementById("PS-STtemp").value;
   const z = document.getElementById("PS-STdiam").value;

   console.log("Star Temp: " + x);
   console.log("Star Diam: " + z);

   const truelum = Math.pow((z / 1), 2) * Math.pow((x / 5772), 4);

   var truelumrounded = (Math.round(truelum * 10000) / 10000)

   console.log(truelumrounded);

   document.getElementById("PS-STlumi").value = truelumrounded;
}

function sysage() {  // This function generates the star and system's age in Gyr, and is called during stargen function.
   const mass = document.getElementById("PS-STmass").value;
   const type = document.getElementById("PS-type").value;
   var MSL = 10 / (Math.pow(mass, 2.5));
   var MSLrounded = (Math.round(MSL * 10000) / 10000); // To be used for star age generation, and also a neat detail.
   var ran1000 = Math.floor(Math.random() * 1001) + 1;

   console.log("mass: " + mass);
   console.log(MSLrounded);
   console.log(ran1000);

   if (type == "Error") {  // When no star is generated due to unsupported startype, skip generating system age.
      document.getElementById("systemage").value = "0";

   } else if (mass > 0.9) {  // generates system age for stars of mass greater than 0.9. Also contains function to set minimum value incase of star mass being less than 4.7.
      console.log("big star!")
      var bigstar = MSLrounded * (ran1000 / 1000)
      var bigstarrounded = (Math.round(bigstar * 10000) / 10000).toFixed(4);
      console.log(bigstarrounded);


      if (mass < 4.7 && bigstarrounded < 0.01) { // This function sets the minimum system age for stars of mass less than 4.7 to 0.01.
         console.log("Minimum value set to 0.01.")
         document.getElementById("systemage").value = 0.01;
         return
      }

      document.getElementById("systemage").value = bigstarrounded;

   } else {  // generates system age for stars of mass less than 0.9. No need for minimum value addition.
      var x = Math.floor(Math.random() * 6) + 1;
      var z = Math.floor(Math.random() * 3) + 1;
      var yvar = (Math.floor(Math.random() * 10000) + 1) / 10000;
      var smallstar = x * 2 + z - 2 + yvar;
      var smallstarrounded = (Math.round(smallstar * 10000) / 10000).toFixed(4);

      console.log("Small Star!")
      console.log("rounded value: " + smallstarrounded)
      document.getElementById("systemage").value = smallstarrounded;
   }

var primordial = document.getElementById("systemage").value;

   if (primordial <= 0 && primordial != 0) {
      console.log("Primordial system!")
   }

   if (type == "Post-Stellar") {
      window.alert("WHAT HAVE YOU DONE? THIS ISN'T SUPPOSED TO HAPPEN! YOU FOOOOOOOL")
   }

}

function multistargen() { // This function calls the four functions below to check if the Primary Star has any Companion or Secondary Star(s).
   primarycompanionstar();
   secondaryclose();
   secondarynear();
   secondaryfar();
}

function primarycompanionstar() { // This function checks if the Primary Star has a Companion Star.
   var x = Math.random();
   var s = document.getElementById("PS-type").value;
   let z = s.includes("F");
   let y = s.includes("M");

   if (y == true && x <= 0.182 || x <= 0.272 || z == true && x <= 0.364) {
      console.log("Primary Star has 'Companion' Star.");
   }
}

function secondaryclose() { // This function checks if the Primary Star has a Close Secondary Star, and if the Close Star has a Companion Star.
   var s = document.getElementById("PS-type").value;
   var x1 = Math.random();
   var x2 = Math.random();
   let z = s.includes("F");
   let y = s.includes("M");

   if (y == true && x1 <= 0.182 || x1 <= 0.272 || z == true && x1 <= 0.364) {
      console.log("Primary Star has 'Close' Secondary Star.");
      if (y == true && x2 <= 0.182 || x2 <= 0.272 || z == true && x2 <= 0.364) {
         console.log("'Close' Secondary Star has a 'Companion' Star.");
      }
   }
}

function secondarynear() { // This function checks if the Primary Star has a Near Secondary Star, and if the Near Star has a Companion Star.
   var s = document.getElementById("PS-type").value;
   var x1 = Math.random();
   var x2 = Math.random();
   let z = s.includes("F");
   let y = s.includes("M");

   if (y == true && x1 <= 0.182 || x1 <= 0.272 || z == true && x1 <= 0.364) {
      console.log("Primary Star has 'Near' Secondary Star.");
      if (y == true && x2 <= 0.182 || x2 <= 0.272 || z == true && x2 <= 0.364) {
         console.log("'Near' Secondary Star has a 'Companion' Star.")
      }
   }
}

function secondaryfar() { // This function checks if the Primary Star has a Far Secondary Star, and if the Far Star has a Companion Star.
   var s = document.getElementById("PS-type").value;
   var x1 = Math.random();
   var x2 = Math.random();
   let z = s.includes("F");
   let y = s.includes("M");
   
   if (y == true && x1 <= 0.182 || x1 <= 0.272 || z == true && x1 <= 0.364) {
      console.log("Primary Star has 'Far' Secondary Star.");
      if (y == true && x2 <= 0.182 || x2 <= 0.272 || z == true && x2 <= 0.364) {
         console.log("'Far' Secondary Star has a 'Companion' Star.")
      }
   }
}

function starobjname() {
   // this function will read the amount of stars and apply correct object names to each.
}

















// Below this line, I put exclusively random bullshit :)

var slider = document.getElementById("test");
var output = document.getElementById("STvar");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
   output.innerHTML = this.value;
}

function death() {
   location.reload(true);
   console.log("Welcome To The Afterlife")
}










//         2d6        2d6 + 1    2d6 - 1
//    1    2          3          1
//    2    3          4          2
//    3    4          5          3
//    4    5          6          4
//    5    6          7          5
//    6    7          8          6
//    7    8          9          7
//    8    9          10         8
//    9    10         11         9
//    10   11         12         10
//    11   12         13         11
//    ----------------------------------------------------------
//    chance of rolling 10+ on 2d6 - 1 = 0.182
//    chance of rolling 10+ on 2d6     = 0.272
//    chance of rolling 10+ on 2d6 + 1 = 0.364    