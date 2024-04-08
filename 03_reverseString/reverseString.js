const reverseString = function(text) {
    let textArr = text.split(""), reversed = [];
    while (textArr.length > 0){
        reversed.push(textArr.pop());
    }
    return reversed.join("");

};

// Do not edit below this line
module.exports = reverseString;
