(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./input"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const input_1 = require("./input");
    const splitText = input_1.input.split(/\r?\n|\r|\n/g);
    let result = 0;
    splitText.forEach((line) => {
        if (!line.length) {
            return;
        }
        const filteredString = line.replace(/[^0-9]/g, '');
        const calibrationValue = filteredString[0] + filteredString.charAt(filteredString.length - 1);
        result += parseInt(calibrationValue);
        console.log(result);
    });
});
