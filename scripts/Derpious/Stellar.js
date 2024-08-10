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


    // I've put these here to be able to debug easily in future. not to be used for now.
    //    console.log("Type " + callPST);
    //    console.log("Hot Type " + callhPST);
    //    console.log("Special Type " + callsPST);
    //    console.log("Unusual Type " + calluPST);
    //    console.log("Giant Type " + callgPST);
    //    console.log("Peculiar Type " + callpPST);
    //    console.log("Extra Type " + callePST);
    //    console.log("Hot Extra Type " + callehPST);
    //    console.log("Class VI Type " + callVIPST);
    //    console.log("Hot Class VI Type " + callhVIPST);
    //    console.log("Class IV Type " + callIVPST);
    //    console.log("Hot Class IV Type " + callhIVPST);
    //    console.log("Brown Dwarf Type " + callBDT);
    //    console.log("Sub Type " + callSBT);
    //    console.log("M-Sub Type " + callmSBT);
    //    console.log("K-Sub Type " + callkSBT);
    //    console.log("Brown Dwarf Sub Type " + callBDST);
    //    console.log("Y-Brown Dwarf Sub Type " + callBDYST);
    //    console.log("White Dwarf Type " + callDST);


    // Output The Full Primary Star in Console.
    let PrimaryStar = T + S + C;
    console.log("Primary Star: " + PrimaryStar);
}
