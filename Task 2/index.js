if (window.Worker)
{
  const factorialWorker = new Worker("factorial.js");
  const num = document.getElementById("num");
  const result = document.getElementById("result");

  num.addEventListener("keyup", ()=> {
    console.log("Message posted to worker");
    factorialWorker.postMessage(Number(num.value));
  })

  num.addEventListener("change", ()=> {
    console.log("Message posted to worker");
    factorialWorker.postMessage(Number(num.value));
  })

  factorialWorker.onmessage = (e) => {
    result.innerText = e.data;
  }
}else
{
  document.body.innerHTML = `
  <p class="mt-10 text-center text-red-400 text-2xl font-bold leading-9 tracking-tight text-gray-900 mb-10">Sorryyyyy... Your Browser Doesn't Support Worker APIs</p>
  `
}