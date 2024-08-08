const F0V = { mass: "1.5", temp: "7500", diam: "1.7", lumi: "8.1" }
const F1V = { mass: "1.46", temp: "7300", diam: "1.66", lumi: "7.18" }
const F2V = { mass: "1.42", temp: "7100", diam: "1.62", lumi: "6.26" }
const F3V = { mass: "1.38", temp: "6900", diam: "1.58", lumi: "5.34" }
const F4V = { mass: "1.34", temp: "6700", diam: "1.54", lumi: "4.42" }
const F5V = { mass: "1.3", temp: "6500", diam: "1.5", lumi: "3.5" }
const F6V = { mass: "1.26", temp: "6400", diam: "1.42", lumi: "3.08" }
const F7V = { mass: "1.22", temp: "6300", diam: "1.34", lumi: "2.66" }
const F8V = { mass: "1.18", temp: "6200", diam: "1.26", lumi: "2.24" }
const F9V = { mass: "1.14", temp: "6100", diam: "1.18", lumi: "1.82" }
const G0V = { mass: "1.1", temp: "6000", diam: "1.1", lumi: "1.4" }
const G1V = { mass: "1.06", temp: "5920", diam: "1.07", lumi: "1.276" }
const G2V = { mass: "1.02", temp: "5840", diam: "1.04", lumi: "1.152" }
const G3V = { mass: "0.98", temp: "5760", diam: "1.01", lumi: "1.028" }
const G4V = { mass: "0.94", temp: "5680", diam: "0.98", lumi: "0.904" }
const G5V = { mass: "0.9", temp: "5600", diam: "0.95", lumi: "0.78" }
const G6V = { mass: "0.88", temp: "5520", diam: "0.94", lumi: "0.728" }
const G7V = { mass: "0.86", temp: "5440", diam: "0.93", lumi: "0.676" }
const G8V = { mass: "0.84", temp: "5360", diam: "0.92", lumi: "0.624" }
const G9V = { mass: "0.82", temp: "5280", diam: "0.91", lumi: "0.572" }
const K0V = { mass: "0.8", temp: "5200", diam: "0.9", lumi: "0.52" }
const K1V = { mass: "0.78", temp: "5040", diam: "0.88", lumi: "0.458" }
const K2V = { mass: "0.76", temp: "4880", diam: "0.86", lumi: "0.396" }
const K3V = { mass: "0.74", temp: "4720", diam: "0.84", lumi: "0.334" }
const K4V = { mass: "0.72", temp: "4560", diam: "0.82", lumi: "0.272" }
const K5V = { mass: "0.7", temp: "4400", diam: "0.8", lumi: "0.21" }
const K6V = { mass: "0.66", temp: "4260", diam: "0.78", lumi: "0.1844" }
const K7V = { mass: "0.62", temp: "4120", diam: "0.76", lumi: "0.1588" }
const K8V = { mass: "0.58", temp: "3980", diam: "0.74", lumi: "0.1332" }
const K9V = { mass: "0.54", temp: "3840", diam: "0.72", lumi: "0.1076" }
const M0V = { mass: "0.5", temp: "3700", diam: "0.7", lumi: "0.082" }
const M1V = { mass: "0.432", temp: "3560", diam: "0.6", lumi: "0.06618" }
const M2V = { mass: "0.364", temp: "3420", diam: "0.5", lumi: "0.05036" }
const M3V = { mass: "0.296", temp: "3280", diam: "0.4", lumi: "0.03454" }
const M4V = { mass: "0.228", temp: "3140", diam: "0.3", lumi: "0.01872" }
const M5V = { mass: "0.16", temp: "3000", diam: "0.2", lumi: "0.0029" }
const M6V = { mass: "0.14", temp: "2880", diam: "0.175", lumi: "0.0022475" }
const M7V = { mass: "0.12", temp: "2760", diam: "0.15", lumi: "0.001595" }
const M8V = { mass: "0.1", temp: "2640", diam: "0.125", lumi: "0.0009425" }
const M9V = { mass: "0.08", temp: "2400", diam: "0.1", lumi: "0.00029" }

// -------------------------------------------------------------------------------------

const StarType = [
    { type: 'Special', roll: [2] },
    { type: 'M', roll: [3, 4, 5, 6] },
    { type: 'K', roll: [7, 8] },
    { type: 'G', roll: [9, 10] },
    { type: 'F', roll: [11] },
    { type: 'Hot', roll: [12] },
];

const HotStarType = [
    { type: 'A', roll: [2, 3, 4, 5, 6, 7, 8, 9] },
    { type: 'B', roll: [10, 11] },
    { type: 'O', roll: [12] },
];

const SpecialStarType = [
    { type: 'Unusual', roll: [2, 3] },
    { type: 'Class VI', roll: [4, 5] },
    { type: 'Class IV', roll: [6, 7, 8] },
    { type: 'Class III', roll: [9, 10] },
    { type: 'Giants', roll: [11, 12] },
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

const ExtraStarType = [
    { type: 'M', roll: [2, 3, 4, 5, 6] },
    { type: 'K', roll: [7, 8] },
    { type: 'G', roll: [9, 10] },
    { type: 'F', roll: [11, 12] },
]