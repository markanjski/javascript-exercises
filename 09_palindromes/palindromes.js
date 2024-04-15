const palindromes = function (astr) {
    
    let str = astr.replace(/[^A-z^0-9]/g, "");
  
    return str.split("").reverse().join("").toLowerCase() === str.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
