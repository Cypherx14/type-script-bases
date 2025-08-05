(() => {

    interface Hero {
        name: string, 
        age?: number,
        powers: string[],   
        getName?: () => string,
    }

    let flash: Hero = {
        name: 'Barry Allen',
        age: 30,
        powers: ['Speed', 'Time Travel'],
    }

    let superman: Hero = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Speed'],
        getName() {
            return this.name;
        },
    }


})()