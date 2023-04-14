"use strict";
const text = document.getElementById("text");
const textSecond = document.getElementById("text-second");
const btn = document.querySelector(".btn-in-text");
const textInfo = document.querySelector(".text-info");
const matrizCode = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];
btn.style.display = "none";
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
    if (text.value.length === 0) {
        return;
    }
    const textEncrypt = encrypt(text.value);
    textSecond.style.backgroundImage = "none";
    textSecond.value = textEncrypt;
    text.value = "";
    btn.style.display = "block";
    textInfo.style.display = "none";
}
function btnDecrypt() {
    if (text.value.length === 0) {
        return;
    }
    const textDeCrypt = decrypt(text.value);
    textSecond.style.backgroundImage = "none";
    textSecond.value = textDeCrypt;
    text.value = "";
    btn.style.display = "block";
    textInfo.style.display = "none";
}
function btnCopy() {
    const textCopy = textSecond.value;
    navigator.clipboard.writeText(textCopy);
    textSecond.value = "";
    btn.style.display = "none";
    textInfo.style.display = "block";
    textSecond.style.backgroundImage = "url(assets/pff.svg)";
}
