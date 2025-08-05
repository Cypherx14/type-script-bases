(()=>{

    abstract class Mutante {

        constructor(
            public name: string,
            public realName: string,
        ){
        }
        
    }

    class Xmen extends Mutante {

        salvarMundo(): void {
            console.log(`${this.name} está salvando el mundo`);
        }

        lucharContraVillano(villano: Mutante): void {
            console.log(`${this.name} está luchando contra ${villano.name}`);
        }

    }

    class Villano extends Mutante {

        conquistarMundo(): void {
            console.log(`${this.name} está conquistando el mundo`);
        }

        lucharContraXmen(xmen: Mutante): void {
            console.log(`${this.name} está luchando contra ${xmen.name}`);
        }
    }


    //descomentar los logs para ver el funcionamiento

    let wolverine:Xmen;
    wolverine = new Xmen('Wolverine', 'Logan');

    const magneto = new Villano('Magneto', 'Max Eisenhardt');

    // console.log(wolverine);
    // wolverine.salvarMundo();
    // console.log(magneto);
    // magneto.conquistarMundo();


    //funcion que recibe un objeto que extiende de Mutante
    const imprimirNombre = (character: Mutante): void => {
        console.log(character.name);                
    }

    //lo acepta xq la funbión recibe un Mutante
    // imprimirNombre(wolverine);
})()