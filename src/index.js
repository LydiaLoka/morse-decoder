const morseTable = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let array = [];
    for(let i=0; i<(expr.length / 10); i++) {
      array.push(expr.substring(i*10, i*10+10));
    }
    array = array.map((str) => { 
       if (str  === '**********') return ' ';
          str = str.replace (/00/ig,''); 
          str = str.replace (/10/ig,'.');
          str = str.replace (/11/ig,'-');
       return morseTable[str];
    });
  return array.join(''); 
}


module.exports = {
    decode
}