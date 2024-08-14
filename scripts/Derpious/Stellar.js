src = "../../scripts/Derpious/stellar_data.js"

function generatePrimaryStar() {
    // Here I generate a random number between 2 and 12, to be used within the generator.
    const roll_2D = () => Math.floor(Math.random() * 11) + 2;
    const roll = Array.from({ length: 19 }, () => roll_2D());


    // Below are a series of constants that pull information from the Stellar_Data.JS file and applying the rolls from the top part to give me a random one.
    const getPrimaryStarType = (roll0) => {
        const Type = StarType.find(type => type.roll.includes(roll0));
        return Type ? Type.type : '';
    }; const callPST = getPrimaryStarType(roll[0]);

    const getHotPrimaryStarType = (roll1) => {
        const hotType = HotStarType.find(type => type.roll.includes(roll1));
        return hotType ? hotType.type : '';
    }; const callhPST = getHotPrimaryStarType(roll[1]);

    const getSpecialPrimaryStarType = (roll2) => {
        const specialType = SpecialStarType.find(type => type.roll.includes(roll2));
        return specialType ? specialType.type : '';
    }; const callsPST = getSpecialPrimaryStarType(roll[2]);

    const getUnusualPrimaryStarType = (roll3) => {
        const unusualType = UnusualStarType.find(type => type.roll.includes(roll3));
        return unusualType ? unusualType.type : '';
    }; const calluPST = getUnusualPrimaryStarType(roll[3]);

    const getGiantPrimaryStarType = (roll4) => {
        const giantType = GiantStarType.find(type => type.roll.includes(roll4));
        return giantType ? giantType.type : '';
    }; const callgPST = getGiantPrimaryStarType(roll[4]);

    const getPeculiarPrimaryStarType = (roll5) => {
        const peculiarType = PeculiarStarType.find(type => type.roll.includes(roll5));
        return peculiarType ? peculiarType.type : '';
    }; const callpPST = getPeculiarPrimaryStarType(roll[5]);

    const getExtraPrimaryStarType = (roll6) => {
        const extraType = ExtraStarType.find(type => type.roll.includes(roll6));
        return extraType ? extraType.type : '';
    }; const callePST = getExtraPrimaryStarType(roll[6]);

    const getHotExtraPrimaryStarType = (roll7) => {
        const extraHotType = ExtraHotStarType.find(type => type.roll.includes(roll7));
        return extraHotType ? extraHotType.type : '';
    }; const callehPST = getHotExtraPrimaryStarType(roll[7]);

    const getClassVIPrimaryStarType = (roll8) => {
        const classVIType = ClassVIStarType.find(type => type.roll.includes(roll8));
        return classVIType ? classVIType.type : '';
    }; const callVIPST = getClassVIPrimaryStarType(roll[8]);

    const getHotClassVIPrimaryStarType = (roll9) => {
        const classVIHotType = HotClassVIStarType.find(type => type.roll.includes(roll9));
        return classVIHotType ? classVIHotType.type : '';
    }; const callhVIPST = getHotClassVIPrimaryStarType(roll[9]);

    const getClassIVPrimaryStarType = (roll10) => {
        const classIVType = ClassIVStarType.find(type => type.roll.includes(roll10));
        return classIVType ? classIVType.type : '';
    }; const callIVPST = getClassIVPrimaryStarType(roll[10]);

    const getHotClassIVPrimaryStarType = (roll11) => {
        const classIVHotType = HotClassIVStarType.find(type => type.roll.includes(roll11));
        return classIVHotType ? classIVHotType.type : '';
    }; const callhIVPST = getHotClassIVPrimaryStarType(roll[11]);

    const getBrownDwarfType = (roll12) => {
        const BDType = BrownDwarfType.find(type => type.roll.includes(roll12));
        return BDType ? BDType.type : '';
    }; const callBDT = getBrownDwarfType(roll[15]);

    const getSubType = (roll13) => {
        const subType = SubType.find(type => type.roll.includes(roll13));
        return subType ? subType.type : '';
    }; const callSBT = getSubType(roll[13]);

    const getMSubType = (roll14) => {
        const MsubType = SubType_M.find(type => type.roll.includes(roll14));
        return MsubType ? MsubType.type : '';
    }; const callmSBT = getMSubType(roll[14]);

    const getKSubType = (roll15) => {
        const KsubType = SubType_K.find(type => type.roll.includes(roll15));
        return KsubType ? KsubType.type : '';
    }; const callkSBT = getKSubType(roll[15]);

    const getBDSubType = (roll16) => {
        const BDsubType = SubType_BD.find(type => type.roll.includes(roll16));
        return BDsubType ? BDsubType.type : '';
    }; const callBDST = getBDSubType(roll[16]);

    const getBDYSubType = (roll17) => {
        const BDYsubType = SubType_BD_Y.find(type => type.roll.includes(roll17));
        return BDYsubType ? BDYsubType.type : '';
    }; const callBDYST = getBDYSubType(roll[17]);

    const getDSubType = (roll18) => {
        const DsubType = SubType_D.find(type => type.roll.includes(roll18));
        return DsubType ? DsubType.type : '';
    }; const callDST = getDSubType(roll[18]);

    // ----------------------------------------------------------------------------------- //

    // BASE DEFINITIONS
    // Base Type Definition
    let T = callPST;

    // Base Subtype Definition
    let S = callSBT;
    if (T === "M") {
        S = callmSBT;
    };
    // Base Class Definition
    let C = starClasses[2];


    // IF Base Type is Hot: Roll for Type on Hot table.
    if (T == "Hot") {
        T = callhPST;
    };


    // IF Base Type is Special:
    // IF Special Type is Class VI.
    if (T == "Special" && callsPST == "Class VI") {
        T = callVIPST;
        if (callVIPST == "Hot") {
            T = callhVIPST;
        };
        C = starClasses[1];

        // IF Special Type is Class IV.   
    } else if (T == "Special" && callsPST == "Class IV") {
        T = callIVPST;
        if (callIVPST == "Hot") {
            T = callhIVPST;
        };
        if (T == "K") {
            S = callkSBT;
        };
        C = starClasses[3];

        // IF Special Type is Class III.
    } else if (T == "Special" && callsPST == "Class III") {
        T = callePST;
        if (callePST == "Hot") {
            T = callehPST;
        };
        C = starClasses[4];
    };

    // IF Special Type is Giants.
    if (callPST == "Special" && callsPST == "Giants") {
        T = callePST;
        if (callePST == "Hot") {
            T = callehPST;
        };
        if (callgPST == "Class III") {
            C = starClasses[4];
        } else if (callgPST == "Class II") {
            C = starClasses[5];
        } else if (callgPST == "Class Ib") {
            C = starClasses[6];
        } else if (callgPST == "Class Ia") {
            C = starClasses[7];
        };
    };


    // IF Base Type is Special and Special Type is Unusual.
    // IF Unusual Type is Class VI.
    if (T == "Special" && callsPST == "Unusual" && calluPST == "Class VI") {
        T = callVIPST;
        if (callVIPST == "Hot") {
            T = callhVIPST;
        };
        C = starClasses[1];

        // IF Unusual Type is Class IV.
    } else if (T == "Special" && callsPST == "Unusual" && calluPST == "Class IV") {
        T = callIVPST;
        if (callIVPST == "Hot") {
            T = callhIVPST;
        };
        if (T == "K") {
            S = callkSBT;
        };
        C = starClasses[3];

        // IF Unusual Type is Class III.
    } else if (T == "Special" && callsPST == "Unusual" && calluPST == "Class III") {
        T = callePST;
        if (callePST == "Hot") {
            T = callehPST;
        };
        C = starClasses[4];

        // IF Unusual Type is Giants.
    } else if (T == "Special" && callsPST == "Unusual" && calluPST == "Giants") {
        T = callePST;
        if (callePST == "Hot") {
            T = callehPST;
        };
        if (callgPST == "Class III") {
            C = starClasses[4];
        } else if (callgPST == "Class II") {
            C = starClasses[5];
        } else if (callgPST == "Class Ib") {
            C = starClasses[6];
        } else if (callgPST == "Class Ia") {
            C = starClasses[7];
        };

        // IF Unusual Type is BD.
    } else if (T == "Special" && callsPST == "Unusual" && calluPST == "BD") {
        T = callBDT;
        if (callBDT == "Y") {
            S = callBDYST;
        } else {
            S = callBDST;
        };
        C = "";

        // IF Unusual Type is Class D.
    } else if (T == "Special" && callsPST == "Unusual" && calluPST == "D") {
        T = "D";
        S = callDST;
        C = "";
    };

    // IF Base Type is Special and Special Type is Peculiar.
    if (T == "Special" && callsPST == "Unusual" && calluPST == "Peculiar") {
        // Special case for Anomaly. Just for fun.
        if (callpPST == "Anomaly") {
            T = callpPST;
            S = "";
            C = "";
            window.alert("YOU'VE AWOKENED THE DARK GODS");
        } else {
            T = callpPST;
            S = "";
            C = "";
        };
    };

    //  ----------!!!!----------IMPORTANT SIDE NOTE!----------!!!!----------  //
    // The Peculiar Table generates things that are too complex to be simply  //
    // put into a generator like this. For example, Black Holes, Nebulas, or  //
    // Anomalies. Because of this, I've decided not to develop rolls on the   //
    // Peculiar Table for now, and leaving it for the future.                 //

    // Output The Full Primary Star in Console.
    let PrimaryStar = T + S;
    let PrimaryClass = C
    console.log("Primary Star: " + PrimaryStar + PrimaryClass);
    document.getElementById("InputPrimaryStarType").value = PrimaryStar + PrimaryClass;

    if (calluPST == "D") {
        Whitedwarf();
    } else {
        generatePrimaryStarData();
    }
};

