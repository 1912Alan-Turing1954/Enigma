// import { spindle1, spindle2, spindle3 } from './spindles';

const wirePairs = {
    a: 1,
    b: 2,
    c: 3,
    d: 4, 
    e: 5, 
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13, 
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
    ' ': '-',
};

const spindle1 = {
    1: 9,
    2: 19,                        
    3: 1, 
    4: 4,
    5: 2,
    6: 3,
    7: 6,
    8: 25,
    9: 15,
    10: 26,
    11: 5, 
    12: 16, 
    13: 14,
    14: 11,
    15: 10,
    16: 23,
    17: 7,
    18: 12,
    19: 13,
    20: 17,
    21: 20,
    22: 18,
    23: 24,
    24: 8,
    25: 21,
    26: 22,
};

const spindle2 = {
    1: 26,
    2: 17,
    3: 16,
    4: 18,
    5: 11,
    6: 3,
    7: 2,
    8: 24,
    9: 19,
    10: 21,
    11: 12, 
    12: 8, 
    13: 6,
    14: 20,
    15: 9,
    16: 7,
    17: 4,
    18: 14,
    19: 23,
    20: 1,
    21: 25,
    22: 5,
    23: 13,
    24: 10,
    25: 22,
    26: 15,
};

const spindle3 = {
    1: 13,
    2: 19,
    3: 21,
    4: 23,
    5: 26,
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
    26: 4,
};

function enigmaMachine (
    message,
    spindle1Offset=0,
    spindle2Offset=0,
    spindle3Offset=0,
    rotatePoint1=26,
    rotatePoint2=26,
) {
    let spindle1Counter = spindle1Offset;
    let spindle2Counter = spindle2Offset;
    let spindle3Counter = spindle3Offset;

    let messageArr = message.split('').map(el => wirePairs[el]);
    //This goes through each spindle and match its coresponding number and contoinues to the next spindler
    let codedMessage = messageArr.map(el => {
        let answer = spindle3[spindle2[spindle1[el + spindle1Counter] + spindle3Counter]];

        spindle1Counter = (spindle1Counter + 1) % 27;

        //if it goes over 26 the next spindle will increase by 1;
        if (spindle1Counter === rotatePoint1) {
            spindle2Counter = (spindle2Counter + 1) % 27;
        }

        if (spindle2Counter === rotatePoint2) {
            spindle3Counter = (spindle3Counter + 1) % 27;
        }

        return answer;
    });
        
    return codedMessage;
}

console.log(enigmaMachine('hello world'));