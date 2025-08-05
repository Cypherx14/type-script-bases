(()=>{
    class Avenger {
        constructor(
            public name: string,
            public realName: string,
        ){
            console.log('Avenger created');
            
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
            console.log('Xmen created');

            super.getFullName(); // Accessing the private method from the parent class will cause an error if the metod is private
        }

        getFullNamefromXmen() {
            super.getFullName();    
        }
    
    }


    const wolverine = new Xmen('Wolverine', 'Logan',true);

    console.log(wolverine);
    wolverine.getFullNamefromXmen();



})()