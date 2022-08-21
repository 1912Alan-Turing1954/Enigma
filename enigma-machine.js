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

// spindle2;

// spindle3;

function enigmaMachine (
    message,
    configuration,
    spindle1Offset,
    spindle2Offset,
    spindle3Offset,
    rotatePoint1,
    rotatePoint2,
) {
    let messageArr = message.split('').map(el => wirePairs[el]);
    
    let codedMessage = messageArr.map(el => spindle1[el]); 
    
    return codedMessage;
}

console.log(enigmaMachine('hello'));