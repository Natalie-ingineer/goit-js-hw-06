const btnDecrement = document.querySelector('button[data-action="decrement"]');
console.log(btnDecrement.dataset.action);

const btnIncrement = document.querySelector('button[data-action="increment"]');
console.log(btnIncrement.dataset.action);

const value = document.querySelector("#value");
console.log(value);

let counterValue = 0;

const handleClickIncrement = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

btnIncrement.addEventListener("click", handleClickIncrement);

const handleClickDecrement = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};

btnDecrement.addEventListener("click", handleClickDecrement);
