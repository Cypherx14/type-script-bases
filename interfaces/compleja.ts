(()=>{

    
    interface Client {
        name: string;
        age?: number;
        //no recomendable hacer a menos que estemos seguros de que no se va a modificar
        // address: {
        //     id: number;
        //     zip: string;
        //     city: string;
        // }
        address: Address; //recomendable usar una interface para la dirección
        getFullAddress(id:string): string; //método 
    }

    //lo que se recomienda es crear una interface para la dirección
    interface Address {
        id: number;
        zip: string;
        city: string;
    }
    
    const client: Client = {
        name: 'Fernando',
        age: 30,
        address: {
            id: 125,
            zip: '12345',
            city: 'New York',
        },
        getFullAddress(id: string): string {
            return `${this.address.city}, ${this.address.zip}`; //método que retorna la dirección completa
        }
    }

    const client2: Client = {
        name: 'Melissa',
        age: 25,
        address: {
            id: 126,
            zip: '54321',
            city: 'Los Angeles',
        },
         getFullAddress(id: string): string {
            return `${this.address.city}, ${this.address.zip}`; //método que retorna la dirección completa
        }
    }


})()