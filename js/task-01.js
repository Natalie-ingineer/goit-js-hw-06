console.log(document);

const body = document.body;
console.log(body);

const list = document.querySelectorAll("li.item");
console.dir(`Number of categories: ${list.length}`);

// const title = document.querySelector("h2");
// console.log(title.textContent);

const numberCatogories = list.forEach(function (h2, index) {
    console.log(`Category: ${h2.textContent}`);
    console.log(`Elements: ${index.length}`);
});




// numbers.forEach(function (number, index) {
//     console.log(`Індекс ${index}, значення ${number}`);
//   });

// ul#categories