const base = 9;

let numberToConvert = 325;

const digits = {0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:"a",11:"b",12:"c",13:"d",14:"e",15:"f",16:"g",17:"h",18:"i",19:"j",20:"k",21:"l",22:"m",23:"n",24:"o",25:
"p",26:"q",27:"r",28:"s",29:"t",30:"u",31:"v",32:"w",33:"x",34:"y",35:"z",36:"A",37:"B",38:"C",39:"D",40:"E",41:"F",42:"G",43:"H",44:"I",45:"J",46:"K",47:"L",48:"M",49:"N",50:"O",51:"P",52:"Q",53:"R",54:"S",55:"T",56:"U",57:"V",58:"W",59:"X",60:"Y",61:"Z",62:"+",63:"/"};

let gigel = digits[32] + digits[33];

let result = [];

for (i = 0; i < numberToConvert; i++) {
    let dividing =  parseInt(numberToConvert / base);
    let multiplication = dividing * base;
    let remainder = numberToConvert - multiplication;
        if (remainder > 9) {
            for(let key in digits) {
               remainder = digits[key];
            }
        };
    result.unshift(remainder);
    numberToConvert = dividing;
}

 console.log(result)

// const splitDigits = digits.split('');
//
// const indexedNumber = {};
//
// for (i = 0; i < splitDigits.length; i++) {
//     indexedNumber[i] = splitDigits[i];
// }
//
// let gigel = (JSON.stringify(indexedNumber).replace(/"([\d\.]+)"/gi, '$1'));
//
// let mata = indexedNumber['35'] + indexedNumber['39'];