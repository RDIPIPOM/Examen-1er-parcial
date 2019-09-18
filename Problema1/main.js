document.querySelector('#btnOK').addEventListener('click', () => {
    let suma = new Array();
    for (let i = 0; i < 3000; i++) {
        suma[i] = sumaDivisors(getDivisors(i + 1));
    }

    for (let i = 0; i < 3000; i++) {
        for (let z = 0; z < 3000; z++) {
            if (suma[z] === (i + 1) && suma[i] === (z + 1) && z != i) {
                console.log((i + 1) + ':' + (z + 1));
            }
        }
    }
});

function isAHappyNumber(number1, number2) {
    let divisors1 = getDivisors(number1);
    let divisors2 = getDivisors(number2);

    if (sumaDivisors(divisors1) === sumaDivisors(divisors2))
        return true;
    else
        return false;
}

function getDivisors(number) {
    let divisors = new Array();
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            divisors.push(i);
        }
    }

    return divisors;
}

function sumaDivisors(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }

    return suma;
}