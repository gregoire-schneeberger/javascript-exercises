const sumAll = function(firstInt, secondInt) {
    let sum = 0 ; 

    if (typeof(firstInt) !== "number" || typeof(secondInt) !== "number" || firstInt < 0 ||  secondInt < 0) {
        return "ERROR";
    }

    if (firstInt < secondInt) {
        for (i = firstInt; i< secondInt +1; i++) {
            sum += i;
        }
    }
    else if (firstInt > secondInt) {
        for (i = secondInt; i< firstInt +1; i++) 
        {
        sum += i;
        }
    }
    else {
        sum = firstInt;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
