const decryptedTextArea = document.getElementById("decrypted");
const encryptedTextArea = document.getElementById("encrypted");
const userTextArea = document.getElementById("user-text");
const btnConvert = document.getElementById("btn-convert");
const btnClear = document.getElementById("btn-clear");
const algorithmSelected = document.getElementById("algorithm-select");
const decryptedCopyBtn = document.getElementById("decrypted-copy-btn");
const encryptedCopyBtn = document.getElementById("encrypted-copy-btn");

// decryptedTextArea.addEventListener("input", (event) => {
//     if (event.target.value === "") {
//         encryptedTextArea.removeAttribute("disabled");
//     } else {
//         encryptedTextArea.setAttribute("disabled", true);
//         btnConvert.textContent = "Encrypt";
//     }
// });

// encryptedTextArea.addEventListener("input", (event) => {
//     if (event.target.value === "") {
//         decryptedTextArea.removeAttribute("disabled");
//     } else {
//         decryptedTextArea.setAttribute("disabled", true);
//         btnConvert.textContent = "Decrypt";
//     }
// });

decryptedCopyBtn.addEventListener("click", () => {
    if (decryptedTextArea.value !== "") {
        navigator.clipboard.writeText(decryptedTextArea.value);
        decryptedCopyBtn.textContent = "Copied!";
        setTimeout(() => {
            decryptedCopyBtn.textContent = "Copy";
        }, 1000);
    }
});

encryptedCopyBtn.addEventListener("click", () => {
    if (encryptedTextArea.value !== "") {
        navigator.clipboard.writeText(encryptedTextArea.value);
        encryptedCopyBtn.textContent = "Copied!";
        setTimeout(() => {
            encryptedCopyBtn.textContent = "Copy";
        }, 1000);
    }
});

btnClear.addEventListener("click", () => {
    decryptedTextArea.value = encryptedTextArea.value = userTextArea.value = "";
    // decryptedTextArea.removeAttribute("disabled");
    // encryptedTextArea.removeAttribute("disabled");
    // btnConvert.textContent = "Encrypt";
});

btnConvert.addEventListener("click", () => {
    // if (decryptedTextArea.value === "" && encryptedTextArea.value === "") {
    //     alert("Please enter a message");
    //     return;
    // }
    if (userTextArea.value === "") {
        alert("Please enter a message");
        return;
    }
    window.crypto.subtle
        .generateKey(
            {
                name: "RSA-OAEP",
                modulusLength: 2048,
                publicExponent: new Uint8Array([1, 0, 1]),
                hash: "SHA-256",
            },
            true,
            ["encrypt", "decrypt"]
        )
        .then(async (keyPair) => {
            // console.log(keyPair);
            // console.log(keyPair.privateKey);
            // if (encryptedTextArea.value !== "") {
            //     decryptedTextArea.value = "";
            //     await decryptMessage(keyPair.privateKey);
            // } else if (decryptedTextArea.value !== "") {
            //     encryptedTextArea.value = "";
            //     encryptMessage(keyPair.publicKey, keyPair.privateKey);
            // }

            encryptMessage(keyPair.publicKey, keyPair.privateKey);
        })
        .catch((err) => {
            console.log(err);
        });
});

function getMessageEncoding() {
    let message = userTextArea.value;
    let enc = new TextEncoder();
    return enc.encode(message);
}

let ciphertext;

async function encryptMessage(publicKey, privateKey) {
    let encoded = getMessageEncoding();
    ciphertext = await window.crypto.subtle.encrypt(
        {
            name: algorithmSelected.value,
        },
        publicKey,
        encoded
    );

    let buffer = new Uint8Array(ciphertext);
    encryptedTextArea.value = buffer;

    let decrypted = await window.crypto.subtle.decrypt(
        {
            name: algorithmSelected.value,
        },
        privateKey,
        ciphertext
    );

    decryptedTextArea.value = new TextDecoder().decode(decrypted);
}
