(() => {
    let avenger: any = 123;
    // let avenger: number = 123;
    let exists;
    let power;

    avenger = 'Dr. Strange';
    console.log(avenger.charAt(0)); // D

    //cast
    console.log( (avenger as string).charAt(0)); // D

    avenger = 150.2323;
    console.log(avenger.toFixed(2)); // 150.23

    //cast
    console.log( (<number>avenger).toFixed(2)); // 150.23

    console.log(exists); // undefined
    

})()