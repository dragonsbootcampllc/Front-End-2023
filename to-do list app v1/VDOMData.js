var rootVDOM;

self.addEventListener('message', (event) => {
  const message = event.data;

  if (message.request === 'getData') {
    self.postMessage(rootVDOM);
  }else if (message.request === 'sendData') {
    rootVDOM = message.data;
  }
});
