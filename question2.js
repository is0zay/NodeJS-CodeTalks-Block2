// What is a callback? What is callback hell? Why does callback hell occur and why should we avoid callback hell?  Please code an example of callback hell to show to the class. Make sure to go into detail as you explain your code to the class.

//  A callback function is a function passed as an arguement to another function. Callback hell occurs when we have multiple callback functions nested inside a function. It makes the code difficult to read and follow

getStories(10, (person) => {		//
	console.log("Fetch articles", user);
	getPersonData(person.username, (name) => {	
	  console.log(name);
	  getAddress(name, (item) => {
		console.log(item);
		// 
	  })
  })
})

// In the example above,  getPersonData has an argument that depends on the value returned from the getStories function
// Also the getAddress function has a parameter that is dependent on a value produced bty the getPersonData function
// This just makes the code very difficult to follow