function generatePrimaryStarData() {
    // Fetches StarType and changes it into a Key to be used for fetching data.
    let StarDataKey = document.getElementById("InputPrimaryStarType").value;
    StarDataKey = StarDataKey.replace(" ", "");
    const StarData = starData[StarDataKey];

    // Turns the data from a string into numeric values.
    // Temp = parseFloat(StarData.temp);

    let Mass = parseFloat(StarData.mass);
    const GiantMassVarianceRoll = (Math.floor(Math.random() * 5) + 2) / 10;
    const randomMass = (Math.floor(Math.random() * 1001) - 500) / 1000;
    let MassVar = GiantMassVarianceRoll
    if (StarDataKey.includes("V")) {
        MassVar = 0.2
    }
    let MassVariance = (((Mass * MassVar) * randomMass) + Mass);
    const RoundedMassVariance = (Math.round(MassVariance * 10000) / 10000);

    let Diam = parseFloat(StarData.diam);
    const GiantDiamVarianceRoll = (Math.floor(Math.random() * 5) + 2) / 10;
    const randomDiam = (Math.floor(Math.random() * 1001) - 500) / 1000;
    let DiamVar = GiantDiamVarianceRoll
    if (StarDataKey.includes("V")) {
        DiamVar = 0.2
    }
    let DiamVariance = (((Diam * DiamVar) * randomDiam) + Diam);
    const RoundedDiamVariance = (Math.round(DiamVariance * 10000) / 10000);



    const starDataKeys = Object.keys(starData);
    const currentIndex = starDataKeys.indexOf(StarDataKey);

    let previousStarData, nextStarData;
    if (currentIndex > 0) {
        previousStarData = starData[starDataKeys[currentIndex - 1]];
    }; if (currentIndex < starDataKeys.length - 1) {
        nextStarData = starData[starDataKeys[currentIndex + 1]];
    }

    let Middle_Temp = Number(StarData.temp);
    let Higher_Temp = Number(previousStarData ? previousStarData.temp : null);
    let Lower_Temp = Number(nextStarData ? nextStarData.temp : null);

    if (StarDataKey.includes("M9") || StarDataKey.includes("Y5")) {
        Lower_Temp = 0
    }; if (StarDataKey.includes("O0") || StarDataKey.includes("L0")) {
        Higher_Temp = 0
    }

    const randomTemp = (Math.floor(Math.random() * 1001) - 500) / 1000;
    let TempDifference = (((Middle_Temp - Lower_Temp) + (Higher_Temp - Middle_Temp)) / 2)
    let y = (Higher_Temp - Middle_Temp)
    let z = (Middle_Temp - Lower_Temp)
    let TempVariance = ((TempDifference * randomTemp) + Middle_Temp)
    const RoundedTempVariance = (Math.round(TempVariance));

    // This part prints the generated values with variance.
    console.log("Primary Star Mass: " + RoundedMassVariance);
    console.log("Primary Star Temperature: " + RoundedTempVariance);
    console.log("Primary Star Diameter: " + RoundedDiamVariance);

    document.getElementById("InputPrimaryStarMass").value = RoundedMassVariance;
    document.getElementById("InputPrimaryStarTemperature").value = RoundedTempVariance;
    document.getElementById("InputPrimaryStarDiameter").value = RoundedDiamVariance;

    lumcalc()
    SystemAge()
};

