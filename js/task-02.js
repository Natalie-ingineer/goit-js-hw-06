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

const makeProducts = (products) => {
  return products.map((product) => {
    const liItem = document.createElement("li");
    liItem.textContent = `${product}`;
    liItem.classList.add("item");

    return liItem;
  });
};

const elements = makeProducts(ingredients);

list.append(...elements);
console.log(elements);
