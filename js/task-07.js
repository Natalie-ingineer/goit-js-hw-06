const textInput = document.querySelector("#font-size-control");
console.log(textInput);

const spanText = document.querySelector("#text");
console.log(spanText);

textInput.addEventListener("input", handleInput);

function handleInput(event) {
  const textInputValue = event.currentTarget.value;
  console.log(textInputValue);

  let fontSize = "0px";

  const spanTextValue = 16 + (textInputValue / 100) * 80;
  console.log(spanTextValue);

  spanText.style.fontSize = spanTextValue + fontSize;
  console.log(spanText);
}
