const removeFromArray = function(arr, ...elToRmv) {
    console.log(arr, elToRmv);
    elToRmv.forEach(el => {
        arr = arr.filter(element=>element !== el);        
    });
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