function Whitedwarf() {
    const Roll_2D_Minus_1 = (Math.floor(Math.random() * 11) + 1) / 10;
    const Roll_d10 = (Math.floor(Math.random() * 9) + 1) / 100;
    const WDmass = Roll_2D_Minus_1 + Roll_d10;

    // IF Mass is equal to "1.2", coinflip. On a 1, it adds a value between 0.01 and 0.24 to a new potential max of 1.44
    const MoreMassive = Math.round(Math.random());
    if (WDmass == "1.2" && MoreMassive == 1) {
        let MoreMass = (Math.floor(Math.random() * 23) + 1) / 100;
        let WDMass = (WDmass + MoreMass);
        let WDDiam = (1 / WDMass) * 0.01;
        let WDMassRounded = Math.round(WDMass * 10000) / 10000;
        let WDDiamRounded = Math.round(WDDiam * 10000) / 10000;
        const SmallStarAge = (Math.floor(Math.random() * 13) + 1) + ((Math.floor(Math.random() * 10000) + 1) / 10000);
        const ProgenitorStarMass = WDMassRounded * Math.floor(Math.random() * 3) + 3;
        const MainSequenceLifespan = Math.round((10 / Math.pow(ProgenitorStarMass, 2.5)) * 10000) / 10000;
        const SubGiantLifespan = 1 / (4 + ProgenitorStarMass);
        const GiantLifespan = 1 / (10 * Math.pow(ProgenitorStarMass, 3));
        const StarFinalAge = MainSequenceLifespan * (1 + (SubGiantLifespan) + (GiantLifespan));
        const WhiteDwarfFinalAge = (Math.round((SmallStarAge + StarFinalAge) * 10000) / 10000).toFixed(4);

        // If Age is more than 13.0 Gyr, sets age to 13.0 Gyr
        if (WhiteDwarfFinalAge >= 13.0) {
            const Adjustment = WhiteDwarfFinalAge - 13.0;
            const AdjustedWhiteDwarfFinalAge = (WhiteDwarfFinalAge - Adjustment);

            // Outputs Info to Console and input fields.
            console.log("Primary Star Age: " + WhiteDwarfFinalAge);
            console.log("Primary Star Mass: " + WDMassRounded);
            console.log("Primary Star Diameter: " + WDDiamRounded);
            document.getElementById("InputPrimaryStarAge").value = AdjustedWhiteDwarfFinalAge;
            document.getElementById("InputPrimaryStarMass").value = WDMassRounded;
            document.getElementById("InputPrimaryStarDiameter").value = WDDiamRounded;

            //Calls Temp and Luminosity Functions
            WhiteDwarfTemp();
            lumcalc();

        } else {
            // Outputs Info to Console and input fields.
            console.log("Primary Star Age: " + WhiteDwarfFinalAge);
            console.log("Primary Star Mass: " + WDMassRounded);
            console.log("Primary Star Diameter: " + WDDiamRounded);
            document.getElementById("InputPrimaryStarAge").value = WhiteDwarfFinalAge;
            document.getElementById("InputPrimaryStarMass").value = WDMassRounded;
            document.getElementById("InputPrimaryStarDiameter").value = WDDiamRounded;
            ;
            //Calls Temp and Luminosity Functions
            WhiteDwarfTemp();
            lumcalc();

        }
    } else {

        // IF Mass is less than 1.2, prints it to console.
        let WDdiam = (1 / WDmass) * 0.01;
        let WDmassRounded = Math.round(WDmass * 10000) / 10000;
        let WDdiamRounded = Math.round(WDdiam * 10000) / 10000;
        const SmallStarAge = (Math.floor(Math.random() * 13) + 1) + ((Math.floor(Math.random() * 10000) + 1) / 10000);
        const ProgenitorStarMass = WDmassRounded * Math.floor(Math.random() * 3) + 3;
        const MainSequenceLifespan = Math.round((10 / Math.pow(ProgenitorStarMass, 2.5)) * 10000) / 10000;
        const SubGiantLifespan = 1 / (4 + ProgenitorStarMass);
        const GiantLifespan = 1 / (10 * Math.pow(ProgenitorStarMass, 3));
        const StarFinalAge = MainSequenceLifespan * (1 + (SubGiantLifespan) + (GiantLifespan));
        const WhiteDwarfFinalAge = (Math.round((SmallStarAge + StarFinalAge) * 10000) / 10000).toFixed(4);

        if (WhiteDwarfFinalAge >= 13.0) {
            const Adjustment = WhiteDwarfFinalAge - 13.0;
            const AdjustedWhiteDwarfFinalAge = (WhiteDwarfFinalAge - Adjustment);

            // Outputs Info to Console and input fields.
            console.log("Primary Star Age: " + WhiteDwarfFinalAge);
            console.log("Primary Star Mass: " + WDmassRounded);
            console.log("Primary Star Diameter: " + WDdiamRounded);
            document.getElementById("InputPrimaryStarAge").value = AdjustedWhiteDwarfFinalAge;
            document.getElementById("InputPrimaryStarMass").value = WDmassRounded;
            document.getElementById("InputPrimaryStarDiameter").value = WDdiamRounded;

            //Calls Temp and Luminosity Functions    
            WhiteDwarfTemp();
            lumcalc();


        } else {
            // Outputs Info to Console and input fields.
            console.log("Primary Star Age: " + WhiteDwarfFinalAge);
            console.log("Primary Star Mass: " + WDmassRounded);
            console.log("Primary Star Diameter: " + WDdiamRounded);
            document.getElementById("InputPrimaryStarAge").value = WhiteDwarfFinalAge;
            document.getElementById("InputPrimaryStarMass").value = WDmassRounded;
            document.getElementById("InputPrimaryStarDiameter").value = WDdiamRounded;

            //Calls Temp and Luminosity Functions
            WhiteDwarfTemp();
            lumcalc();
        }
    }
};

