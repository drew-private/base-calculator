// const dropdownBtn = document.getElementById('triggerId');
//
// function changeBases(btn) {
//     dropdownBtn.innerText = btn.innerText;
// }

const numberInput = {number: 38};
const baseNumber = 8;

let result = [];
let preliminaryResult = {number: 0};

function baseCalc() {
    let dividing = parseInt(numberInput.number / baseNumber);

    if (baseNumber > 2) {
        dividing;
        let multiplication = dividing * baseNumber;
        let remainder = numberInput.number - multiplication;
        result.unshift(remainder);
        numberInput.number = dividing;
    }

    else if (baseNumber === 2) {
        preliminaryResult.number = dividing;
        console.log(preliminaryResult.number + "asta este reszultatu !!!!!");
        for (i = 0; i <= numberInput.number; i++) {
            let furtherDivision = parseInt(preliminaryResult.number / baseNumber);
            // console.log(furtherDivision);
            preliminaryResult.number = furtherDivision;
            // console.log(preliminaryResult);
            if (furtherDivision%2 === 0) {
                result.unshift(0);
            } else {
                result.unshift(1);
            }
        }
    }
};

if (baseNumber > 2) {
    for (var i = 0; i < numberInput.number; i++) {
        baseCalc();
    }
}

baseCalc();

let finalResultNumber = Number(result.join(''));

// console.log(finalResultNumber);
console.log(result);
