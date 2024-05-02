// Створи функцію createBoxes(amount), яка приймає один
// параметр - число.Функція створює стільки < div >,
// скільки вказано в amount і  додає їх у div#boxes.

// 1 Розміри найпершого <div> - 30px на 30px.

// 2 Кожен елемент після першого повинен бути ширшим
// і вищим від попереднього на 10px.

// 3 Всі елементи повинні мати випадковий колір фону
// у форматі HEX.Використовуй готову функцію getRandomHexColor
// для отримання кольору.

// const textInput = document.querySelector("input");
// console.log(textInput);
// textInput.classList.add("text-input");
// console.log(textInput.classList);

// const btnCreate = document.querySelector("button[data-create]");
// console.log(btnCreate);

// const btnDestroy = document.querySelector("button[data-destroy]");
// console.log(btnDestroy);

// const div = document.querySelector("#boxes");
// console.log(div);

// btnCreate.addEventListener("click", createBoxes);
// btnDestroy.addEventListener("click", destroyBoxes);

// textInput.addEventListener("input", handleInput);

// const amount = textInput.currentTarget.value;

// function createBoxes(amount) {
// let width = 30;
// let height = 30;
// }

// function getRandomHexColor() {
// return `#${Math.floor(Math.random() * 16777215)
// .toString(16)
// .padStart(6, 0)}`;
// }

// let a = 5;
// let b = a;

// console.log(a);
// console.log(b);

// a = 10;
// console.log(a);
// console.log(b);

// let a = "Bob";
// let b = a;

// console.log(a);
// console.log(b);

// a = "Bill";
// console.log(a);
// console.log(b);

// let a = "Bob";
// let b = 11;
// let c = 125;

// console.log(a + b + c);
// console.log(b);

// a = "Bill";
// console.log(a);
// console.log(b);

// const makeCounter = () => {
//   let currentCouter = 0;

//   const getCurrentCount = () => {
//     return currentCouter;
//   };

//   const incrementCount = () => {
//     currentCouter = currentCouter + 1;
//     return currentCouter;
//   };

//   const decrementCount = () => {
//     currentCouter = currentCouter - 1;
//     return currentCouter;
//   };

//   return { getCurrentCount, incrementCount, decrementCount };
// };

// const counter1 = makeCounter();
// const counter2 = makeCounter();

// console.log(counter1.incrementCount());
// console.log(counter1.getCurrentCount());
// console.log(counter1.decrementCount());
// console.log(counter1.getCurrentCount());
// console.log(counter1.decrementCount());
// console.log(counter1.getCurrentCount());

const animals = ["Cat", "Dog", "Cow", "Ship", "Shark"];
console.log(animals.pop());
console.log(animals);
console.log(animals.push("Horse"));
console.log(animals);
console.log(animals.shift());
console.log(animals);
console.log(animals.unshift("Deer", "Hamster"));
console.log(animals);
console.log(animals.reverse());
console.log(animals);
console.log(animals.splice(0, 3, "elephant", "squirrel"));
console.log(animals);
console.log(animals.includes("hamster"));
console.log(animals.includes("Dog"));
