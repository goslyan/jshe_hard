'use strict'

const mysteryNumber = Math.round(Math.random()*100);
console.log(mysteryNumber)

const isNumber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num) && num !=0;
}

const  start = function () {
    let Attempts = 10;
    const game = function () {
        let number = prompt('Угадай число от 1 до 100');
        Attempts--;
        if (number == mysteryNumber) {
            const oneMore = confirm('Поздравляю, вы угадали! Хотите сыграть еще?');
            if ( oneMore) {
                 start();
            } else {
                console.log('Игра окончена')
            }
        } else if (Attempts < 1) {
            const oneMore = confirm('Попытки закончились. Хотите сыграть еще?');
            if (oneMore) {
                 start();
            } else {
                return
            }
        } else if (number === null) {
            alert('Игра окончена');
        } else if (!isNumber(number)) {
            alert('Введи число! Осталось попыток: ' + Attempts);
            game();
        } else if (number < mysteryNumber) {
            alert('Загаданное число больше, осталось попыток: ' + Attempts);
            game();
        } else if (number > mysteryNumber) {
            alert('Загаданное число меньше, осталось попыток: ' + Attempts);
            game();
        }
    }
    game();
}
start();

