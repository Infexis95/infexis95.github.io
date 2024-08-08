function generatePrimaryStarType() {
    const roll_2D = () => Math.floor(Math.random() * 11) + 2;
    const roll = [roll_2D(), roll_2D(), roll_2D(), roll_2D(), roll_2D(), roll_2D()]

    const StarType = [
        { type: 'Special', roll: [2] },
        { type: 'M', roll: [3, 4, 5, 6] },
        { type: 'K', roll: [7, 8] },
        { type: 'G', roll: [9, 10] },
        { type: 'F', roll: [11] },
        { type: 'Hot', roll: [12] },
    ];

    const HotStarType = [
        { type: 'A', roll: [2, 4, 5, 6, 7, 8, 9] },
        { type: 'B', roll: [10, 11] },
        { type: 'O', roll: [12] },
    ];

    const SpecialStarType = [                        
        { type: 'Unusual', roll: [2, 3] },    
        { type: 'Class VI', roll: [4, 5] },        
        { type: 'Class IV', roll: [6, 7, 8] },           
        { type: 'Class III', roll: [10, 11] },             
        { type: 'Giants', roll: [12] },                  
    ];                                                   

    const UnusualStarType = [
        { type: 'Peculiar', roll: [2] },
        { type: 'Class VI', roll: [3] },
        { type: 'Class IV', roll: [4] },
        { type: 'BD', roll: [5, 6, 7] },
        { type: 'D', roll: [8, 9, 10] },
        { type: 'Class III', roll: [11] },
        { type: 'Giants', roll: [12] },
    ];

    const GiantStarType = [
        { type: 'Class III', roll: [2, 3, 4, 5, 6, 7, 8] },
        { type: 'Class II', roll: [9, 10] },
        { type: 'Class Ib', roll: [11] },
        { type: 'Class Ia', roll: [12] },
    ];

    const PeculiarStarType = [
        { type: 'Black Hole', roll: [2] },
        { type: 'Pulsar', roll: [3] },
        { type: 'Neutron Star', roll: [4] },
        { type: 'Nebula', roll: [5, 6] },
        { type: 'Protostar', roll: [7, 8, 9] },
        { type: 'Star Cluster', roll: [10] },
        { type: 'Anomaly', roll: [11, 12] },
    ];

    const getPrimaryStarType = (roll1) => {
        const Type = StarType.find(type => type.roll.includes(roll1));
        console.log(Type)
        return Type ? Type.type : '';
    };

    const getHotPrimaryStarType = (roll2) => {
        if (callPST == 'Hot') {
            const hotType = HotStarType.find(type => type.roll.includes(roll2));
            console.log(hotType)
            return hotType ? hotType.type : '';
        } else {
            return
        }
    }

    const getSpecialPrimaryStarType = (roll3) => {
        if (callPST == 'Special') {
            const specialType = SpecialStarType.find(type => type.roll.includes(roll3));
            console.log(specialType)
            return specialType ? specialType.type : '';
        } else {
            return
        }
    }

    const getUnusualPrimaryStarType = (roll4) => {
        if (callsPST == 'Unusual') {
            const unusualType = UnusualStarType.find(type => type.roll.includes(roll4));
            console.log(unusualType)
            return unusualType ? unusualType.type : '';
        } else {
            return
        }
    }

    const getGiantPrimaryStarType = (roll5) => {
        if (callsPST == 'Giants') {
            const giantType = GiantStarType.find(type => type.roll.includes(roll5));
            console.log(giantType)
            return giantType ? giantType.type : '';
        } else {
            return
        }
    }

    const getPeculiarPrimaryStarType = (roll6) => {
        if (calluPST == 'Peculiar') {
            const unusualType = UnusualStarType.find(type => type.roll.includes(roll6));
            console.log(unusualType)
            return unusualType ? unusualType.type : '';
        } else {
            return
        }
    }

    const callPST = getPrimaryStarType(roll[1]);
    console.log("Star Type: " + callPST);
    const callhPST = getHotPrimaryStarType(roll[2]);
    console.log("Hot Star Type: " + callhPST);
    const callsPST = getSpecialPrimaryStarType(roll[3]);
    console.log("Special Star Type: " + callsPST);
    const calluPST = getUnusualPrimaryStarType(roll[4]);
    console.log("Unusual Star Type: " + calluPST);
    const callgPST = getGiantPrimaryStarType(roll[5]);
    console.log("Giant Star Type: " + callgPST);
    const callpPST = getPeculiarPrimaryStarType(roll[6]);
    console.log("Peculiar Star Type: " + callpPST);
    
}
