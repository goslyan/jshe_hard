let hah = prompt('Введите что-нибудь');

const beep = function(a){
    if (typeof a !== 'string') {
        console.log('в качестве аргумента передана не строка')
    }
    else if (typeof a == "string" && a.length > 30) {
        a.trim()
        console.log(a.slice(1,30) + '...')
    }
    else if (a.length < 30) {
        console.log(a)
    }
}
beep(hah)
