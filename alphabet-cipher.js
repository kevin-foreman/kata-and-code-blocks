// The alphabet cipher was published by Lewis Carroll in 1868
// It is based on a Vigenere cipher, a well-known scheme in cryptography
// The primary function takes in a string or 'message' and a 'shift' parameter
function alphabetCipher(message, shift) {
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
  let message1 = 'hello world';
  let message2 = 'khoor zruog'
  let shift1 = 3;
  let shift2 = -3;
  const encryptedMessage1 = alphabetCipher(message1, shift1);
  console.log('Encrypted Message:', encryptedMessage1); // Output: khoor zruog
  const encryptedMessage2 = alphabetCipher(message2, shift2);
  console.log('Encrypted Message:', encryptedMessage2); // Output: hello world