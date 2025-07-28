
(() => {
    const hero: string = 'Flash';

    function returnName():string {
        
        return hero;
    }

    const activateBatSignal = (): string => {
        return 'Activando señal de Batman';
    }

    console.log(typeof activateBatSignal);
     
    const heroName = returnName();

})()