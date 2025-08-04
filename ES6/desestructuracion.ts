(()=>{
    
    type Avenger = {
        nick: string;
        ironman: string;
        spiderman: string;
        activo: boolean;
        poder: number;
    }
    
    const avengers: Avenger = {
        nick: 'Nick Fury',
        ironman: 'Tony Stark',
        spiderman: 'Tom Holland',
        activo: true,
        poder: 1500,
    }

    // Desestructuración de objetos, no importante el orden
    const { nick, ironman, spiderman, activo, poder } = avengers;

    const printAvenger = ({nick, ironman, spiderman, activo, poder}:Avenger) => {
        console.log(`Nick: ${nick}`);
        console.log(`Ironman: ${ironman}`);
        console.log(`Spiderman: ${spiderman}`);
        console.log(`Activo: ${activo}`);
        console.log(`Poder: ${poder}`);
    }

    printAvenger(avengers);
})()