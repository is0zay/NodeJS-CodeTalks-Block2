// The “this” keyword works differently in arrow functions vs regularly declared functions.  Explain how the “this” keyword works differently in arrow functions vs normal functions.  Write some code that shows that you understand the difference between how the “this” keyword is used.  Make sure to go into detail as you explain your code to the class.

// When used in a regular function, the "this" value changes depending on how it is used. 
//If outside of a function, this is the global object.
console.log(this);

//If used in a method this is equal to the object owning the method
const player = {
	name:'Lebron',
	jerseyNumber: 6,
	whoAmI: function() {
		console.log(`My name is ${this.name} and I wear number ${this.jerseyNumber}`); // this will log the current objects name and jersey number values
	}

}

// When used in an arrow function, the this value is always equal to the value of the outer object no matter how far nested it is
const myCollection = {
	myShoes(shoe) {
	  console.log(this); // logs myCollection
	  const callback = () => {
		console.log(this); // logs myCollection
	  };
	  shoe.forEach(callback);
	}
  };
  // This shows that no matter how nested "this" is in an arrow function, the value is always equal to myCollection
  myCollection.myShoes([1, 2, 3]); 