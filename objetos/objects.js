"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 30,
        powers: ['Speed', 'Time Travel'],
        getName() {
            return this.name;
        }
    };
    flash = {
        name2: 'Otro nombre',
    };
})();
