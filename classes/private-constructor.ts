(()=>{

    class Apocalipsis {
        
        static instance: Apocalipsis;
        
        //este constructor es privado, por lo que no se pueden crear instancias de esta clase desde fuera de la misma

        private constructor(public name: string) {}

        //método estático para obtener la única instancia de la clase
        static getApocalipsisInstance(): Apocalipsis {
            if(!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy Apocalipsis... el único');
            }
            return Apocalipsis.instance;
        }

        public changeName(newName: string): void {
            this.name = newName;
        }

    }



    const apocalipsis1 = Apocalipsis.getApocalipsisInstance();

    const apocalipsis2 = Apocalipsis.getApocalipsisInstance();

    // const apocalipsis3 = new Apocalipsis('En Sabah Nur'); //error porque el constructor es privado

    //va a imprimir el mismo objeto porque es la misma instancia
    console.log(apocalipsis1, apocalipsis2);

    //si cambio el nombre de una instancia, se refleja en la otra
    apocalipsis1.changeName('En Sabah Nur');
    console.log(apocalipsis1, apocalipsis2);



})()