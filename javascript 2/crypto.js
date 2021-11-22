const CryptoJS = require('crypto-js');

const encrypt = (text) => {
    const encrypted = CryptoJS.AES.encrypt(text, "secrettext")
    cipher = encrypted.toString()
    console.log(cipher)
}

encrypt("Fazztrack")

const decrypt = (text) => {
    const decrypted = CryptoJS.AES.decrypt(text, "secrettext")
    decipher = decrypted.toString(CryptoJS.enc.Utf8)
    console.log(decipher)
}

decrypt("U2FsdGVkX1/h/Jz1niGTUkeGbiP0g/PEXzKfxNOtJbc=")




// // Encrypt the message using a generated key
// function encrypt(message, key) {
//     return CryptoJS.AES.encrypt(message, key);
// }

// // Decrypt the message using the generated key
// function decrypt(encrypted, key) {
//     return CryptoJS.AES.decrypt(encrypted, key).toString(CryptoJS.enc.Utf8);
// }