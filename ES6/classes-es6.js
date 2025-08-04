(()=>{
    class Avenger {
        name;
        power;

        constructor(name ='No name', power =0) {
            this.name = name;
            this.power = power;
        }
    }


    const hulk = new Avenger('hulk', 10000);
    console.log(hulk);

    class FlyingAvenger extends Avenger {
        flying;
        constructor(name, power, flying) {
            super(name, power);
            this.flying = flying;
        }
    }

    const falcon = new FlyingAvenger('falcon', 100, true);
    console.log(falcon);
     
})
