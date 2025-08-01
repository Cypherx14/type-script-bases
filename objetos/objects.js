"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 30,
        powers: ['Speed', 'Time Travel'],
    };
    flash = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Flight'],
        getName() {
            return this.name;
        },
    };
    console.log(flash.getName ? flash.getName() : 'No name function available');
})();
//# sourceMappingURL=objects.js.map