src = "../../scripts/Derpious/stellar_data.js"

function generatePrimaryStarType() {
    const roll_2D = () => Math.floor(Math.random() * 11) + 2;
    const roll = Array.from({ length: 7 }, () => roll_2D());

    const starClasses = {
        1: " VI",
        2: " V",
        3: " IV",
        4: " III",
        5: " II",
        6: " Ib",
        7: " Ia"
      };


    const getPrimaryStarType = (roll1) => {
        const Type = StarType.find(type => type.roll.includes(roll1));
        console.log(roll1)
        console.log(Type)
        return Type ? Type.type : '';
    };

    const getHotPrimaryStarType = (roll2) => {
        if (callPST == 'Hot') {
            const hotType = HotStarType.find(type => type.roll.includes(roll2));
            console.log(roll2)
            console.log(hotType)
            return hotType ? hotType.type : '';
        } else {
            return
        }
    }

    const getSpecialPrimaryStarType = (roll3) => {
        if (callPST == 'Special') {
            const specialType = SpecialStarType.find(type => type.roll.includes(roll3));
            console.log(roll3)
            console.log(specialType)
            return specialType ? specialType.type : '';
        } else {
            return
        }
    }

    const getUnusualPrimaryStarType = (roll4) => {
        if (callsPST == 'Unusual') {
            const unusualType = UnusualStarType.find(type => type.roll.includes(roll4));
            console.log(roll4)
            console.log(unusualType)
            return unusualType ? unusualType.type : '';
        } else {
            return
        }
    }

    const getGiantPrimaryStarType = (roll5) => {
        if (callsPST == 'Giants') {
            const giantType = GiantStarType.find(type => type.roll.includes(roll5));
            console.log(roll5)
            console.log(giantType)
            return giantType ? giantType.type : '';
        } else {
            return
        }
    }

    const getPeculiarPrimaryStarType = (roll6) => {
        if (calluPST == 'Peculiar') {
            const peculiarType = PeculiarStarType.find(type => type.roll.includes(roll6));
            console.log(roll6)
            console.log(peculiarType)
            return peculiarType ? peculiarType.type : '';
        } else {
            return
        }
    }

    const getExtraPrimaryStarType = (roll7) => {
            const extraType = ExtraStarType.find(type => type.roll.includes(roll7));
            return extraType ? extraType.type : '';
    }

    const callPST = getPrimaryStarType(roll[1]);
    console.log("Star Type: " + callPST);
    const callhPST = getHotPrimaryStarType(roll[2]);
    if (callPST == "Hot") {
        console.log("Hot Star Type: " + callhPST);
    }
    const callsPST = getSpecialPrimaryStarType(roll[3]);
    if (callPST == "Special") {
        console.log("Special Star Type: " + callsPST);
    }
    const calluPST = getUnusualPrimaryStarType(roll[4]);
    if (callsPST == "Unusual") {
        console.log("Unusual Star Type: " + calluPST);
    }
    const callgPST = getGiantPrimaryStarType(roll[5]);
    if (callsPST == "Giants") {
        console.log("Giant Star Type: " + callgPST);
    }
    const callpPST = getPeculiarPrimaryStarType(roll[6]);
    if (calluPST == "Peculiar") {
        console.log("Peculiar Star Type: " + callpPST);
    }
    const callePST = getExtraPrimaryStarType(roll[7]);
    console.log("Star Type: " + callePST);

    let x = callPST;
    let y = starClasses[2];
    if (callPST == "Hot") {
        x = callhPST
    } else if (callPST == "Special" && callsPST.includes("Class")) {
        x = callePST
        y = callsPST.replace("Class", "");
    }

        console.log("Final Star Type: " + x + y);


}
