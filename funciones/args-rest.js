"use strict";
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ') || 'No last name provided'}`;
    };
    // Using rest parameters to accept multiple last names
    const superman = fullName('Clark', 'Kent', 'Joseph');
    console.log({ superman });
})();
//# sourceMappingURL=args-rest.js.map