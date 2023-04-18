"use strict";
const text = document.getElementById("text");
const textSecond = document.getElementById("text-second");
const btn = document.querySelector(".btn-in-text");
const textInfo = document.querySelector(".text-info");
const btn_copy = document.querySelector(".btn-copy");
const matrizCode = [
    ["e", "!%12@/"],
    ["i", "{/.`76%#"],
    ["a", "+^&&#"],
    ["o", "?6$("],
    ["u", ":~9*-0"],
];
btn.style.display = "none";
function encrypt(strEncrypt) {
    if (typeof strEncrypt !== "string") {
        throw new Error("Input must be a string");
    }
    //Convert strEncrypt to lowercases to easy comparison
    let strEncryptStr = strEncrypt.toLowerCase();
    //Iterate over the code matrix to replace the characters
    matrizCode.forEach(([charOriginal, charEncrypt]) => {
        strEncryptStr = strEncryptStr.replace(charOriginal, charEncrypt);
    });
    return strEncryptStr;
}
function decrypt(strDecrypt) {
    if (typeof strDecrypt !== "string") {
        throw new Error("Input must be a string");
    }
    //Convert strDecrypt to lowercases to easy comparison
    let strDecryptStr = strDecrypt.toLowerCase();
    //Iterate over the code matrix to replace the characters
    matrizCode.forEach(([charOriginal, charDecrypt]) => {
        strDecryptStr = strDecryptStr.replaceAll(charDecrypt, charOriginal);
    });
    return strDecryptStr;
}
function btnEncrypt() {
    if (text.value.length === 0) {
        return;
    }
    const textEncrypt = encrypt(text.value);
    textSecond.style.backgroundImage = "none";
    textSecond.value = `${textEncrypt}`;
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
    textSecond.value = `${textDeCrypt}`;
    text.value = "";
    btn.style.display = "block";
    textInfo.style.display = "none";
}
function btnCopy() {
    const textCopy = textSecond.value;
    // Verificar si la API de Clipboard está disponible
    if (navigator.clipboard) {
        navigator.clipboard.writeText(textCopy).catch((error) => {
            console.error(`Error al copiar el texto: ${error}`);
        });
    }
    else {
        // Enfoque alternativo para dispositivos que no admiten la API de Clipboard
        const input = document.createElement("input");
        input.value = textCopy;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
    }
    textSecond.value = "";
    btn.style.display = "none";
    textInfo.style.display = "block";
    if (window.screen.width >= 1080) {
        textSecond.style.backgroundImage = "url(assets/pff.svg)";
    }
}
