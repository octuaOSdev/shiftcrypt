function caesarEncrypt(plaintext, shift) {
    let encryptedText = "";
    for (let char of plaintext) {
        if (/[a-zA-Z]/.test(char)) {
            // Shift only alphabetical characters
            let base = char === char.toLowerCase() ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
            let shiftedChar = String.fromCharCode((char.charCodeAt(0) - base + shift) % 26 + base);
            encryptedText += shiftedChar;
        } else {
            // Keep non-alphabetical characters unchanged
            encryptedText += char;
        }
    }
    return encryptedText;
}

function caesarDecrypt(ciphertext, shift) {
    return caesarEncrypt(ciphertext, -shift);
}
