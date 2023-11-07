const textInput = document.querySelector("#validation-input");
console.log(textInput);

const loseFocus = document.querySelector('input[data-length="6"]');
console.log(loseFocus.dataset.length);

textInput.addEventListener("blur", () => {
  const inputValue = textInput.value.trim().length;

  if (parseInt(loseFocus.dataset.length) === inputValue) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
});
