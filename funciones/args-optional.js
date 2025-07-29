"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'No last name provided'}`;
    };
    const name = fullName('Bruce');
    console.log({ name });
})();
