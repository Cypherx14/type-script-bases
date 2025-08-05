"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 30,
        powers: ['Speed', 'Time Travel'],
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Speed'],
        getName() {
            return this.name;
        },
    };
})();
(() => {
    const client = {
        name: 'Fernando',
        age: 30,
        address: {
            id: 125,
            zip: '12345',
            city: 'New York',
        }
    };
    const client2 = {
        name: 'Melissa',
        age: 25,
        address: {
            id: 126,
            zip: '54321',
            city: 'Los Angeles',
        }
    };
})();
//# sourceMappingURL=main.js.map