function lumcalc() {
    // Generates Luminosity by using a formula
    const Temp = document.getElementById("InputPrimaryStarTemperature").value;
    const Diam = document.getElementById("InputPrimaryStarDiameter").value;
    const Luminosity = Math.pow((Diam / 1), 2) * Math.pow((Temp / 5772), 4);

    if (Luminosity <= 0.001) {
        let LuminosityRounded = (Math.round(Luminosity * 100000000) / 100000000)
        console.log("Primary Star Luminosity: " + LuminosityRounded);
        document.getElementById("InputPrimaryStarLuminosity").value = LuminosityRounded;
    } else {
        var LuminosityRounded = (Math.round(Luminosity * 10000) / 10000)
        console.log("Primary Star Luminosity: " + LuminosityRounded);
        document.getElementById("InputPrimaryStarLuminosity").value = LuminosityRounded;
    }
};

function SystemAge() {
    const Type = document.getElementById("InputPrimaryStarType").value;
    const Mass = document.getElementById("InputPrimaryStarMass").value;
    const MainSequenceLifespan = (10 / Math.pow(Mass, 2.5));

    // Checks if Star Class is III and, if so, uses the Class III formula.
    if (Type.includes("IV")) {
        const SubGiantLifespan = MainSequenceLifespan / (4 + Mass);
        const SubGiantAge = SubGiantLifespan * (Math.floor(Math.random() * 100) + 1);
        const TotalClassIVStarAge = (Math.round(MainSequenceLifespan + SubGiantAge * (Math.floor(Math.random() * 100) + 1) * 10000) / 10000).toFixed(4);
        console.log("Primary Star Age: " + TotalClassIVStarAge);
        document.getElementById("InputPrimaryStarAge").value = TotalClassIVStarAge;

        // Checks if Star Class is III and, if so, uses the Class III formula.
    } else if (Type.includes("III")) {
        const GiantLifespan = MainSequenceLifespan / (10 * Math.pow(Mass, 3));
        const SubGiantLifespan = (MainSequenceLifespan / (4 + Mass)) * (Math.floor(Math.random() * 100) + 1);
        const TotalClassIIIStarAge = (Math.round(MainSequenceLifespan + SubGiantLifespan + GiantLifespan * (Math.floor(Math.random() * 100) + 1) * 10000) / 10000).toFixed(4);
        console.log("Primary Star Age: " + TotalClassIIIStarAge);
        document.getElementById("InputPrimaryStarAge").value = TotalClassIIIStarAge;

        // Checks if the star is a Brown or a White Dwarf
    } else if (Type.length == 2) {
        if ((/\d/.test(Type) == true)) { // If a dwarf is brown, uses the below function. else, it returns the function.
            const SmallStarAge = (Math.floor(Math.random() * 13) + 1) + ((Math.floor(Math.random() * 10000) + 1) / 10000);
            const SmallStarAgeRounded = (Math.round(SmallStarAge * 10000) / 10000).toFixed(4);
            console.log("Primary Star Age: " + SmallStarAgeRounded);
            document.getElementById("InputPrimaryStarAge").value = SmallStarAgeRounded;

        } else {
            return;
        }



    } else {
        // Checks if mass is less than or above 0.9. If it's less than 0.9, the age calculation uses the Small Star Age formula.
        if (Mass <= 0.9) {
            const SmallStarAge = (Math.floor(Math.random() * 13) + 1) + ((Math.floor(Math.random() * 10000) + 1) / 10000);
            const SmallStarAgeRounded = (Math.round(SmallStarAge * 10000) / 10000).toFixed(4);
            console.log("Primary Star Age: " + SmallStarAgeRounded);
            document.getElementById("InputPrimaryStarAge").value = SmallStarAgeRounded;

            // If the mass is above 0.9, the age calculation uses the Large Star Age formula.
        } else {
            LargeStarAge = (MainSequenceLifespan * ((Math.floor(Math.random() * 1001) + 1) / 1000));

            // This part is used to make the numbers visually reasonable. So that a number with no decimals has 8 zeros
            if (LargeStarAge <= 0.0001) {
                let LargeStarAgeRounded = (Math.round(LargeStarAge * 100000000) / 100000000).toFixed(8);
                console.log("Primary Star Age: " + LargeStarAgeRounded);
                document.getElementById("InputPrimaryStarAge").value = LargeStarAgeRounded;

                // second part of top function
            } else if (LargeStarAge >= 0.0001) {  // Im unsure of the "else if" is redundant or not...
                let LargeStarAgeRounded = (Math.round(LargeStarAge * 10000) / 10000).toFixed(4);
                console.log("Primary Star Age: " + LargeStarAgeRounded);
                document.getElementById("InputPrimaryStarAge").value = LargeStarAgeRounded;
            }
        }
    }

    // Checks if Star Mass is less than 4.7, and sets the minimum mass to 0.01.
    const Age = document.getElementById("InputPrimaryStarAge").value;
    if (Mass <= 4.7 && Age <= 0.01) {
        const MinimumAge = 0.01;
        console.log("Primary Star Age: " + MinimumAge);
        document.getElementById("InputPrimaryStarAge").value = MinimumAge;
    }
};

