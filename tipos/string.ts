

(() => {

    const batman:string = 'Batman';
    const superman:string = "Superman";
    const volcanNegro:string = `Volcán Negro`;

    const abc = 123;

    console.log(`I'm ${batman}, ${abc}` );
    

    console.log(batman[10]?.toUpperCase() || 'No hay carácter en esa posición');
    

})()