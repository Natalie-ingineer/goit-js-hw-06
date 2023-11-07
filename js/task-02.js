const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
console.log(list);

ingredients.forEach((product) => {
  const liItem = document.createElement("li");
  liItem.textContent = `${product}`;
  liItem.classList.add("item");
  list.append(liItem);
});
