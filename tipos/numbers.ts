(()=> {

    let avengers:number = 10; 
    console.log(avengers);
    
    const villians:number = 20;

    if(avengers < villians) {
        console.log('We are in trouble');
    }else{
        console.log('We can win');
    }

    avengers = 123;
    console.log({avengers});
})();
