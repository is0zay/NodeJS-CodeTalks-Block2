// What is a promise? What are promises used for?  What are pro/cons to using a promise?  Please code some examples of promises to show to the class. Make sure to go into detail as you explain your code to the class.

// Promises are used for async functions to make API calls. Promises state though the current value is unknown , when it is found the value will be sent out.
//Pros: Avoiding callback hell, Easier to read
//Cons: Only can return one object at a time, can't return multiple objects

//EXAMPLE
function getPlayer(id) {
	return new Promise((resolve, reject) => {
	  setTimeout(() => {
		console.log("Fetching player data....");
		resolve({ id: id, name: "Kobe" });
	  }, 4000); // return promised value after 4 seconds
	});
  }
  
  getArticle("1").then(res=> console.log(res));

  getArticles(10)
  .then((user) => getUserName(user.name))
  .then((place) => getAddress(place.city))
  .then((data) => console.log("Data", data))
  .catch((err) => console.log("Error: ", err.message));