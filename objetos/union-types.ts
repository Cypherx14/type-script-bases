(() => {
    type Hero = {
        name:string,
        age?: number,
        powers: string[],
        getName?: () => string,

    }

    let myCustomVariable: (string | number | Hero) = 'Fernando';
    console.log(myCustomVariable);
    
    myCustomVariable = 20;
    console.log(myCustomVariable);

    myCustomVariable = {
        name: 'Ironman',
        age: 45,
        powers: ['volar', 'disparar misiles'],
        getName(this: Hero) {
            return this.name;
        }
    };
    console.log(myCustomVariable);
    
    
    
})()