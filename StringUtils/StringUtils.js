String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.titleize = function() {
  return this.split(" ").map(letter => letter.capitalizeFirstLetter()).join(" ");
};

String.prototype.isEmpty = function() {
    return (!this || 0 === this.length);
};

String.prototype.extractWord = function(item){
	return this.slice(this.search(item), (this.search(item) + item.length ))
};

String.prototype.print = function (num) {
  let counter = 1;
  while(counter <= num) {
    console.log(`${this}`);
    counter++; 
};
