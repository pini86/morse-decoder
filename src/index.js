const MORSE_TABLE = {
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
    let numWords=expr.length/10;
    let words=[];
    for( let i=0; i<numWords; i++){
        words[i]=expr.slice( 10*i , 10*i+10 ); //делим на слова по 10 символов
    }
 
 let wordsMorse=[];
 for (let item of words){ // заменяем 0 и 1 на точки и тире
     item=item.replace(/00/g,'');
     item=item.replace(/10/g,'.');
     item=item.replace(/11/g,'-');
     wordsMorse.push(item); // складываем уже в виде морзянки
 }
 
 let outStr='';
 for (let item2 of wordsMorse){ // перебираем массив слов на морзянке
     if (item2 === '**********'){
         outStr += " "; // звездочки кладем как пробел
     }
 
     for (let key in MORSE_TABLE ){ // сравниваем побуквенно со словарем
        if (item2 === key){
           outStr += MORSE_TABLE[key]; //при совпадении кладем в выходную строку
         }
     }
 }
return outStr;

}

module.exports = {
    decode
}