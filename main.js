"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `(${this.realName}) as ${this.name} is part of ${this.team}`;
        }
        static getAvgAge() {
            return this.avgAge;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('Antman', 'Avengers', 'Scott Lang');
    const hawkeye = new Avenger('Hawkeye', 'Avengers');
    console.log(antman);
    console.log(hawkeye);
    console.log(antman.bio());
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Avenger created');
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log('Xmen created');
            super.getFullName();
        }
        getFullNamefromXmen() {
            super.getFullName();
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    console.log(wolverine);
    wolverine.getFullNamefromXmen();
})();
//# sourceMappingURL=main.js.map