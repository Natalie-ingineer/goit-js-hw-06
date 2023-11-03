

const list = document.querySelectorAll("li.item");
console.dir(`Number of categories: ${list.length}`);

 const categoriesList = document.querySelectorAll("#categories .item");
 
categoriesList.forEach((item) => {
    const title = item.querySelector("h2").textContent;
    const elementsLi = item.querySelectorAll("li").length;

    console.dir(`Category: ${title}`);
    console.log(`Elements: ${elementsLi}`);
});

