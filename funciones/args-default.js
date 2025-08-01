"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName.toUpperCase()} ${(lastName === null || lastName === void 0 ? void 0 : lastName.toUpperCase()) || 'NO LAST NAME PROVIDED'}`;
        }
        else {
            return `${firstName} ${lastName || 'No last name provided'}`;
        }
        // return `${firstName} ${lastName || 'No last name provided'}`;
    };
    const name = fullName('Bruce', 'Wayne', true);
    console.log({ name });
})();
//# sourceMappingURL=args-default.js.map