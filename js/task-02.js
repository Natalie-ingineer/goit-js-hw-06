const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elementLiPotatoes = document.createElement("li");
elementLiPotatoes.textContent = "Potatoes";
elementLiPotatoes.classList.add("item");
console.log(elementLiPotatoes);

const elementLiMushrooms = document.createElement("li");
elementLiMushrooms.textContent = "Mushrooms";
elementLiMushrooms.classList.add("item");
console.log(elementLiMushrooms);

const elementLiGarlic = document.createElement("li");
elementLiGarlic.textContent = "Garlic";
elementLiGarlic.classList.add("item");
console.log(elementLiGarlic);

const elementLiTomatos = document.createElement("li");
elementLiTomatos.textContent = "Tomatos";
elementLiTomatos.classList.add("item");
console.log(elementLiTomatos);

const elementLiHerbs = document.createElement("li");
elementLiHerbs.textContent = "Herbs";
elementLiHerbs.classList.add("item");
console.log(elementLiHerbs);

const elementLiCondiments = document.createElement("li");
elementLiCondiments.textContent = "Condiments";
elementLiCondiments.classList.add("item");
console.log(elementLiCondiments);

const list = document.querySelector("#ingredients");
console.log(list);

list.append(elementLiPotatoes, elementLiMushrooms, elementLiGarlic, elementLiTomatos, elementLiHerbs, elementLiCondiments);
