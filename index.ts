const text = document.getElementById("text") as HTMLTextAreaElement;
const textSecond = document.getElementById(
  "text-second"
) as HTMLTextAreaElement;
const btn = document.querySelector(".btn-in-text") as HTMLButtonElement;
const textInfo = document.querySelector(".text-info") as HTMLDivElement;
const btn_copy = document.querySelector(".btn-copy") as HTMLButtonElement;

const matrizCode: [string, string][] = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];
btn.style.display = "none";
function encrypt(strEncrypt: string): string {
  //Convert strEncrypt to lowercases to easy comparison
  strEncrypt = strEncrypt.toLowerCase();
  //Iterate over the code matrix to replace the characters
  matrizCode.forEach(([charOriginal, charEncrypt]) => {
    strEncrypt = strEncrypt.replaceAll(charOriginal, charEncrypt);
  });
  return strEncrypt;
}

function decrypt(strDecrypt: string): string {
  //Convert strdecrypt to lowercases to easy comparison
  strDecrypt = strDecrypt.toLowerCase();
  //Iterate over the code matrix to replace the characters
  matrizCode.forEach(([charOriginal, charEncrypt]) => {
    strDecrypt = strDecrypt.replaceAll(charEncrypt, charOriginal);
  });
  return strDecrypt;
}
function btnEncrypt(): void {
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
function btnDecrypt(): void {
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

function btnCopy(): void {
  const textCopy = textSecond.value;
  navigator.clipboard.writeText(textCopy);
  textSecond.value = "";
  btn.style.display = "none";
  textInfo.style.display = "block";
  if (window.screen.width >= 1080) {
    textSecond.style.backgroundImage = "url(assets/pff.svg)";
  }
}
