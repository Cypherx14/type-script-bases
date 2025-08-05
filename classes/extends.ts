(()=>{
    class Avenger {
        constructor(
            public name: string,
            public realName: string,
        ){
            // console.log('Avenger created');
            
        }

        protected getFullName(): string {
            return `${this.name} ${this.realName}`;
        }
    }

    class Xmen extends Avenger {
        
        constructor(
            name: string,
            realName: string,
            public isMutant: boolean,
        ){
            super(name, realName);
            // console.log('Xmen created');

            // super.getFullName(); // Accessing the private method from the parent class will cause an error if the metod is private
        }

        getFullNamefromXmen() {
            super.getFullName();    
        }

        get getFullNameXmen(): string {
            return `${this.name} ${this.realName} - ${this.isMutant ? 'Mutant' : 'Human'}`;
        }

        set setFullNameXmen(name: string) {
            this.name = name;
        }

    
    }


    const wolverine = new Xmen('Wolverine', 'Logan',true);


    //descomentar para ver funcionamiento de los metodos

    // wolverine.getFullNamefromXmen();

    // //usando el getter
    // console.log(wolverine.getFullNameXmen);

    // //usanddo el setter
    // wolverine.setFullNameXmen = 'Wolverine X';
    // console.log(wolverine.getFullNameXmen);



})()