                  
                                      
   const eIn = document.querySelector<HTMLInputElement>('.e');
const eOut = document.querySelector<HTMLElement>('.encrypted-text');

const dIn = document.querySelector<HTMLInputElement>('.d');
const dOut = document.querySelector<HTMLElement>('.decrypted-text');

const alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let encryptedMessage = '';
let decryptedMessage = '';

eIn.addEventListener('input', (e: InputEvent) => {
  const letter = (e.target as HTMLInputElement).value.slice(-1);
  if (letter === 'z') {
    encryptedMessage = encryptedMessage.concat('', 'a');
  } else if (letter === 'Z') {
    encryptedMessage = encryptedMessage.concat('', 'A');
  } else if (letter === ' ') {
    encryptedMessage = encryptedMessage.concat('', ' ');
  } else if (letter === '') {
    encryptedMessage = encryptedMessage.slice(0, -1);
  } else {
    encryptedMessage = encryptedMessage.concat('', alph[alph.indexOf(letter)+1]);
  }
  eOut.innerHTML = encryptedMessage;
});

dIn.addEventListener('input', (e: InputEvent) => {
  const letter = (e.target as HTMLInputElement).value.slice(-1);
  if (letter === 'a') {
    decryptedMessage = decryptedMessage.concat('', 'z');
  } else if (letter === 'A') {
    decryptedMessage = decryptedMessage.concat('', 'Z');
  } else if (letter === ' ') {
    decryptedMessage = decryptedMessage.concat('', ' ');
  } else if (letter === '') {
    decryptedMessage = decryptedMessage.slice(0, -1);
  } else {
    decryptedMessage = decryptedMessage.concat('', alph[alph.indexOf(letter)-1]);
  }
  dOut.innerHTML = decryptedMessage;
});       
                        
        
        
          
                                  
                                    
                                