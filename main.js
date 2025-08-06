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
    class Mutant {
        mutantPower(id) {
            return `Mutant power of ${this.name} with ID ${id}`;
        }
    }
})();
(() => {
    const client = {
        name: 'Fernando',
        age: 30,
        address: {
            id: 125,
            zip: '12345',
            city: 'New York',
        },
        getFullAddress(id) {
            return `${this.address.city}, ${this.address.zip}`;
        }
    };
    const client2 = {
        name: 'Melissa',
        age: 25,
        address: {
            id: 126,
            zip: '54321',
            city: 'Los Angeles',
        },
        getFullAddress(id) {
            return `${this.address.city}, ${this.address.zip}`;
        }
    };
})();
//# sourceMappingURL=main.js.map