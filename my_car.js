module.exports = {
    break: () => {
        console.log("the car stops");
    },
    drive: () => {
        console.log("The car moves forward");
    },
    turn: (degrees) => {
        console.log(`The car turns ${degrees}`);
    },
};
