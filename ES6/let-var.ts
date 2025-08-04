(() => {

    // console.log(x); // undefined, no error
    // var x = 5;

    const name = "Alex";
    // name = "Juan"; ❌ Error

    const user = { age: 30 };
    user.age = 31; // ✅ se puede modificar la propiedad, no la referencia


})()