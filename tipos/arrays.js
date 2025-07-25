"use strict";
(() => {
    // const numbers = [1, 2, 3, 4, 5, '6'];
    const numbers = [1, 2, 3, 4, 5, 6];
    // const numbers: number[] = [1, 2, 3, 4, 5];
    numbers.push(7);
    const villians = ['Omega Rojo', 'Dormammu', 'Duende Verde'];
    numbers.forEach(n => console.log(n * 2));
    villians.forEach(v => console.log(v.toUpperCase()));
})();
