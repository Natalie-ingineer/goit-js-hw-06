const btnDecrement = document.querySelector('button[data-action="decrement"]');
console.log(btnDecrement.dataset.action);

const btnIncrement = document.querySelector('button[data-action="increment"]');
console.log(btnIncrement.dataset.action);

let counterValue = 0;

const handleClickIncrement = () => {
  counterValue += 1;
  console.log("Button was increment");
};

btnIncrement.addEventListener("click", handleClickIncrement);

const handleClickDecrement = () => {
  counterValue -= 1;
  console.log("Button was decrement");
};

btnDecrement.addEventListener("click", handleClickDecrement);
