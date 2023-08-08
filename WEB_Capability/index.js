// The main thread script.

// Check if the browser supports web workers
if (window.Worker) {
    const worker = new Worker('./js/factorial.js');
  
    // Message event handler for receiving messages from the web worker
    worker.onmessage = function(event) {
      const resultElement = document.getElementById('result');
      resultElement.textContent = `Factorial of 10 is: ${event.data}`;
    };
  
    // Start the web worker and send the number 5 to calculate its factorial
    worker.postMessage(10);
  } else {
    // Display a message if web workers are not supported in the browser
    document.getElementById('result').textContent = 'Web workers are not supported in this browser.';
  }



 
