// TASK 1
const products = document.querySelector("#products");
const addBreadButton = document.querySelector("#addBread");
const addMilkButton = document.querySelector("#addMilk");
const clearListButton = document.querySelector("#clearList");

function createProduct(name) {
  const li = document.createElement("li");
  li.classList.add("product");
  li.textContent = name;

  const boughtButton = document.createElement("button");
  boughtButton.textContent = "Куплено";
  boughtButton.addEventListener("click", () => {
    li.classList.toggle("bought");
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Видалити";
  deleteButton.addEventListener("click", () => {
    li.remove();
  });

  li.append(boughtButton);
  li.append(deleteButton);
  products.append(li);
}

addBreadButton.addEventListener("click", () => {
  createProduct("Хлеб");
});

addMilkButton.addEventListener("click", () => {
  createProduct("Молоко");
});

clearListButton.addEventListener("click", () => {
  products.innerHTML = "";
});

// TASK 2
const notes = document.querySelector("#notes");
const createNoteButton = document.querySelector("#createNote");
const colors = ["white", "yellow", "lightblue"];

createNoteButton.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "Новая заметка";
  li.style.backgroundColor = colors[0];
  li.setAttribute("data-color-index", "0");

  const upButton = document.createElement("button");
  upButton.textContent = "🔼";
  upButton.addEventListener("click", (event) => {
    const li = event.target.parentEl;
    const prev = li.previousElementSibling;
    if (prev) {
      li.parentEl.insertBefore(li, prev);
    }
  });

  const downButton = document.createElement("button");
  downButton.textContent = "🔽";
  downButton.addEventListener("click", (event) => {
    const li = event.target.parentEl;
    const next = li.nextElementSibling;
    if (next) {
      li.parentEl.insertBefore(next, li);
    }
  });

  const colorButton = document.createElement("button");
  colorButton.textContent = "🎨";
  colorButton.addEventListener("click", () => {
    const li = event.target.parentElement;
    let index = parseInt(li.getAttribute("data-color-index"));
    index = (index + 1) % colors.length;
    li.style.backgroundColor = colors[index];
    li.setAttribute("data-color-index", index);
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "❌";
  deleteButton.addEventListener("click", () => {
    li.remove();
  });

  li.append(upButton);
  li.append(downButton);
  li.append(colorButton);
  li.append(deleteButton);

  notes.append(li);
});
