function factorial(num) {
  if (num <= 1) {return 1;}
  return num * factorial(num-1);
};

onmessage = (e) => {
  console.log("Message received from main script");
  factorialResult = factorial(e.data);
  postMessage(factorialResult);
}
