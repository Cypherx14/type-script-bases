"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            console.log(`${this.name} está salvando el mundo`);
        }
        lucharContraVillano(villano) {
            console.log(`${this.name} está luchando contra ${villano.name}`);
        }
    }
    class Villano extends Mutante {
        conquistarMundo() {
            console.log(`${this.name} está conquistando el mundo`);
        }
        lucharContraXmen(xmen) {
            console.log(`${this.name} está luchando contra ${xmen.name}`);
        }
    }
    let wolverine;
    wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villano('Magneto', 'Max Eisenhardt');
    const imprimirNombre = (character) => {
        console.log(character.name);
    };
})();
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
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
        }
        getFullNamefromXmen() {
            super.getFullName();
        }
        get getFullNameXmen() {
            return `${this.name} ${this.realName} - ${this.isMutant ? 'Mutant' : 'Human'}`;
        }
        set setFullNameXmen(name) {
            this.name = name;
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
})();
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static getApocalipsisInstance() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy Apocalipsis... el único');
            }
            return Apocalipsis.instance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    const apocalipsis1 = Apocalipsis.getApocalipsisInstance();
    const apocalipsis2 = Apocalipsis.getApocalipsisInstance();
    console.log(apocalipsis1, apocalipsis2);
    apocalipsis1.changeName('En Sabah Nur');
    console.log(apocalipsis1, apocalipsis2);
})();
//# sourceMappingURL=main.js.map