(() => {

    const fullName = (firstName:string, lastName?:string):string => {
        return `${firstName} ${lastName || 'No last name provided'}`;
    }

    const name = fullName('Bruce');
    console.log({name});
    

})()
