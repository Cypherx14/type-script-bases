"use strict";
(() => {
    const hero = ['Batman', 100, true];
    // hero[0] = 50; // Error: Type 'number' is not assignable to type 'string'. but in js there is no error
    hero[0] = 'Superman'; // This is valid
    console.log(hero);
})();
