const btn = document.querySelector(".change-color");
console.log(btn);

const body = document.querySelector("body");
console.log(body);

const colorSpan = document.querySelector(".color");
console.log(colorSpan);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btn.addEventListener("click", function () {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});
