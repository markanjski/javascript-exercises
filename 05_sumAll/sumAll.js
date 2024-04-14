const sumAll = function(a, b) {
    let start, end, sum = 0;
    if (a>b) {
        start = b;
        end = a;
    }else {
        start = a;
        end = b;
    }
    console.log(start, end);
    while (start <= end){
        sum += start;
        start++;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