function WhiteDwarfTemp() {
    // This function fetches Age and Mass from the generated star and uses it to fetch average temperature for a 0.6 mass white dwarf.
    // Then, it puts the average temperature through a calculation to determine the temperature for the generated mass white dwarf.
    const WhiteDwarfAge = document.getElementById("InputPrimaryStarAge").value;
    const WhiteDwarfMass = document.getElementById("InputPrimaryStarMass").value;
    const WhiteDwarfAgeRounded = (Math.round(WhiteDwarfAge * 10) / 10).toFixed(1);
    const WDData = WhiteDwarfTempData.find(data => data.age === WhiteDwarfAgeRounded);
    const TempResult = Math.round(WDData.temp * (WhiteDwarfMass / 0.6));

    // Prints the generated temperature in console and in input.
    console.log("Primary Star Temperature: " + TempResult);
    document.getElementById("InputPrimaryStarTemperature").value = TempResult;
};

function TableAdder() {
    x = document.getElementById("PrimaryCompanionStarTableRow");
    x.style.display = "table-row";
}

function ExtraStars() {
    const PrimaryStar = document.getElementById("InputPrimaryStarType").value;
    console.log(PrimaryStar);

    // Initial function checks if Close Secondary Stars are allowed or not, based on Star Class.
    const NoClose_DM_plus1 = ["Ia", "Ib", "II", "III"];
    const DM_plus1 = ["IV", "V", "VI", "O", "B", "A", "F"];
    const DM_minus1 = ["V", "VI", "M"];
    const NO_DM = ["K", "G"]
    const BD = ["L", "Y", "T"]
    const D = ["DM", "DK", "DG", "DF", "DA", "DB"]
    if (NoClose_DM_plus1.some(type => PrimaryStar.includes(type))) {
        const roll_2Dplus1 = () => Math.floor(Math.random() * 11) + 3;
        const roll = Array.from({ length: 5 }, () => roll_2Dplus1());

        let PrimaryCompanionPresent = false;
        let NearSecondaryPresent = false;
        let NearSecondaryCompanionPresent = false;
        let FarSecondaryPresent = false;
        let FarSecondaryCompanionPresent = false;

        if (roll[0] >= 10) {
            PrimaryCompanionPresent = true;
        }; if (roll[1] >= 10) {
            NearSecondaryPresent = true;
        }; if (NearSecondaryPresent === true && roll[3] >= 10) {
            NearSecondaryCompanionPresent = true;
        }; if (roll[2] >= 10) {
            FarSecondaryPresent = true;
        }; if (FarSecondaryPresent === true && roll[4] >= 10) {
            FarSecondaryCompanionPresent = true;
        };

        if (PrimaryCompanionPresent === true) {
            console.log("PRIMARY COMPANION!")
            let PCrow = document.getElementById("PrimaryCompanionStarTableRow")
            PCrow.style.display = "table-row"
            PrimaryCompanionStar()
        }
        if (NearSecondaryPresent === true) {
            console.log("NEAR SECONDARY!")
            let NSrow = document.getElementById("NearStarTableRow")
            NSrow.style.display = "table-row"
            NearStar()
        }
        if (NearSecondaryCompanionPresent === true) {
            console.log("NEAR COMPANION!")
            let NSCrow = document.getElementById("NearCompanionStarTableRow")
            NSCrow.style.display = "table-row"
            NearCompanionStar()
        }
        if (FarSecondaryPresent === true) {
            console.log("FAR SECONDARY!")
            let FSrow = document.getElementById("FarStarTableRow")
            FSrow.style.display = "table-row"
            FarStar()
        }
        if (FarSecondaryCompanionPresent === true) {
            console.log("FAR COMPANION!")
            let FSCrow = document.getElementById("FarCompanionStarTableRow")
            FSCrow.style.display = "table-row"
            FarCompanionStar()
        }

    } else if ((DM_plus1.some(type => PrimaryStar.includes(type))) && !PrimaryStar.includes("M") && !(NO_DM.some(type => PrimaryStar.includes(type)))) {
        const roll_2Dplus1 = () => Math.floor(Math.random() * 11) + 3;
        const roll = Array.from({ length: 7 }, () => roll_2Dplus1());

        let PrimaryCompanionPresent = false;
        let CloseSecondaryPresent = false;
        let CloseSecondaryCompanionPresent = false;
        let NearSecondaryPresent = false;
        let NearSecondaryCompanionPresent = false;
        let FarSecondaryPresent = false;
        let FarSecondaryCompanionPresent = false;

        if (roll[0] >= 10) {
            PrimaryCompanionPresent = true;
        }; if (roll[1] >= 10) {
            CloseSecondaryPresent = true;
        }; if (CloseSecondaryPresent === true && roll[2] >= 10) {
            CloseSecondaryCompanionPresent = true;
        }; if (roll[3] >= 10) {
            NearSecondaryPresent = true;
        }; if (NearSecondaryPresent === true && roll[4] >= 10) {
            NearSecondaryCompanionPresent = true;
        }; if (roll[5] >= 10) {
            FarSecondaryPresent = true;
        }; if (FarSecondaryPresent === true && roll[6] >= 10) {
            FarSecondaryCompanionPresent = true;
        };

        if (PrimaryCompanionPresent === true) {
            console.log("PRIMARY COMPANION!")
            let PCrow = document.getElementById("PrimaryCompanionStarTableRow")
            PCrow.style.display = "table-row"
            PrimaryCompanionStar()
        }
        if (CloseSecondaryPresent === true) {
            console.log("CLOSE SECONDARY!")
            let CSrow = document.getElementById("CloseStarTableRow")
            CSrow.style.display = "table-row"
            CloseStar()
        }
        if (CloseSecondaryCompanionPresent === true) {
            console.log("CLOSE COMPANION!")
            let CSCrow = document.getElementById("CloseCompanionStarTableRow")
            CSCrow.style.display = "table-row"
            CloseCompanionStar()
        }
        if (NearSecondaryPresent === true) {
            console.log("NEAR SECONDARY!")
            let NSrow = document.getElementById("NearStarTableRow")
            NSrow.style.display = "table-row"
            NearStar()
        }
        if (NearSecondaryCompanionPresent === true) {
            console.log("NEAR COMPANION!")
            let NSCrow = document.getElementById("NearCompanionStarTableRow")
            NSCrow.style.display = "table-row"
            NearCompanionStar()
        }
        if (FarSecondaryPresent === true) {
            console.log("FAR SECONDARY!")
            let FSrow = document.getElementById("FarStarTableRow")
            FSrow.style.display = "table-row"
            FarStar()
        }
        if (FarSecondaryCompanionPresent === true) {
            console.log("FAR COMPANION!")
            let FSCrow = document.getElementById("FarCompanionStarTableRow")
            FSCrow.style.display = "table-row"
            FarCompanionStar()
        }

    } else if (DM_minus1.some(type => PrimaryStar.includes(type)) && !(NO_DM.some(type => PrimaryStar.includes(type)))) {
        const roll_2Dplus1 = () => Math.floor(Math.random() * 11) + 1;
        const roll = Array.from({ length: 7 }, () => roll_2Dplus1());

        let PrimaryCompanionPresent = false;
        let CloseSecondaryPresent = false;
        let CloseSecondaryCompanionPresent = false;
        let NearSecondaryPresent = false;
        let NearSecondaryCompanionPresent = false;
        let FarSecondaryPresent = false;
        let FarSecondaryCompanionPresent = false;

        if (roll[0] >= 10) {
            PrimaryCompanionPresent = true;
        }; if (roll[1] >= 10) {
            CloseSecondaryPresent = true;
        }; if (CloseSecondaryPresent === true && roll[2] >= 10) {
            CloseSecondaryCompanionPresent = true;
        }; if (roll[3] >= 10) {
            NearSecondaryPresent = true;
        }; if (NearSecondaryPresent === true && roll[4] >= 10) {
            NearSecondaryCompanionPresent = true;
        }; if (roll[5] >= 10) {
            FarSecondaryPresent = true;
        }; if (FarSecondaryPresent === true && roll[6] >= 10) {
            FarSecondaryCompanionPresent = true;
        };

        if (PrimaryCompanionPresent === true) {
            console.log("PRIMARY COMPANION!")
            let PCrow = document.getElementById("PrimaryCompanionStarTableRow")
            PCrow.style.display = "table-row"
            PrimaryCompanionStar()
        }
        if (CloseSecondaryPresent === true) {
            console.log("CLOSE SECONDARY!")
            let CSrow = document.getElementById("CloseStarTableRow")
            CSrow.style.display = "table-row"
            CloseStar()
        }
        if (CloseSecondaryCompanionPresent === true) {
            console.log("CLOSE COMPANION!")
            let CSCrow = document.getElementById("CloseCompanionStarTableRow")
            CSCrow.style.display = "table-row"
            CloseCompanionStar()
        }
        if (NearSecondaryPresent === true) {
            console.log("NEAR SECONDARY!")
            let NSrow = document.getElementById("NearStarTableRow")
            NSrow.style.display = "table-row"
            NearStar()
        }
        if (NearSecondaryCompanionPresent === true) {
            console.log("NEAR COMPANION!")
            let NSCrow = document.getElementById("NearCompanionStarTableRow")
            NSCrow.style.display = "table-row"
            NearCompanionStar()
        }
        if (FarSecondaryPresent === true) {
            console.log("FAR SECONDARY!")
            let FSrow = document.getElementById("FarStarTableRow")
            FSrow.style.display = "table-row"
            FarStar()
        }
        if (FarSecondaryCompanionPresent === true) {
            console.log("FAR COMPANION!")
            let FSCrow = document.getElementById("FarCompanionStarTableRow")
            FSCrow.style.display = "table-row"
            FarCompanionStar()
        }

    } else if (BD.some(type => PrimaryStar.includes(type)) || (D.some(type => PrimaryStar.includes(type)))) {
        const roll_2Dplus1 = () => Math.floor(Math.random() * 11) + 1;
        const roll = Array.from({ length: 7 }, () => roll_2Dplus1());

        let PrimaryCompanionPresent = false;
        let CloseSecondaryPresent = false;
        let CloseSecondaryCompanionPresent = false;
        let NearSecondaryPresent = false;
        let NearSecondaryCompanionPresent = false;
        let FarSecondaryPresent = false;
        let FarSecondaryCompanionPresent = false;

        if (roll[0] >= 10) {
            PrimaryCompanionPresent = true;
        }; if (roll[1] >= 10) {
            CloseSecondaryPresent = true;
        }; if (CloseSecondaryPresent === true && roll[2] >= 10) {
            CloseSecondaryCompanionPresent = true;
        }; if (roll[3] >= 10) {
            NearSecondaryPresent = true;
        }; if (NearSecondaryPresent === true && roll[4] >= 10) {
            NearSecondaryCompanionPresent = true;
        }; if (roll[5] >= 10) {
            FarSecondaryPresent = true;
        }; if (FarSecondaryPresent === true && roll[6] >= 10) {
            FarSecondaryCompanionPresent = true;
        };

        if (PrimaryCompanionPresent === true) {
            console.log("PRIMARY COMPANION!")
            let PCrow = document.getElementById("PrimaryCompanionStarTableRow")
            PCrow.style.display = "table-row"
            PrimaryCompanionStar()
        }
        if (CloseSecondaryPresent === true) {
            console.log("CLOSE SECONDARY!")
            let CSrow = document.getElementById("CloseStarTableRow")
            CSrow.style.display = "table-row"
            CloseStar()
        }
        if (CloseSecondaryCompanionPresent === true) {
            console.log("CLOSE COMPANION!")
            let CSCrow = document.getElementById("CloseCompanionStarTableRow")
            CSCrow.style.display = "table-row"
            CloseCompanionStar()
        }
        if (NearSecondaryPresent === true) {
            console.log("NEAR SECONDARY!")
            let NSrow = document.getElementById("NearStarTableRow")
            NSrow.style.display = "table-row"
            NearStar()
        }
        if (NearSecondaryCompanionPresent === true) {
            console.log("NEAR COMPANION!")
            let NSCrow = document.getElementById("NearCompanionStarTableRow")
            NSCrow.style.display = "table-row"
            NearCompanionStar()
        }
        if (FarSecondaryPresent === true) {
            console.log("FAR SECONDARY!")
            let FSrow = document.getElementById("FarStarTableRow")
            FSrow.style.display = "table-row"
            FarStar()
        }
        if (FarSecondaryCompanionPresent === true) {
            console.log("FAR COMPANION!")
            let FSCrow = document.getElementById("FarCompanionStarTableRow")
            FSCrow.style.display = "table-row"
            FarCompanionStar()
        }

    } else {
        const roll_2Dplus1 = () => Math.floor(Math.random() * 11) + 2;
        const roll = Array.from({ length: 7 }, () => roll_2Dplus1());

        let PrimaryCompanionPresent = false;
        let CloseSecondaryPresent = false;
        let CloseSecondaryCompanionPresent = false;
        let NearSecondaryPresent = false;
        let NearSecondaryCompanionPresent = false;
        let FarSecondaryPresent = false;
        let FarSecondaryCompanionPresent = false;

        if (roll[0] >= 10) {
            PrimaryCompanionPresent = true;
        }; if (roll[1] >= 10) {
            CloseSecondaryPresent = true;
        }; if (CloseSecondaryPresent === true && roll[2] >= 10) {
            CloseSecondaryCompanionPresent = true;
        }; if (roll[3] >= 10) {
            NearSecondaryPresent = true;
        }; if (NearSecondaryPresent === true && roll[4] >= 10) {
            NearSecondaryCompanionPresent = true;
        }; if (roll[5] >= 10) {
            FarSecondaryPresent = true;
        }; if (FarSecondaryPresent === true && roll[6] >= 10) {
            FarSecondaryCompanionPresent = true;
        };

        if (PrimaryCompanionPresent === true) {
            console.log("PRIMARY COMPANION!")
            let PCrow = document.getElementById("PrimaryCompanionStarTableRow")
            PCrow.style.display = "table-row"
            PrimaryCompanionStar()
        }
        if (CloseSecondaryPresent === true) {
            console.log("CLOSE SECONDARY!")
            let CSrow = document.getElementById("CloseStarTableRow")
            CSrow.style.display = "table-row"
            CloseStar()
        }
        if (CloseSecondaryCompanionPresent === true) {
            console.log("CLOSE COMPANION!")
            let CSCrow = document.getElementById("CloseCompanionStarTableRow")
            CSCrow.style.display = "table-row"
            CloseCompanionStar()
        }
        if (NearSecondaryPresent === true) {
            console.log("NEAR SECONDARY!")
            let NSrow = document.getElementById("NearStarTableRow")
            NSrow.style.display = "table-row"
            NearStar()
        }
        if (NearSecondaryCompanionPresent === true) {
            console.log("NEAR COMPANION!")
            let NSCrow = document.getElementById("NearCompanionStarTableRow")
            NSCrow.style.display = "table-row"
            NearCompanionStar()
        }
        if (FarSecondaryPresent === true) {
            console.log("FAR SECONDARY!")
            let FSrow = document.getElementById("FarStarTableRow")
            FSrow.style.display = "table-row"
            FarStar()
        }
        if (FarSecondaryCompanionPresent === true) {
            console.log("FAR COMPANION!")
            let FSCrow = document.getElementById("FarCompanionStarTableRow")
            FSCrow.style.display = "table-row"
            FarCompanionStar()
        }
    }
}


