Math.randomBigNumber = function () {
    return Math.floor(Math.pow(10, 20-1) + Math.random() * 10 * Math.pow(10, 20-1));
};

Math.randomSmallNumber = function () {
    return Math.floor(Math.random() * 100);
};

Math.isEven = function(a){
    if((a % 2) === 0){
        return true
    } else {
        return false
    }
};

Math.isOdd = function(a){
    if((a % 2) === 1){
        return true
    } else {
        return false
    }
};
