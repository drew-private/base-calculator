// Codul pentru binary

let preliminaryResult = [parseInt(numberInput)];

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