function PrimaryCompanionStar() {  // I can use a function similar to this to generate information for stars IF their table is revealed.
    let PCSrow = document.getElementById("PrimaryCompanionStarTableRow");

    // Use getComputedStyle to get the current display property of the element
    let displayValue = window.getComputedStyle(PCSrow).display;

    if (displayValue === "table-row") {


        // Orbit
        let oneD = Math.floor(Math.random() * 6) + 1;
        let twoD = Math.floor(Math.random() * 11) - 5;
        let orbit = Number(((oneD / 10) + (twoD / 100)).toFixed(2));
        let orbitforcalc = Math.floor(orbit);


        // AU
        const AUcalc = ORBITtoAU.find(orbit => orbit.orbit === orbitforcalc.toString());
        let AU = Number(((AUcalc.distAU) + (AUcalc.diffAU) * (orbit - orbitforcalc))).toFixed(3);


        // Eccentricity
        const roll_2D = Math.floor(Math.random() * 11) + 4; // Rolls 2d6 + 2
        let Ecc;
        if (roll_2D <= 5) {
            Ecc = (Math.random() * 0.005).toFixed(3);
        } else if (roll_2D == 6 || roll_2D == 7) {
            Ecc = (Math.random() * (0.03 - 0.005) + 0.005).toFixed(3);
        } else if (roll_2D == 8 || roll_2D == 9) {
            Ecc = (Math.random() * (0.09 - 0.04) + 0.04).toFixed(3);
        } else if (roll_2D == 10) {
            Ecc = (Math.random() * (0.35 - 0.10) + 0.10).toFixed(3);
        } else if (roll_2D == 11) {
            Ecc = (Math.random() * (0.65 - 0.15) + 0.15).toFixed(3);
        } else if (roll_2D >= 12) {
            Ecc = (Math.random() * (0.90 - 0.40) + 0.40).toFixed(3);
        };


        // Seperation Calc, for future potential use?
        let MinSeperation = AU * (1 - Ecc);
        let MaxSeperation = AU * (1 + Ecc);


        // Print to page
        document.getElementById("InputPrimaryCompanionOrbit").value = orbit;
        document.getElementById("InputPrimaryCompanionAU").value = AU;
        document.getElementById("InputPrimaryCompanionEcc").value = Ecc;
    } else {
        return;
    }
};


