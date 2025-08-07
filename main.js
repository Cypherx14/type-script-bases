"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (text) => {
        return text.length > 3 ? true : false;
    };
    Validations.validateDate = (myDate) => {
        return ((myDate instanceof Date) && !isNaN(myDate.getTime())) ? true : false;
    };
})(Validations || (Validations = {}));
console.log(Validations.validateText("Hello"));
//# sourceMappingURL=main.js.map