const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

let arrayOfNumbers = new Array();
let readlineFunc = () => {
    readline.question("Enter any number: ", getNumber);
};
let stopReadline = () => {
    readline.close();
};
let getNumber = (num) => {
    if (num !== "stop") {
        arrayOfNumbers.push(parseInt(num));
        readlineFunc();
    } else {
        let sum = arrayOfNumbers.reduce((acc, num) => acc + num, 0);
        console.log(sum);
        stopReadline();
    }
};
readlineFunc();