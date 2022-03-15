let lang = prompt('Выберите язык', 'ru, en');



/*через if*/

if (lang === 'ru') {
    console.log('Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье')
} else if (lang === 'en') {
    console.log('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday')
} else {
    console.log('Непонятное значение ;)')
}




/* через switch-case*/

switch (lang) {
    case 'ru':
        console.log('Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье')
        break;
    case 'en':
        console.log('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday')
        break;
    default:
        console.log('Непонятное значение ;)')
        break;
}



/* через многомерный массив без ифов и switch*/
const langDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
}
console.log(langDays[lang])



const namePerson = prompt('Введите имя');
console.log((namePerson === 'Артем') ? 'директор' : (namePerson === 'Александр') ? 'преподователь' : 'студент')