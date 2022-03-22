'use strict'
//zadanie 2 uslojnennoe
const arr = ['2547', '548632', '45558', '546564', '98566', '2658441', '4887452']

for (let i = 0; i < arr.length; i++) {
    if (arr[i].startsWith('2') || arr[i].startsWith('4')) {
        console.log(arr[i]);
    }
}

let n = 100

nextPrime:
for(let i = 2; i <= n; i++) {

    let j

    for(j = 2; j < i; j++) {
        if(i % j == 0) continue nextPrime;
    }
    console.log(i, ': делители 1 и', j);
}

