// Multiply elements with input value. 
// [1,2,3,4] = [ 15, 30, 45, 60 ]
Array.prototype.times = function (num) {
    return this.map(x => x * num);
};

// Sums up the total value of all elements
// let array = [1,2,3,4] = 10
// array.sum() = 10
Array.prototype.sum = function(){
    return this.reduce(function(a, b){return a+b;})
};

// Finds the input value of an array and removes it
Array.prototype.removeItem = function(item){
	let index = this.indexOf(item);
	if(index > -1){
		this.splice(index, 1)
	}
	return this
	
};

// Returns the last element of the array
Array.prototype.last = function(){
	return this[this.length - 1]
};

// Return the smallet value
Array.prototype.min = function(){
	this.sort(function(a, b){return a - b});
	return this[0]
};

// Return the biggest value
Array.prototype.max = function(){
	this.sort(function(a, b){return b - a});
	return this[0]
};

// Return the shuffle version
Array.prototype.shuffle = function() {
	this.sort(function(a, b){return 0.5 - Math.random()});
	return this
};
