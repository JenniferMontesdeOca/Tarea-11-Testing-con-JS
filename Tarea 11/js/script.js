function colorMessage(favoriteColor, shirtColor) {
    if (favoriteColor === shirtColor) {
        return 'The shirt is your favorite color!';
    } else {
        return 'That is a nice color.';
    }
}

function isEven(number) {
    return number % 2 === 0;
}

function numberDigits(x) {
    if (x >= 0 && x <= 9) {
        return `One digit: ${x}`;
    } else if (x >= 10 && x <= 99) {
        return `Two digits: ${x}`;
    } else {
        return `The number is: ${x}`;
    }
}

function executeRetoUno() {
    const favoriteColor = document.getElementById('favoriteColor').value;
    const shirtColor = document.getElementById('shirtColor').value;
    document.getElementById('retoUno').innerText = colorMessage(favoriteColor, shirtColor);
}

function executeRetoDos() {
    const evenNumber = document.getElementById('evenNumber').value;
    document.getElementById('retoDos').innerText = isEven(Number(evenNumber));
}

function executeRetoTres() {
    const numberX = document.getElementById('numberX').value;
    document.getElementById('retoTres').innerText = numberDigits(Number(numberX));
}

// Ejecución de los scripts
document.getElementById('retoUno').innerText = '';
document.getElementById('retoDos').innerText = '';
document.getElementById('retoTres').innerText = '';
