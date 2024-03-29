const wirePairs = {
    a: 0,
    b: 1,
    c: 2,
    d: 3, 
    e: 4, 
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12, 
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 23,
    y: 24,
    z: 25,
};

const spindleA = {
    0: 21,
    1: 8,
    2: 18,                        
    3: 0, 
    4: 3,
    5: 1,
    6: 2,
    7: 5,
    8: 24,
    9: 14,
    10: 25,
    11: 4, 
    12: 15, 
    13: 13,
    14: 10,
    15: 9,
    16: 22,
    17: 6,
    18: 11,
    19: 12,
    20: 16,
    21: 19,
    22: 17,
    23: 23,
    24: 7,
    25: 20, 
};

const spindleB = {
    0: 14,
    1: 25,
    2: 16,
    3: 15,
    4: 17,
    5: 10,
    6: 2,
    7: 1,
    8: 24,
    9: 18,
    10: 20,
    11: 11, 
    12: 7, 
    13: 5,
    14: 19,
    15: 8,
    16: 6,
    17: 3,
    18: 13,
    19: 22,
    20: 0,
    21: 24,
    22: 4,
    23: 12,
    24: 9,
    25: 21,
};

const spindleC = {
    0: 4,
    1: 13,
    2: 19,
    3: 21,
    4: 23,
    5: 0,
    6: 25,
    7: 20,
    8: 17,
    9: 16,
    10: 8,
    11: 9, 
    12: 6, 
    13: 3,
    14: 5,
    15: 22,
    16: 18,
    17: 11,
    18: 1,
    19: 7,
    20: 2,
    21: 12,
    22: 15,
    23: 24,
    24: 10,
    25: 14,
};

const alphabet = {
    0: 'a',
    1: 'b',
    2: 'c',                        
    3: 'd', 
    4: 'e',
    5: 'f',
    6: 'g',
    7: 'h',
    8: 'i',
    9: 'j',
    10: 'k',
    11: 'l', 
    12: 'm', 
    13: 'n',
    14: 'o',
    15: 'p',
    16: 'q',
    17: 'r',
    18: 's',
    19: 't',
    20: 'u',
    21: 'v',
    22: 'w',
    23: 'x',
    24: 'y',
    25: 'z', 
};

//Configs
const config1 = { 1: spindleA, 2: spindleB, 3: spindleC };
const config2 = { 1: spindleA, 2: spindleC, 3: spindleB };
const config3 = { 1: spindleB, 2: spindleA, 3: spindleC };
const config4 = { 1: spindleB, 2: spindleC, 3: spindleA };
const config5 = { 1: spindleC, 2: spindleA, 3: spindleB };
const config6 = { 1: spindleC, 2: spindleB, 3: spindleA };


function enigmaMachine (
    message,
    configuration,
    spindle1Offset=0,
    spindle2Offset=0,
    spindle3Offset=0,
    rotatePoint1=25,
    rotatePoint2=25,
) {
    let spindle1 = configuration[1];
    let spindle2 = configuration[2];
    let spindle3 = configuration[3];

    let spindle1Counter = spindle1Offset;
    let spindle2Counter = spindle2Offset;
    let spindle3Counter = spindle3Offset;

    let messageArr = message.toLowerCase()
    .split('')
    .filter(el => el !== ' ' )
    .map(el => wirePairs[el]);
    //This goes through each spindle and match its coresponding number and contoinues to the next spindler
    let codedMessage = messageArr.map(el => {
        let inputForSpindle1 = (el + spindle1Counter) % 26;
        let inputForSpindle2 = (spindle1[inputForSpindle1] + spindle2Counter) % 26;
        let inputForSpindle3Almost = spindle2[inputForSpindle2 + spindle3Counter] % 26;
        let inputForSpindle3 = inputForSpindle3Almost % 26;
        let answer = spindle3[inputForSpindle3];

    if (spindle1Counter === 24) {
        spindle1Counter = (spindle1Counter + 1) % 26;

        if (spindle1Counter === rotatePoint1) {
            spindle2Counter = (spindle2Counter + 1) % 26;
        }

        if (spindle2Counter === rotatePoint2) {
            spindle3Counter = (spindle3Counter + 1) % 26;
        }
    } else {
        spindle1Counter = (spindle1Counter + 1) % 26;

        if (spindle1Counter === rotatePoint1) {
            spindle2Counter = (spindle2Counter + 1) % 26;
        }
    }
        
        return answer;
    });
        
    return codedMessage.map(el => alphabet[el]).join('').toUpperCase();
}

console.log(enigmaMachine('hello', config1, 0, 0, 0, 25, 25));

// ^ this will output this encoded message // zpwnuisoujhmlorvptkikpkjhllndlqsmtdvmcmbznhpjcbohjbfv //

// secret code example > This is a secret message encoded by a Javascript Enigma Machine//

