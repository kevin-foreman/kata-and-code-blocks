// The alphabet cipher was published by Lewis Carroll in 1868
// It is based on a Vigenere cipher, a well-known scheme in cryptography
function caesarCipherEncrypt(message, shift) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const messageLowerCase = message.toLowerCase();
  
    let encryptedMessage = '';
  
    for (let i = 0; i < messageLowerCase.length; i++) {
      const char = messageLowerCase[i];
      if (char === ' ') {
        encryptedMessage += ' ';
        continue;
      }
  
      const charIndex = alphabet.indexOf(char);
      if (charIndex === -1) {
        // Character is not in the alphabet, leave it unchanged
        encryptedMessage += char;
      } else {
        const encryptedIndex = (charIndex + shift) % 26;
        encryptedMessage += alphabet[encryptedIndex];
      }
    }
  
    return encryptedMessage;
  }
  
  // Example usage:
  const plaintext = 'hello world';
  const shift = 3;
  const encryptedMessage = caesarCipherEncrypt(plaintext, shift);
  console.log('Encrypted Message:', encryptedMessage); // Output: khoor zruog