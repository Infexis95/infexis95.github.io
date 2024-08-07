function test() {
    let DD1 = Math.floor(Math.random() * 12) + 1;
    let DD2 = Math.floor(Math.random() * 12) + 1;

    console.log(DD1);
    console.log(DD2);

    const PrimaryStarType = [
        { type: 'Special', roll: [2] },
        { type: 'M', roll: [3, 4, 5, 6] },
        { type: 'K', roll: [7, 8] },
        { type: 'G', roll: [9, 10] },
        { type: 'F', roll: [11] },
        { type: 'Hot', roll: [12] },
    ];

    const PrimaryStarSubType = {
        M: [
            { type: '0', roll: [6] },
            { type: '1', roll: [8] },
            { type: '2', roll: [7] },
            { type: '3', roll: [9] },
            { type: '4', roll: [5] },
            { type: '5', roll: [4, 10] },
            { type: '6', roll: [3] },
            { type: '7', roll: [11] },
            { type: '8', roll: [2] },
            { type: '9', roll: [12] },
        ],
        default: [
            { type: '0', roll: [2, 12] },
            { type: '1', roll: [3] },
            { type: '2', roll: [11] },
            { type: '3', roll: [4] },
            { type: '4', roll: [10] },
            { type: '5', roll: [5] },
            { type: '6', roll: [9] },
            { type: '7', roll: [6] },
            { type: '8', roll: [8] },
            { type: '9', roll: [7] },
        ]
    }

    console.log(PrimaryStarType);
    //console.log(PrimaryStarSubType[DD2]);
}



function PS_Type() {
    // Define star type probabilities and corresponding values
    const starTypeProbabilities = [
        { type: 'Special', probability: 0.091 },
        { type: 'M', probability: 0.363 },
        { type: 'K', probability: 0.182 },
        { type: 'G', probability: 0.182 },
        { type: 'F', probability: 0.182 },
        { type: 'Hot', probability: 0.091 }
    ];

    const subtypeProbabilities = [
        { subtype: '0', probability: 0.091 },
        { subtype: '1', probability: 0.091 },
        { subtype: '2', probability: 0.091 },
        // ... other subtypes ...
        { subtype: '9', probability: 0.091 }
    ];

    // Generate random number for star type
    const randomValue = Math.random();
    let cumulativeProbability = 0;
    let starType = 'Error';

    for (const starTypeData of starTypeProbabilities) {
        cumulativeProbability += starTypeData.probability;
        if (randomValue <= cumulativeProbability) {
            starType = starTypeData.type;
            break;
        }
    }

    // Handle special and hot star types (replace with your logic)
    if (starType === 'Special' || starType === 'Hot') {
        document.getElementById("PS-type").value = "Error";
        console.log("startype:", starType, "(not yet supported.)");
        callSTinf();
        return;
    }

    // Generate subtype based on star type
    let subtype = '';
    if (starType === 'M') {
        // Adjust subtype probabilities for M stars if needed
    }

    // Generate random number for subtype
    const randomSubtypeValue = Math.random();
    cumulativeProbability = 0;

    for (const subtypeData of subtypeProbabilities) {
        cumulativeProbability += subtypeData.probability;
        if (randomSubtypeValue <= cumulativeProbability) {
            subtype = subtypeData.subtype;
            break;
        }
    }

    const starTypeName = starType + subtype + ' V';
    document.getElementById("PS-type").value = starTypeName;
    console.log('Star Type:', starTypeName);
    callSTinf();
}


for (const iterator of object) {
    
}

for (const starTypeData of starTypeProbabilities) {
    cumulativeProbability += starTypeData.probability;
    if (randomValue <= cumulativeProbability) {
        starType = starTypeData.type;
        break;
    }