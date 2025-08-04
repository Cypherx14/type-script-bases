"use strict";
(() => {
    const avengers = {
        nick: 'Nick Fury',
        ironman: 'Tony Stark',
        spiderman: 'Tom Holland',
        activo: true,
        poder: 1500,
    };
    const { nick, ironman, spiderman, activo, poder } = avengers;
    const printAvenger = ({ nick, ironman, spiderman, activo, poder }) => {
        console.log(`Nick: ${nick}`);
        console.log(`Ironman: ${ironman}`);
        console.log(`Spiderman: ${spiderman}`);
        console.log(`Activo: ${activo}`);
        console.log(`Poder: ${poder}`);
    };
    printAvenger(avengers);
})();
(() => {
    const ironman = {
        name: 'ironman',
        weapon: 'Suit',
    };
    const captainAmerica = {
        name: 'Capitan America',
        weapon: 'Shield',
    };
    const thor = {
        name: 'Thor',
        weapon: 'Hammer',
    };
    const avengers = [ironman, captainAmerica, thor];
    for (const avenger of avengers) {
        console.log(`Name: ${avenger.name}`);
        console.log(`Weapon: ${avenger.weapon}`);
    }
})();
(() => {
    const name = "Alex";
    const user = { age: 30 };
    user.age = 31;
})();
//# sourceMappingURL=main.js.map