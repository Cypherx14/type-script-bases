namespace Validations { 

    export const validateText = (text:string ): boolean =>  {
        
        return text.length > 3 ? true: false;
    }

    export const validateDate = (myDate: Date): boolean => {
        return ((myDate instanceof Date) && !isNaN(myDate.getTime())) ? true : false;
    }
}



console.log(Validations.validateText("Hello")); 



