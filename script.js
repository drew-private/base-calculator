    //The section below gets the value of the 'Base' button on each click
    const basesButtonSelect = document.getElementsByClassName('dropdown-item');

    let baseValue = {};

    for (i = 0; i < basesButtonSelect.length; i++) {
        let allBaseButtons = basesButtonSelect[i];
        allBaseButtons.addEventListener('click', function () {
            baseValue = this.value;
        });
    }

    // Changing bases value on the display element

    const dropdownBtn = document.getElementById('triggerId');

    function changeBases(btn) {
        dropdownBtn.innerText = btn.innerText;
    }

    //Main function that runs on click

    let finalSubmit = document.querySelector('button[type="submit"]').addEventListener('click', () => {

    // Some initial variable declarations
    let result = [];
    let numberToConvert = document.getElementById('numberConv').value;
    let numberInput = {};
    numberInput = numberToConvert;

    // Object with base 64 digits

    const digits = {0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:"a",11:"b",12:"c",13:"d",14:"e",15:"f",16:"g",17:"h",18:"i",19:"j",20:"k",21:"l",22:"m",23:"n",24:"o",25:
                "p",26:"q",27:"r",28:"s",29:"t",30:"u",31:"v",32:"w",33:"x",34:"y",35:"z",36:"A",37:"B",38:"C",39:"D",40:"E",41:"F",42:"G",43:"H",44:"I",45:"J",46:"K",47:"L",48:"M",49:"N",50:"O",51:"P",52:"Q",53:"R",54:"S",55:"T",56:"U",57:"V",58:"W",59:"X",60:"Y",61:"Z",62:"+",63:"/"};

    // Variables for changing a number from any base to base 10

    let brokenDownNumber = Array.from(numberToConvert.toString()).map(Number).reverse();
    let raisedByOne = [];
    let raisedToPower = [];

    // Conversion from base 10 to any base up to 64

    if (baseValue < 2) {
        for (i = 0; i < numberInput; i++) {
            let dividing =  parseInt(numberToConvert / baseValue);
            let multiplication = dividing * baseValue;
            let remainder = numberInput - multiplication;
            if (remainder > 9) {
                let remainderDigitToLetter = Object.getOwnPropertyDescriptor(digits, remainder);
                result.unshift(remainderDigitToLetter.value)
            }else {
                result.unshift(remainder);
            }
            numberInput = dividing;
        }
    }
    // Conversion from any base back to base 10
    else {
        const sumFunction = (accumulator, currentValue) => accumulator + currentValue;

        for (let i = 0; i < brokenDownNumber.length; i++) {
            raisedByOne.push(Math.pow(base, i));
            raisedToPower.push(brokenDownNumber[i] * raisedByOne[i]);
            console.log(raisedByOne);
        }

        let resultConversionToBase10 = raisedToPower.reduce(sumFunction);
        }

    console.log(raisedToPower, brokenDownNumber, finalResult)

    //Convert the number for the final result

        let finalResult = result.join('');
        let resultElement = document.getElementById('result');
        resultElement.innerHTML = finalResult;

    });