function CloseStar() {  // I can use a function similar to this to generate information for stars IF their table is revealed.
    let CSrow = document.getElementById("CloseStarTableRow");

    // Use getComputedStyle to get the current display property of the element
    let displayValue = window.getComputedStyle(CSrow).display;

    if (displayValue === "table-row") {


        // Orbit
        let orbit = (Math.floor(Math.random() * 6) + (Math.floor(Math.random() * 6) / 10));
        if (orbit < 1) {
            orbit = 0.5
        };
        let orbitforcalc = Math.floor(orbit);


        // AU
        const AUcalc = ORBITtoAU.find(orbit => orbit.orbit === orbitforcalc.toString());
        let AU = Number((Number(AUcalc.distAU) + Number(AUcalc.diffAU) * Number(orbit - orbitforcalc))).toFixed(3);


        // Eccentricity
        const roll_2D = Math.floor(Math.random() * 11) + 4; // Rolls 2d6 + 2
        let Ecc;
        if (roll_2D <= 5) {
            Ecc = (Math.random() * 0.005).toFixed(3);
        } else if (roll_2D == 6 || roll_2D == 7) {
            Ecc = (Math.random() * (0.03 - 0.005) + 0.005).toFixed(3);
        } else if (roll_2D == 8 || roll_2D == 9) {
            Ecc = (Math.random() * (0.09 - 0.04) + 0.04).toFixed(3);
        } else if (roll_2D == 10) {
            Ecc = (Math.random() * (0.35 - 0.10) + 0.10).toFixed(3);
        } else if (roll_2D == 11) {
            Ecc = (Math.random() * (0.65 - 0.15) + 0.15).toFixed(3);
        } else if (roll_2D >= 12) {
            Ecc = (Math.random() * (0.90 - 0.40) + 0.40).toFixed(3);
        };


        // Seperation Calc, for future potential use?
        let MinSeperation = AU * (1 - Ecc);
        let MaxSeperation = AU * (1 + Ecc);


        // Print to page
        document.getElementById("InputCloseStarOrbit").value = orbit;
        document.getElementById("InputCloseStarAU").value = AU;
        document.getElementById("InputCloseStarEcc").value = Ecc;
    } else {
        return;
    }
};

