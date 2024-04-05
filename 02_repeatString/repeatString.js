const repeatString = function(str, num) {
    if (num < 0) return "ERROR";
    let solution = "";
    for (let index = 0; index < num ; index++) {
        solution += str;
    }
    return solution;

};

// Do not edit below this line
module.exports = repeatString;
