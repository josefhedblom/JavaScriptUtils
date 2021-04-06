Number.prototype.isEven = function(){
    if((this % 2) === 0){
        return true
    } else {
        return false
    }
};

Number.prototype.isOdd = function(){
    if((this % 2) === 1){
        return true
    } else {
        return false
    }
};