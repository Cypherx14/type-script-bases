(()=>{

    interface addTwoNumbers {
        (a:number, b:number): number; //método que recibe dos números y retorna un número
    }


    let addNumberFunction: addTwoNumbers;

    addNumberFunction = (a:number, b:number) => {
        return 10;
    }

})()