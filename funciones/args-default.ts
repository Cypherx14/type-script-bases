(() => {

    const fullName = (firstName:string, lastName?:string, upper: boolean = false):string => {
        if (upper) {
            return `${firstName.toUpperCase()} ${lastName?.toUpperCase() || 'NO LAST NAME PROVIDED'}`;
        }else{
            return `${firstName} ${lastName || 'No last name provided'}`;
        }    
        // return `${firstName} ${lastName || 'No last name provided'}`;
    }

    const name = fullName('Bruce', 'Wayne', true);
    console.log({name});
    

})()
