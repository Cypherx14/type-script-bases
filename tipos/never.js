"use strict";
(() => {
    const error = (message) => {
        if (false) {
            throw new Error('Error en la función abc' + message);
        }
        return 1;
    };
    error('Auxilio');
})();
//# sourceMappingURL=never.js.map