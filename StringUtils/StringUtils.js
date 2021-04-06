// Capitalize one word
// let str = "steve"
// str.capitalizeFirstLetter() = "Steve"

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

// Capitalize multiple words
// let str = "steve jobs"
// str.titleize() = "Steve Jobs"
String.prototype.titleize = function() {
  return this.split(" ").map(letter => letter.capitalizeFirstLetter()).join(" ");
};

// Check if string is empty. Return true or false
// let str = ""
// str.isEmpty() = true
String.prototype.isEmpty = function() {
    return (!this || 0 === this.length);
};

// Finds one word of a string and then extracts and returns it.
// let str = "Apple, Banana, Kiwi";
// str.extractWord('Kiwi') = 'Kiwi'
String.prototype.extractWord = function(item){
	return this.slice(this.search(item), (this.search(item) + item.length ))
};


// Enter a interger for the amount of times to print a string.
String.prototype.print = function (num) {
  let counter = 1;
  while(counter <= num) {
    console.log(`${this}`);
    counter++; 
  };
};