function CloseCompanionStar() {  // I can use a function similar to this to generate information for stars IF their table is revealed.
    let FSCrow = document.getElementById("CloseCompanionStarTableRow");

    // Use getComputedStyle to get the current display property of the element
    let displayValue = window.getComputedStyle(FSCrow).display;

    if (displayValue === "table-row") {
        console.log("Close Companion Function!");
    } else {
        return;
    }
};
function NearStar() {  // I can use a function similar to this to generate information for stars IF their table is revealed.
    let FSCrow = document.getElementById("NearStarTableRow");

    // Use getComputedStyle to get the current display property of the element
    let displayValue = window.getComputedStyle(FSCrow).display;

    if (displayValue === "table-row") {
        console.log("Near Star Function!");
    } else {
        return;
    }
};
function NearCompanionStar() {  // I can use a function similar to this to generate information for stars IF their table is revealed.
    let FSCrow = document.getElementById("NearCompanionStarTableRow");

    // Use getComputedStyle to get the current display property of the element
    let displayValue = window.getComputedStyle(FSCrow).display;

    if (displayValue === "table-row") {
        console.log("Near Companion Function!");
    } else {
        return;
    }
};
function FarStar() {  // I can use a function similar to this to generate information for stars IF their table is revealed.
    let FSCrow = document.getElementById("FarStarTableRow");

    // Use getComputedStyle to get the current display property of the element
    let displayValue = window.getComputedStyle(FSCrow).display;

    if (displayValue === "table-row") {
        console.log("Far Star Function!");
    } else {
        return;
    }
};
function FarCompanionStar() {  // I can use a function similar to this to generate information for stars IF their table is revealed.
    let FSCrow = document.getElementById("FarCompanionStarTableRow");

    // Use getComputedStyle to get the current display property of the element
    let displayValue = window.getComputedStyle(FSCrow).display;

    if (displayValue === "table-row") {
        console.log("Far Companion Function!");
    } else {
        return;
    }
};

function tryme() {
    const roll_2D = Math.floor(Math.random() * 11) + 4; // Rolls 2d6 + 2

    let Ecc;
    if (roll_2D <= 5) {
        Ecc = (Math.random() * 0.005).toFixed(3);
    } else if (roll_2D == 6 || roll_2D == 7) {
        Ecc = (Math.random() * (0.03 - 0.005) + 0.005).toFixed(3);
    } else if (roll_2D == 8 || roll_2D == 9) {
        Ecc = (Math.random() * (0.09 - 0.04) + 0.04).toFixed(3);
    } else if (roll_2D == 10) {
        Ecc = (Math.random() * (0.35 - 0.10) + 0.10).toFixed(3);
    } else if (roll_2D == 11) {
        Ecc = (Math.random() * (0.65 - 0.15) + 0.15).toFixed(3);
    } else if (roll_2D >= 12) {
        Ecc = (Math.random() * (0.90 - 0.40) + 0.40).toFixed(3);
    };

    console.log("Eccentricity: " + Ecc);
}