Math.randomNumber = function (a) {
    return Math.floor(Math.random() * a);
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
