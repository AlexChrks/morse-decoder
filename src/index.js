const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    '*****': ' ', // add spaces to Morse table
};

function decode(expr) {
    let str = expr;
    let twoDigitsArr = [];
    let temp = [];
    let encodedLetters = [];
    let morseArr = [];
    let finalArr = [];

    // put commas after each second char in array form
    for (let i = 0; i < str.length; i++) {
        twoDigitsArr.push(str[i]);
        if ((i + 1) % 2 == 0 && i != 0) {
            twoDigitsArr.push(',')
        }
    }

    //transform whole array to form, which consists of two-digits elements
    let wholeNumberArr = twoDigitsArr.join('').split(',');

    // transform basic array to multiply matrix, which consists of encoded letters
    for (let i = 0; i < wholeNumberArr.length; i++) {
        temp.push(wholeNumberArr[i]);
        if ((i + 1) % 5 == 0 && i != 0) {
            encodedLetters.push(temp);
            temp = [];
        }
    }

    // transform encoded chars to Morse chars
    for (let item of encodedLetters) {
        for (let i = 0; i < item.length; i++) {
            if (item[i] == '10') {
                temp.push('.');
            }
            if (item[i] == '11') {
                temp.push('-');
            }
            if (item[i] == '**') {
                temp.push('*');
            }
        }
        morseArr.push(temp);
        temp = [];
    }

    //decode chars and put result to finalArr
    for (let item of morseArr) {
        finalArr.push(MORSE_TABLE[item.join('')])
    }

    return finalArr.join('');
}

module.exports = {
    decode
}