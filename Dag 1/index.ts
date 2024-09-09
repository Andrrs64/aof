import { input } from "./input";
const splitText = input.split(/\r?\n|\r|\n/g);
let result = 0;
splitText.forEach((line) => {
    if (!line.length) {
        return
    }
    const filteredString = line.replace(/[^0-9]/g, '');
    const calibrationValue = filteredString[0] + filteredString.charAt(filteredString.length - 1);
    result += parseInt(calibrationValue);
    console.log(result)
});

