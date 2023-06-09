// What is a promise? What are promises used for?  What are pro/cons to using a promise?  Please code some examples of promises to show to the class. Make sure to go into detail as you explain your code to the class.

// Promises are used for async functions to make API calls. Promises state though the current value is unknown , when it is found the value will be sent out.
//Pros: Avoiding callback hell, Easier to read
//Cons: Only can return one object at a time, can't return multiple objects

//EXAMPLE
function fetchData() {
	return new Promise((resolve, reject) => {	 // asynchronous operation
	  setTimeout(() => {
		const data = "This is the data that is to be fetched";	// When promise is fulfiled resolve by sending the data
		resolve(data);
		
		// reject(new Error("Failed to fetch data"));	// If there is an error, reject the promise
	  }, 2000); // 2 second delay
	});
  }
  
  // Consuming the promise
  fetchData()
	.then((data) => {
	  console.log("Fetched data:", data);
	})
	.catch((error) => {
	  console.error("Error:", error.message);
	});