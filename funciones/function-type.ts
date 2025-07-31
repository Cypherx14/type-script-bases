(() => {
    const addNumbers = (a:number, b:number) => a + b;
    const greet = (name:string) => `Hello ${name}`;
    const saveTheWorld = () => `The world is saved!`;

    //tipo function 
    // let myFunction: Function;

    //si quiero que retorne number, me va a dar error en las otras funciones 
    let myFunction: (y:number, z: number) => number;

    // myFunction = 10; //error 
    // console.log(myFunction);
    
    myFunction = addNumbers; // OK
    console.log(myFunction(1,2));

    myFunction = greet; // OK
    console.log(myFunction('Fernando'));

    myFunction = saveTheWorld; // OK
    console.log(myFunction());
    

    
})()