src = "../../scripts/Derpious/stellar_data.js"

function generatePrimaryStarType() {
    const roll_2D = () => Math.floor(Math.random() * 11) + 2;
    const roll = Array.from({ length: 19 }, () => roll_2D());

    const getPrimaryStarType = (roll0) => {
        const Type = StarType.find(type => type.roll.includes(roll0));
        console.log(roll0)
        console.log(Type)
        return Type ? Type.type : '';
    };

    const getHotPrimaryStarType = (roll1) => {
        if (callPST == 'Hot') {
            const hotType = HotStarType.find(type => type.roll.includes(roll1));
            console.log(roll1)
            console.log(hotType)
            return hotType ? hotType.type : '';
        } else {
            return
        }
    }

    const getSpecialPrimaryStarType = (roll2) => {
        if (callPST == 'Special') {
            const specialType = SpecialStarType.find(type => type.roll.includes(roll2));
            console.log(roll2)
            console.log(specialType)
            return specialType ? specialType.type : '';
        } else {
            return
        }
    }

    const getUnusualPrimaryStarType = (roll3) => {
        if (callsPST == 'Unusual') {
            const unusualType = UnusualStarType.find(type => type.roll.includes(roll3));
            console.log(roll3)
            console.log(unusualType)
            return unusualType ? unusualType.type : '';
        } else {
            return
        }
    }

    const getGiantPrimaryStarType = (roll4) => {
        if (callsPST == "Giants" || callsPST == "Class III" || calluPST == "Giants" || calluPST == "Class III") {
            const giantType = GiantStarType.find(type => type.roll.includes(roll4));
            console.log(roll4)
            console.log(giantType)
            return giantType ? giantType.type : '';
        } else {
            return
        }
    }

    const getPeculiarPrimaryStarType = (roll5) => {
        if (calluPST == 'Peculiar') {
            const peculiarType = PeculiarStarType.find(type => type.roll.includes(roll5));
            console.log(roll5)
            console.log(peculiarType)
            return peculiarType ? peculiarType.type : '';
        } else {
            return
        }
    }

    const getExtraPrimaryStarType = (roll6) => {
        const extraType = ExtraStarType.find(type => type.roll.includes(roll6));
        return extraType ? extraType.type : '';
    }

    const getHotExtraPrimaryStarType = (roll7) => {
        const extraHotType = ExtraHotStarType.find(type => type.roll.includes(roll7));
        return extraHotType ? extraHotType.type : '';
    }

    const getClassVIPrimaryStarType = (roll8) => {
        const classVIType = ClassVIStarType.find(type => type.roll.includes(roll8));
        return classVIType ? classVIType.type : '';
    }

    const getHotClassVIPrimaryStarType = (roll9) => {
        const classVIHotType = HotClassVIStarType.find(type => type.roll.includes(roll9));
        return classVIHotType ? classVIHotType.type : '';
    }

    const getClassIVPrimaryStarType = (roll10) => {
        const classIVType = ClassIVStarType.find(type => type.roll.includes(roll10));
        return classIVType ? classIVType.type : '';
    }

    const getHotClassIVPrimaryStarType = (roll11) => {
        const classIVHotType = HotClassIVStarType.find(type => type.roll.includes(roll11));
        return classIVHotType ? classIVHotType.type : '';
    }

    const getBrownDwarfType = (roll15) => {
        const BDType = BrownDwarfType.find(type => type.roll.includes(roll15));
        return BDType ? BDType.type : '';
    }


    const getSubType = (roll12) => {
        if (callPST === "M") {
            return
        } else {
            const subType = SubType.find(type => type.roll.includes(roll12));
            console.log(roll12)
            console.log(subType)
            return subType ? subType.type : '';
        }
    }

    const getMSubType = (roll13) => {
        if (callPST === "M") {
            const MsubType = SubType_M.find(type => type.roll.includes(roll13));
            console.log(roll13)
            console.log(MsubType)
            return MsubType ? MsubType.type : '';
        } else {
            return
        }
    }

    const getKSubType = (roll14) => {
        if (callIVPST == "K" && callsPST === "Class IV" || calluPST === "Class IV") {
            const KsubType = SubType_K.find(type => type.roll.includes(roll14));
            console.log(roll14)
            console.log(KsubType)
            return KsubType ? KsubType.type : '';
        } else {
            return
        }
    }

    const getBDSubType = (roll16) => {
        const BDsubType = SubType_BD.find(type => type.roll.includes(roll16));
        console.log(roll16)
        console.log(BDsubType)
        return BDsubType ? BDsubType.type : '';
    }

    const getBDYSubType = (roll17) => {
        const BDYsubType = SubType_BD_Y.find(type => type.roll.includes(roll17));
        console.log(roll17)
        console.log(BDYsubType)
        return BDYsubType ? BDYsubType.type : '';
    }

    const getDSubType = (roll18) => {
        const DsubType = SubType_D.find(type => type.roll.includes(roll18));
        console.log(roll18)
        console.log(DsubType)
        return DsubType ? DsubType.type : '';
    }


    const callPST = getPrimaryStarType(roll[0]);
    console.log("Star Type: " + callPST);
    const callhPST = getHotPrimaryStarType(roll[1]);
    if (callPST == "Hot") {
        console.log("Hot Star Type: " + callhPST);
    }
    const callsPST = getSpecialPrimaryStarType(roll[2]);
    if (callPST == "Special") {
        console.log("Special Star Type: " + callsPST);
    }
    const calluPST = getUnusualPrimaryStarType(roll[3]);
    if (callsPST == "Unusual") {
        console.log("Unusual Star Type: " + calluPST);
    }
    const callgPST = getGiantPrimaryStarType(roll[4]);
    if (callsPST == "Giants" || callsPST == "Class III" || calluPST == "Giants" || calluPST == "Class III") {
        console.log("Giant Star Type: " + callgPST);
    }
    const callpPST = getPeculiarPrimaryStarType(roll[5]);
    if (calluPST == "Peculiar") {
        console.log("Peculiar Star Type: " + callpPST);
    }
    const callePST = getExtraPrimaryStarType(roll[6]);
    console.log("extra Star Type: " + callePST);
    const callehPST = getHotExtraPrimaryStarType(roll[7]);
    if (callePST == "Hot") {
        console.log("Extra Hot Star Type: " + callehPST)
    }
    const callVIPST = getClassVIPrimaryStarType(roll[8]);
    {
        console.log("Class VI Star Type: " + callVIPST)
    }
    const callhVIPST = getHotClassVIPrimaryStarType(roll[9]);
    if (callVIPST == "Hot") {
        console.log("Hot Class VI Star Type: " + callhVIPST)
    }
    const callIVPST = getClassIVPrimaryStarType(roll[10]);
    {
        console.log("Class IV Star Type: " + callIVPST)
    }
    const callhIVPST = getHotClassIVPrimaryStarType(roll[11]);
    if (callIVPST == "Hot") {
        console.log("Hot Class IV Star Type: " + callhIVPST)
    }
    const callBDT = getBrownDwarfType(roll[15]);
    console.log("Brown Dwarf Type: " + callBDT)

    const callSBT = getSubType(roll[12]);
    const callmSBT = getMSubType(roll[13]);
    const callkSBT = getKSubType(roll[14]);
    const callBDST = getBDSubType(roll[16]);
    const callBDYST = getBDYSubType(roll[17]);
    const callDST = getDSubType(roll[18])

    if (callPST === "M") {
        console.log("M-Star Subtype: " + callmSBT)
    } else {
        console.log("Star Subtype: " + callSBT)
    }

    // Type Base Definition
    let T = callPST;
    // Subtype Base Definition
    let S = callSBT;
    if (T === "M") {
        S = callmSBT;
    }
    // Class Base Definition
    let C = starClasses[2];

    // if basetype is Hot, roll on Hot table.
    if (T == "Hot") {
        T = callhPST
    }


    // for when basetype is Special.
    // if basetype is Special and special type is Class VI.
    if (T == "Special" && callsPST == "Class VI") {
        T = callVIPST
        if (callVIPST == "Hot") {
            T = callhVIPST
        }
        C = starClasses[1]

        // if basetype is Special and special type is Class IV.    
    } else if (T == "Special" && callsPST == "Class IV") {
        T = callIVPST
        if (callIVPST == "Hot") {
            T = callhIVPST
        }
        if (T == "K") {
            S = callkSBT
        }
        C = starClasses[3]

        // if basetype is Special and special type is Class III.
    } else if (T == "Special" && callsPST == "Class III") {
        T = callePST
        if (callePST == "Hot") {
            T = callehPST
        }
        C = starClasses[4]
        if (callgPST == "Class II") {
            C = starClasses[5]
        } else if (callgPST == "Class Ib") {
            C = starClasses[6]
        } else if (callgPST == "Class Ia") {
            C = starClasses[7]
        }
    }

    // if basetype is Special and special type is Giants
    if (callPST == "Special" && callsPST == "Giants") {
        T = callePST
        if (callePST == "Hot") {
            T = callehPST
        }
        if (callgPST == "Class III") {
            C = starClasses[4]
        } else if (callgPST == "Class II") {
            C = starClasses[5]
        } else if (callgPST == "Class Ib") {
            C = starClasses[6]
        } else if (callgPST == "Class Ia") {
            C = starClasses[7]
        }
    }

    // for when basetype is Special and special type is unusual
    // if special type is unusual and unusual type is class VI
    if (T == "Special" && callsPST == "Unusual" && calluPST == "Class VI") {
        T = callVIPST
        if (callVIPST == "Hot") {
            T = callhVIPST
        }
        C = starClasses[1]
    } else if (T == "Special" && callsPST == "Unusual" && calluPST == "Class IV") {
        T = callIVPST
        if (callIVPST == "Hot") {
            T = callhIVPST
        }
        if (T == "K") {
            S = callkSBT
        }
        C = starClasses[3]
    } else if (T == "Special" && callsPST == "Unusual" && calluPST == "Class III") {
        T = callePST
        if (callePST == "Hot") {
            T = callehPST
        }
        C = starClasses[4]
        if (callgPST == "Class II") {
            C = starClasses[5]
        } else if (callgPST == "Class Ib") {
            C = starClasses[6]
        } else if (callgPST == "Class Ia") {
            C = starClasses[7]
        }
    } else if (T == "Special" && callsPST == "Unusual" && calluPST == "Giants") {
        T = callePST
        if (callePST == "Hot") {
            T = callehPST
        }
        if (callgPST == "Class III") {
            C = starClasses[4]
        } else if (callgPST == "Class II") {
            C = starClasses[5]
        } else if (callgPST == "Class Ib") {
            C = starClasses[6]
        } else if (callgPST == "Class Ia") {
            C = starClasses[7]
        }
    } else if (T == "Special" && callsPST == "Unusual" && calluPST == "BD") {
        T = callBDT
        if (callBDT == "Y") {
            S = callBDYST
        } else {
            S = callBDST
        }
        C = ""
    } else if (T == "Special" && callsPST == "Unusual" && calluPST == "D") {
        T = "D"
        S = callDST
        C = ""
    }

    if (T == "Special" && callsPST == "Unusual" && calluPST == "Peculiar") {
        if (callpPST == "Anomaly") {
            T = callpPST
            S = ""
            C = ""
            window.alert("YOU'VE AWOKENED THE DARK GODS")
        } else {
            T = callpPST
            S = ""
            C = ""
        }
    }


    console.log("Final Star Type: " + T + S + C);
}
