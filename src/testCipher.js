  //const cipher = {};
const caesarCipher = (string, shift) => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const alphLength = alphabet.length
  
    let encodedText = ""
  
    if (shift > alphLength) {
      shift = shift % alphLength
    }
  
    let i = 0
  
    while (i < string.length) {
      if (alphabet.indexOf(string[i]) !== -1) {
        const alphabetIndex = alphabet.indexOf(string[i].toUpperCase())
  
        if (alphabet[alphabetIndex + shift]) {
          encodedText += alphabet[alphabetIndex + shift]
        } else {
          encodedText += alphabet[alphabetIndex + shift - alphLength]
        }
      } else {
        encodedText += string[i]
      }
  
      i++
    }
  
    return encodedText
  }
  
  export const decode = (inputText, offset) =>
    caesarCipher(inputText, 26 - offset)
  export const encode = (inputText, offset) => caesarCipher(inputText, offset)
  
  import { decode, encode } from "./cipher.js"
  const offsetDefault = 5
  const cipherText = encode("THALITA", offsetDefault)
  
  console.log(cipherText, "1")
  console.log(decode(cipherText, offsetDefault), "2")
export default cipher;