var products = [
  { productId: 1, productName: "Товар 1", categoryId: 1 },
  { productId: 2, productName: "Товар 2", categoryId: 2 },
  { productId: 3, productName: "Товар 3", categoryId: 3 },
  { productId: 4, productName: "Товар 4", categoryId: 4 },
  { productId: 5, productName: "Товар 5", categoryId: 5 },
  { productId: 6, productName: "Товар 6", categoryId: 1 },
  { productId: 7, productName: "Товар 7", categoryId: 2 },
  { productId: 8, productName: "Товар 8", categoryId: 3 },
  { productId: 9, productName: "Товар 9", categoryId: 4 },
  { productId: 10, productName: "Товар 10", categoryId: 5 },
  { productId: 11, productName: "Товар 11", categoryId: 1 },
  { productId: 12, productName: "Товар 12", categoryId: 2 },
  { productId: 13, productName: "Товар 13", categoryId: 3 },
  { productId: 14, productName: "Товар 14", categoryId: 4 },
  { productId: 15, productName: "Товар 15", categoryId: 5 },
  { productId: 16, productName: "Товар 16", categoryId: 1 },
  { productId: 17, productName: "Товар 17", categoryId: 2 },
  { productId: 18, productName: "Товар 18", categoryId: 3 },
  { productId: 19, productName: "Товар 19", categoryId: 4 },
  { productId: 20, productName: "Товар 20", categoryId: 5 },
  { productId: 21, productName: "Товар 21", categoryId: 1 },
  { productId: 22, productName: "Товар 22", categoryId: 2 },
  { productId: 23, productName: "Товар 23", categoryId: 3 },
  { productId: 24, productName: "Товар 24", categoryId: 4 },
  { productId: 25, productName: "Товар 25", categoryId: 5 },
];
var categories = [
  { categoryId: 1, categoryName: "Футболки" },
  { categoryId: 2, categoryName: "Майки" },
  { categoryId: 3, categoryName: "Носки" },
  { categoryId: 4, categoryName: "Джинсы" },
  { categoryId: 5, categoryName: "Брюки" },
];

var categoriesCount = categories.length;
var tabs = document.querySelector(".tabs");
var content = document.querySelector(".content");
var tabsArray = [];
var activeTab = 0;

var createProducts = () => {
  var cards = "";
  products.forEach((product) => {
    if (product.categoryId === activeTab + 1) {
      cards += createProduct(product.productName);
    }
  });

  content.innerHTML = cards;
};

var createTab = (number) => {
  var tab = document.createElement("li");
  tab.classList.add("tabs__item");
  if (number === activeTab) {
    tab.classList.add("tabs__item--active");
  }

  tab.addEventListener("click", () => {
    tab.classList.add("tabs__item--active");
    tabsArray[activeTab].classList.remove("tabs__item--active");
    activeTab = number;
    createProducts();
  });

  return tab;
};

var createProduct = (title) => {
  return `
  <li class="content__item">
    <img src="img/tovar.jpg" alt="Image: ${title}" class="content__image"/>
    <h2>${title}</h2>  
  </li>
  `;
};

(function () {
  for (var i = 0; i < categoriesCount; i++) {
    var tab = createTab(i);
    tabsArray.push(tab);
    tab.innerText = categories[i].categoryName;
    tabs.insertAdjacentElement("beforeend", tab);
  }

  createProducts();
})();
