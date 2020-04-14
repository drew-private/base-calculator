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

    let finalSubmit = document.querySelector('button[type="submit"]').addEventListener('click', function () {

    // Some initial variable declarations
    let result = [];
    let numberToConvert = document.getElementById('numberConv').value;
    let selectedBaseValue = document.getElementById('selectedBaseValue').value;
    let numberInput = {};
    numberInput = numberToConvert;

    let preliminaryResult = [parseInt(numberInput)];

    // Codul pentru bazele mai mari decat 2
if (selectedBaseValue === 10) {
    if (baseValue > 2) {
        for (i = 0; i < numberInput; i++) {
            let dividing = parseInt(numberInput / baseValue);
            let multiplication = dividing * baseValue;
            let remainder = numberInput - multiplication;
            result.unshift(remainder);
            numberInput = dividing;
        }

        // Codul pentru binary

    } else {
        function binary(value) {
            var count = 0;
            while (value > 1) {
                value = Math.floor(value / 2);
                preliminaryResult.unshift(value);
                count++;
            }
            return count;
        }
        binary(numberInput);

        let evenOrOdd = preliminaryResult.map(function (num) {
            if(num % 2 === 1) {
                result.push(1);
                return 1;
            } else {
                result.push(0);
                return 0;
            }
        });
    }
} else if (selectedBaseValue < 2) {
    alert('Choose a valid base number input between 2 and 16')
} else {
    let reversedNumbInput = [];
    const reversedNum = () =>
     parseFloat(numberInput.toString().split('').reverse().join(''));
        reversedNumbInput.push(reversedNum());
    const splitReverseNumb = reversedNumbInput.toString(10).split('');
    console.log(splitReverseNumb);

    for(i = 0; i < reversedNumbInput.length; i++) {
        console.log(Math.pow(reversedNumbInput[i], (reversedNumbInput[i] - reversedNumbInput[i])))
        console.log(reversedNumbInput);
    }

    // function powerAndConversion(num) {
    //     Math.pow(reversedNumbInput[], )
    // }


}

    //Convert the number for the final result

        let finalResult = result.join('');
        let resultElement = document.getElementById('result');
        resultElement.innerHTML = finalResult;
    });