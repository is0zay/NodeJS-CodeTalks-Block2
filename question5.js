// What is a async/await? Why is async/await useful?  What are pro/cons to using async/await?  Please code some examples of async/await to show to the class. Make sure to go into detail as you explain your code to the class.

// async/await is another method to avoiding callback hell. It utilizes both the async and await keywords in order to work properly.
// Pros: Utilizes try catch,Better for handling errors, easier to debug


//EXAMPLE
function setName (n) {
	 return n
}

async function sayName() {
	try {
	  const name = await setName('Bean');
	  
	  console.log(name);
	} catch (err) {
	  console.log("Error: ", err.message);
	}
  }

  sayName();