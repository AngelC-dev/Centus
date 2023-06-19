// Get the values from the page
// Start our controller function
function getValues() {
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
  

    // We need to validate our input and parse into integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);
  
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
      // We call generateNumbers
      let numbers = generateNumbers(startValue, endValue);
      // We call displayNumbers
      displayNumbers(numbers);
    } else {
      alert("You must enter integers");
    }
  }
  
  // Generate numbers from start value to end value
  // Logic functions
  function generateNumbers(startValue, endValue) {
    let numbers = [];
  
    // We want to get all numbers from start to end
    for (let index = startValue; index <= endValue; index++) {
      // This will execute in a loop until index = endValue
      numbers.push(index);
    }
  
    return numbers;
  }
  
  // Display the numbers and mark even numbers bold
  // Display or view functions
  function displayNumbers(numbers) {
    let templateRows = "";
  
    for (let index = 0; index < numbers.length; index++) {
      let className = "even";
      let number = numbers[index];
  
      if (number % 2 === 0) {
        className = "even";
      } else {
        className = "odd";
      }
  
      templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }
  
    document.getElementById("results").innerHTML = templateRows;
  }
  