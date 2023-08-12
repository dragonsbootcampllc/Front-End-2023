  var plaintextInput = document.getElementById('plaintext');
    var ciphertextInput = document.getElementById('ciphertext');
    const encryptBtn = document.getElementById('encryptbtn');
    const decryptBtn = document.getElementById('decryptbtn');


///simple way without allowing the user to choose the encryption key///
//START////////////////////////////////////////////////
// var encodedText;
// function encryptData(){
//     var plaintext = plaintextInput.value;
//     encodedText = window.btoa(plaintext);
//     ciphertextInput.value = encodedText;
// }

// encryptBtn.onclick = function(){
//     encryptData();
// }

// var decodedText;
// function decryptData(){
//     decodedText = window.atob(encodedText);
//     ciphertextInput.value = decodedText;
// }

// decryptBtn.onclick = function(){
//     decryptData();
// }

//END//////////////////////////////////////

///advanced way with allowing the user to choose the encryption key///
//START
//to encrypt
const buff_to_base64 = (buff) => btoa(
    new Uint8Array(buff).reduce(
      (plaintext, byte) => plaintext + String.fromCharCode(byte), ''
    )
  );
  //to decrypt
  const base64_to_buf = (b64) =>
    Uint8Array.from(atob(b64), (c) => c.charCodeAt(null));
  
  

async function encrypt(){
    var plaintext = plaintextInput.value;
    const password = window.prompt("Enter Password");
    ciphertextInput.value = await encryptText(plaintext, password);
    
}

const getPasswordKey = (pass) =>
window.crypto.subtle.importKey("raw", new TextEncoder().encode(pass), "PBKDF2", false, [
  "deriveKey",
]);

const deriveKey = (passKey, salt, keyUsage) =>
    window.crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        salt: salt,
        iterations: 250000,
        hash: "SHA-256",
      },
      passKey,
      { name: "AES-GCM", length: 256 },
      false,
      keyUsage
    );

    async function encryptText(plainInput, password) {
    try {
      const salt = window.crypto.getRandomValues(new Uint8Array(32));
      const passwordKey = await getPasswordKey(password);
      const aesKey = await deriveKey(passwordKey, salt, ["encrypt"]);
      const iv = window.crypto.getRandomValues(new Uint8Array(12));
      const encrypted = await window.crypto.subtle.encrypt(
        {
          name: "AES-GCM",
          iv,
        },
        aesKey,
        new TextEncoder().encode(plainInput)
      );
  
      const encryptedContentArr = new Uint8Array(encrypted);
      let buff = new Uint8Array(
        salt.byteLength + iv.byteLength + encryptedContentArr.byteLength
      );
      buff.set(salt, 0);
      buff.set(iv, salt.byteLength);
      buff.set(encryptedContentArr, salt.byteLength + iv.byteLength);
      const base64Buff = buff_to_base64(buff);
      return base64Buff;
    } catch (error) {
      console.log(`Error - ${error}`);
      return "";
    }
  }

  encryptBtn.onclick = function(){
    encrypt();
}


async function decrypt(){
    const pass = window.prompt("Enter Password");
    const encryptedText = ciphertextInput.value;
    const decryptedvalue = await decryptedText(encryptedText, pass);
    ciphertextInput.value = decryptedvalue || "failed! no history";
}


async function decryptedText(decryptedText,pass){
      try {
      const encryptedDataBuff = base64_to_buf(decryptedText);
      const salt = encryptedDataBuff.slice(0, 32);
      const iv = encryptedDataBuff.slice(32, 32 + 12);
      const data = encryptedDataBuff.slice(32 + 12);
      const passwordKey = await getPasswordKey(pass);
      const aesKey = await deriveKey(passwordKey, salt, ["decrypt"]);
      const decryptedContent = await window.crypto.subtle.decrypt(
        {
          name: "AES-GCM",
          iv,
        },
        aesKey,
        data
      );
      return new TextDecoder().decode(decryptedContent);
    } catch (error) {
      console.log(`Error - ${error}`);
      return "";
    }
}

decryptBtn.onclick = function(){
    decrypt();
}




