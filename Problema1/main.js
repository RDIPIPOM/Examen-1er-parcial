document.querySelector('#btnOK').addEventListener('click', () => {
    for (let i = 1; i < 3000; i++) {
        //isAHappyNumber();
    }

    console.log(sumaDivisors(getDivisors(220)));
    console.log(sumaDivisors(getDivisors(284)));
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
        if(number % i === 0){
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