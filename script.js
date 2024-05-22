const products = {
  data: [
    {
      pid: "jacket",
      name: "jacket green",
      price: "10$",
      image: "./1.jpg",
    },
    {
      pid: "jacket",
      name: "jacket white",
      price: "20$",
      image: "./2.jpg",
    },
    {
      pid: "t-shirts",
      name: "t-shirts black",
      price: "30$",
      image: "./3.jpg",
    },
    {
      pid: "t-shirts",
      name: "t-shirts white",
      price: "40$",
      image: "./4.jpg",
    },
    {
      pid: "jeans",
      name: "jeans light",
      price: "50$",
      image: "./5.jpg",
    },
    {
      pid: "jeans",
      name: "jeans white",
      price: "60$",
      image: "./6.jpg",
    },
    {
      pid: "watches",
      name: "watch black",
      price: "70$",
      image: "./7.jpg",
    },
    {
      pid: "watches",
      name: "watch white",
      price: "80$",
      image: "./8.jpg",
    },
  ],
};

//Вывод товара на страницу

const init = () => {
  renderAllProduct();
  setupListener();
};

function setupListener() {
  document.body.addEventListener("click", handleBodyClick);
  document
    .querySelector(".search-input")
    .addEventListener("input", searchProducts);
}

function handleBodyClick(e) {
  if (e.target.classList.contains("filter-btn")) {
    filterProducts(e.target);
  }
}

//Поиск товара
const searchProducts = () => {
  const inputSearchValue = document
    .querySelector(".search-input")
    .value.trim()
    .toLowerCase();

  filterItems((item) =>
    item.querySelector(".item-title").textContent.includes(inputSearchValue)
  );
};

//Фильтр товара

const filterProducts = (target) => {
  const id = target.id;
  const inputValue = document.querySelector(".search-input");

  filterItems((item) => id === "all" || item.dataset.id === id);
  setActiveFilter(target);
  inputValue.value = "";
};

function filterItems(filterConditons) {
  const items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.classList.toggle("hide", !filterConditons(item));
  });
}

//Добавляем активный класс кнопке
function setActiveFilter(activeBtn) {
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  activeBtn.classList.add("active");
}

const renderAllProduct = () => {
  products.data.forEach(renderProduct);
};

const renderProduct = (product) => {
  const parent = document.querySelector(".items-block");
  const template = `
	<div class="item" data-id="${product.pid}">
        <div class="item-img">
        	<img src="${product.image}" alt="${product.name}" />
        </div>
        <div class="item-content">
            <h2 class="item-title">${product.name}</h2>
            <div class="item-price">${product.price}</div>
        </div>

        <button type="button">Добавить</button>
    </div>
	`;
  parent.insertAdjacentHTML("beforeend", template);
};

//инициализация приложения
init();
