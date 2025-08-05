(()=>{

    class Avenger {
        // private name: string;
        // private team: string;   
        // private realName?: string;
        static avgAge: number = 35;


        // constructor(name: string, team: string, realName?: string) {
        //     this.name = name;
        //     this.team = team;
        //     this.realName = realName;
        // }

        //forma mas rapida de definir el constructor
        // y las propiedades de la clase

        constructor(private name: string, private team: string, public realName?: string) {}

        //metodos de la clase
        public bio(): string {
            return `(${this.realName}) as ${this.name} is part of ${this.team}`;
        }

        public static getAvgAge(): number {
            return this.avgAge;
        }

    }

    const antman = new Avenger('Antman', 'Avengers', 'Scott Lang');
    const hawkeye = new Avenger('Hawkeye', 'Avengers');
    console.log(antman);
    console.log(hawkeye);

    console.log(antman.bio());
    

})();