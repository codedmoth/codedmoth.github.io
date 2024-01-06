function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function copy(text) {
  navigator.clipboard.writeText(text);
}

async function copyButton(copyText, id, text) {
  var elem = document.getElementById(id);
  copy(copyText)
  elem.textContent = "Copied.."
  await sleep(1500)
  elem.textContent = text 
}
