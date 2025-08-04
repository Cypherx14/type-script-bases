"use strict";
(() => {
    const a = 10;
    let b = 10;
    console.log(a);
})();
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName.toUpperCase()} ${(lastName === null || lastName === void 0 ? void 0 : lastName.toUpperCase()) || 'NO LAST NAME PROVIDED'}`;
        }
        else {
            return `${firstName} ${lastName || 'No last name provided'}`;
        }
    };
    const name = fullName('Bruce', 'Wayne', true);
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'No last name provided'}`;
    };
    const name = fullName('Bruce');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Bruce', 'Wayne');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ') || 'No last name provided'}`;
    };
    const superman = fullName('Clark', 'Kent', 'Joseph');
    console.log({ superman });
})();
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hello ${name}`;
    const saveTheWorld = () => `The world is saved!`;
    let myFunction;
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(myFunction('Fernando'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatSignal = () => {
        return 'Activando señal de Batman';
    };
    console.log(typeof activateBatSignal);
    const heroName = returnName();
})();
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
(() => {
    let avenger = 123;
    let exists;
    let power;
    avenger = 'Dr. Strange';
    console.log(avenger.charAt(0));
    console.log(avenger.charAt(0));
    avenger = 150.2323;
    console.log(avenger.toFixed(2));
    console.log(avenger.toFixed(2));
    console.log(exists);
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, 6];
    numbers.push(7);
    const villians = ['Omega Rojo', 'Dormammu', 'Duende Verde'];
    numbers.forEach(n => console.log(n * 2));
    villians.forEach(v => console.log(v.toUpperCase()));
})();
(() => {
    let isSuperman = true;
    console.log(isSuperman);
    isSuperman = true && false;
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.medium;
    console.log(currentAudio);
})();
(() => {
    const error = (message) => {
        if (false) {
            throw new Error('Error en la función abc' + message);
        }
        return 1;
    };
    error('Auxilio');
})();
(() => {
})();
(() => {
    let avengers = 10;
    console.log(avengers);
    const villians = 20;
    if (avengers < villians) {
        console.log('We are in trouble');
    }
    else {
        console.log('We can win');
    }
    avengers = 123;
    console.log({ avengers });
})();
(() => {
    var _a;
    const batman = 'Batman';
    const superman = "Superman";
    const volcanNegro = `Volcán Negro`;
    const abc = 123;
    console.log(`I'm ${batman}, ${abc}`);
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No hay carácter en esa posición');
})();
(() => {
    const hero = ['Batman', 100, true];
    hero[0] = 'Superman';
    console.log(hero);
})();
(() => {
    function callBatman() {
    }
    const callSuperman = () => {
    };
    const a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map