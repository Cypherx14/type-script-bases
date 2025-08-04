(() => {

    type Avenger = {
        name: string;
        weapon: string;
    }

    const ironman: Avenger = {
        name: 'ironman',
        weapon: 'Suit',
    }
    const captainAmerica: Avenger = {
        name: 'Capitan America',
        weapon: 'Shield',
    }
    const thor: Avenger = {
        name: 'Thor',
        weapon: 'Hammer',
    }

    const avengers: Avenger[] = [ironman, captainAmerica, thor];

    // For of loop to iterate over the array of avengers
    for (const avenger of avengers) {
        console.log(`Name: ${avenger.name}`);
        console.log(`Weapon: ${avenger.weapon}`);
    }

})()