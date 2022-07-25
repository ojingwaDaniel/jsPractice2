// Step 1: Fill in these three consts by selecting the right nodes by their HTML ID's
const name = document.getElementById("name"); // Fill this in 
const age = document.getElementById("age"); // Fill this in.
const dogYears = document.getElementById("dogyears"); // Fill this in. 
name.innerText = 'Daniel'
age.innerText = 18

// Step 2. Set the values.
// Example: myNode.innerText = "something"
// Set `name` and `age` in here


function showDogYears(age) {
  // Step 3. Cast `age` as a number
  dogYears.innerText = Number(age) * 7;
  return age * 7
}

// Step 4. Set the parameter of showDogyears()
dogYears.innerText = showDogYears(2)
                      

// Step 5. Select all the .fake-input classes and give them the class of .real-input. This may take a little "googling" to find the solution, but that's half of what web development is all about. 
const fakeInputs = document.querySelectorAll(".fake-input")
fakeInputs.forEach(node => {
  node.classList.add("real-input")
})