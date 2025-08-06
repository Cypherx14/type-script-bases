(()=>{

    interface Xmen {
        name:string;
        realName:string;
        mutantPower(id:number): string; //método que recibe un número y retorna un string
    }


    interface Human {
        age:number;
    }
        

    class Mutant implements Xmen, Human{
        
        public name:string;
        public realName: string;
        
        public age: number;

        constructor(name:string, realName:string, age:number) {
            this.name = name;
            this.realName = realName;
            this.age = age;
        }
        mutantPower(id:number): string {
            return `Mutant power of ${this.name} with ID ${id}`;
        }
    }


})()