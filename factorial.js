// The web worker script (factorial.js).

// Function to calculate the factorial of a number
function calculateFactorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      return number * calculateFactorial(number - 1);
    }
  }
  
  // Message event handler to receive the number from the main thread and calculate its factorial
  onmessage = function(event) {
    const number = event.data;
    const result = calculateFactorial(number);
  
    // Send the result back to the main thread
    postMessage(result);
  };
  
