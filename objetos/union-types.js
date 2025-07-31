"use strict";
(() => {
    let myCustomVariable = 'Fernando';
    console.log(myCustomVariable);
    myCustomVariable = 20;
    console.log(myCustomVariable);
    myCustomVariable = {
        name: 'Ironman',
        age: 45,
        powers: ['volar', 'disparar misiles'],
        getName() {
            return this.name;
        }
    };
    console.log(myCustomVariable);
})();
