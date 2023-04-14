"use strict";
const text = document.getElementById("text");
const textSecond = document.getElementById("text-second");
const matrizCode = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];
function encrypt(strEncrypt) {
    //Convert strEncrypt to lowercases to easy comparison
    strEncrypt = strEncrypt.toLowerCase();
    //Iterate over the code matrix to replace the characters
    matrizCode.forEach(([charOriginal, charEncrypt]) => {
        strEncrypt = strEncrypt.replaceAll(charOriginal, charEncrypt);
    });
    return strEncrypt;
}
function decrypt(strDecrypt) {
    //Convert strdecrypt to lowercases to easy comparison
    strDecrypt = strDecrypt.toLowerCase();
    //Iterate over the code matrix to replace the characters
    matrizCode.forEach(([charOriginal, charEncrypt]) => {
        strDecrypt = strDecrypt.replaceAll(charEncrypt, charOriginal);
    });
    return strDecrypt;
}
function btnEncrypt() {
    const textEncrypt = encrypt(text.value);
    textSecond.value = textEncrypt;
    text.value = "";
}
function btnDecrypt() {
    const textDeCrypt = decrypt(text.value);
    textSecond.value = textDeCrypt;
    text.value = "";
}
function btnCopy() {
    const textCopy = textSecond.value;
    navigator.clipboard.writeText(textCopy);
}
