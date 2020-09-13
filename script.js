    // Function for creating a new base dropdown element
    let createBaseDropdownEl = () => {
        const mainBaseDropdown = document.getElementById('bases-dropdown-section');
        const basesButton = document.getElementById('triggerId');

        for (let i = 2; i <= 64; i++) {
            let newBaseButton = document.createElement("button");
            mainBaseDropdown.appendChild(newBaseButton);
            newBaseButton.className = 'dropdown-item';
            newBaseButton.type = 'button';
            // Changing bases value on the display element
            newBaseButton.addEventListener('click', () => {
                basesButton.innerText = newBaseButton.innerText;
            });
            switch (i) {
                case 2 :
                    newBaseButton.innerText = 'Base ' + i + ' (Binary)';
                    newBaseButton.value = '2';
                    break;
                case 8 :
                    newBaseButton.innerText = 'Base ' + i + ' (Octal)';
                    newBaseButton.value = '8';
                    break;
                case 16 :
                    newBaseButton.innerText = 'Base ' + i + ' (Hexadecimal)';
                    newBaseButton.value = '16'
                    break;
                default :
                    newBaseButton.innerText = 'Base ' + i;
                    newBaseButton.value = i.toString();
                    break
            }
        }
    }

    window.addEventListener('load', createBaseDropdownEl);

    //The section below gets the value of the 'Base' button on each click

    let baseValue = 0;

    function getSelectedBaseValue () {
        const basesButtonSelect = document.getElementsByClassName('dropdown-item');

        for (let i = 0; i < basesButtonSelect.length; i++) {
            let allBaseButtons = basesButtonSelect[i];
            allBaseButtons.addEventListener('click', function () {
                baseValue = this.value;
                // console.log(baseValue);
            });
        }
    }

    window.addEventListener('load', getSelectedBaseValue);

    // Object with base 64 digits

    const digits = {0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"a",11:"b",12:"c",13:"d",14:"e",15:"f",16:"g",17:"h",18:"i",19:"j",20:"k",21:"l",22:"m",23:"n",24:"o",
        25:"p",26:"q",27:"r",28:"s",29:"t",30:"u",31:"v",32:"w",33:"x",34:"y",35:"z",36:"A",37:"B",38:"C",39:"D",40:"E",41:"F",42:"G",43:"H",44:"I",45:"J",46:"K",47:"L",48:"M",
        49:"N",50:"O",51:"P",52:"Q",53:"R",54:"S",55:"T",56:"U",57:"V",58:"W",59:"X",60:"Y",61:"Z",62:"+",63:"/"};

    // Validation for input number

    let numberToConvert = '';
    let startingBaseValue = '';
    const numberForValidation = document.getElementById('numberConv')

    let convertedNumber = [];

    let getBaseAndNumberValues = () => {
        document.getElementById('numberConv').addEventListener('input', () => {
            numberToConvert = numberForValidation.value
            // console.log(numberToConvert + " Number to convert")
            if (numberToConvert === '') {
                numberForValidation.setAttribute('style', 'background-color: #ffffff;')
            }
        })

        document.getElementById('startingBaseValue').addEventListener('input', () => {
            startingBaseValue = document.getElementById('startingBaseValue').value
            convertedNumber = [];
            mainDigitCharValidation();
        })
    }

    window.addEventListener('load', getBaseAndNumberValues)

    // Main validation function

    let mainDigitCharValidation = () => {

        let brokenDownNumber = Array.from(numberToConvert.toString()).map(String).reverse();

        function getKeyByValue(object, value) {
            return Object.keys(object).find(key => object[key] === value);
        }

        for (let i = 0; i < brokenDownNumber.length; i++) {
            convertedNumber.push(getKeyByValue(digits, brokenDownNumber[i]))
        }

        // console.log(convertedNumber);

        for (let i = 0; i < numberToConvert.length; i++) {

            let valueNumb = Object.getOwnPropertyDescriptor(digits, convertedNumber[i]);
            let convertedNumberToString = parseInt(convertedNumber[i]);
            // console.log(brokenDownNumber + 'this is a broken down number')

            if (convertedNumberToString >= parseInt(startingBaseValue) && convertedNumberToString >= 10) {
                numberForValidation.setAttribute('style', 'background-color: #ff4b5c; opacity: 0.8; color: black')
                // console.log(valueNumb.value + ' is not a base ' + startingBaseValue + ' valid character!');
                break
            } else if (convertedNumberToString >= parseInt(startingBaseValue) && convertedNumberToString < 10) {
                numberForValidation.setAttribute('style', 'background-color: #ff4b5c; opacity: 0.8; color: black')
                // console.log(valueNumb.value + ' is not a base ' + startingBaseValue + ' valid number!')
                break
            } else {
                numberForValidation.setAttribute('style', 'background-color: #ffffff;')
            }
        }
    }

    // Event listener for validation on keyup

    numberForValidation.addEventListener("keyup", (event) => {

        let regex = /^[a-z0-9\/+](?!\w)/gi;

        if (regex.test(event.key)) {
            convertedNumber = [];
            mainDigitCharValidation()
        } else if (event.key === 'Backspace') {
            convertedNumber = [];
            mainDigitCharValidation()
        } else {
            event.preventDefault();
        }
    });

    //Main function that runs on click

    let finalSubmit = document.getElementById('finalButton').addEventListener('click',() => {

    // Some initial variable declarations
    let result = [];
    const resultElement = document.getElementById('result');

    let raisedByOne = [];

    // Conditional statement for changing a number from base 10 to any base

    if (startingBaseValue == 10 && baseValue != 10 ) {

        function conversionFromBase10 () {

            while (numberToConvert > 0)  {
                let dividing =  parseInt(numberToConvert / baseValue);
                let multiplication = dividing * baseValue;
                let remainder = numberToConvert - multiplication;
                let remainderDigitToLetter = Object.getOwnPropertyDescriptor(digits, remainder);
                result.unshift(remainderDigitToLetter.value)
                numberToConvert = dividing;
            }

            return finalResultDisplay();
        }
        conversionFromBase10();

    // Code for converting to base 10 from any base

    } else if (startingBaseValue != 10 && baseValue == 10) {

        let conversionToBase10 = () => {

            const sumFunction = (accumulator, currentValue) => accumulator + currentValue;

            for (let i = 0; i < convertedNumber.length; i++) {
                raisedByOne.push(Math.pow(startingBaseValue, i));
                result.push(convertedNumber[i] * raisedByOne[i]);
                // console.log(raisedByOne);
            }

            let conversionResult = result.reduce(sumFunction);

            // console.log(conversionResult + ' asta e rezultatul')

            if (conversionResult <= 0) {
                resultElement.innerHTML = '0';
            } else {
                resultElement.innerHTML = conversionResult;
            }

        }

        conversionToBase10()

    // Code for handling no input before submission

    } else if (startingBaseValue === '' || numberToConvert === '' || baseValue === 0) {
        if (startingBaseValue === '') {
            alert('Please insert a starting base number')
        } else if (numberToConvert === '') {
            alert('Please insert a number')
        } else if (baseValue === 0) {
            alert('Please select a conversion base')
        } else {
            alert('Please fill out the missing numbers')
        }

    // The code for converting any base trough base 10

    } else {

        let numberForFurtherConversion = [];

        let convertToAnyBaseTroughBase10 = () => {
            const sumFunction = (accumulator, currentValue) => accumulator + currentValue;

            for (let i = 0; i < convertedNumber.length; i++) {
                raisedByOne.push(Math.pow(startingBaseValue, i));
                numberForFurtherConversion.push(convertedNumber[i] * raisedByOne[i]);
            }

            let toConvertFromBase10 = numberForFurtherConversion.reduce(sumFunction);
            let multipleConvResult = [];
            // console.log(conversionToBase10Result);

            while (toConvertFromBase10 > 0)  {
                let dividing =  parseInt(toConvertFromBase10 / baseValue);
                let multiplication = dividing * baseValue;
                let remainder = toConvertFromBase10 - multiplication;
                let remainderDigitToLetter = Object.getOwnPropertyDescriptor(digits, remainder);
                multipleConvResult.unshift(remainderDigitToLetter.value)
                toConvertFromBase10 = dividing;
            }
            // console.log(multipleConvResult)
            if (multipleConvResult.join('') <= 0) {
                resultElement.innerHTML = '0';
            } else {
                resultElement.innerHTML = multipleConvResult.join('');
            }
        }

        convertToAnyBaseTroughBase10()
    }

    //Convert the number for the final result

    function finalResultDisplay() {
        let finalResult = result.join('');
        resultElement.innerHTML = finalResult;
    }

    });