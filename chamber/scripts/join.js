import { levels } from "./levels";

const non = document.querySelector("non-btn");
const bronze = document.querySelector("#bronze-btn");
const silver = document.querySelector("#silver-btn");
const gold = document.querySelector("#gold-btn");
const dialog = document.querySelector("#dialog-box");
const name = document.querySelector("#name");
const close = document.querySelector("#close-btn");
const price = document.querySelector("#price");
const benefits = document.querySelector("#benefits");

non.addEventListener("click", showDialog("non"));
bronze.addEventListener("click", (e) => {
//   e.preventDefault();
  showDialog("bronze");
});
silver.addEventListener("click", showDialog("silver"));
gold.addEventListener("click", showDialog("gold"));
close.addEventListener("click", dialog.close());

function showDialog(level) {
  if (level.toLowerCase() == "non") {
    name.innerHTML = `${levels[0].name}`;
    price.innerHTML = `${levels[0].price}`;

    let list = levels[0].benefits;
    list.forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = `${item}`;
      benefits.appendChild(li);
    });
  } else if (level.toLowerCase() == "bronze") {
    name.innerHTML = `${levels[1].name}`;
    price.innerHTML = `${levels[1].price}`;

    let list = levels[1].benefits;
    list.forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = `${item}`;
      benefits.appendChild(li);
    });
  } else if (level.toLowerCase() == "silver") {
    name.innerHTML = `${levels[2].name}`;
    price.innerHTML = `${levels[2].price}`;

    let list = levels[2].benefits;
    list.forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = `${item}`;
      benefits.appendChild(li);
    });
  } else if (level.toLowerCase() == "gold") {
    name.innerHTML = `${levels[3].name}`;
    price.innerHTML = `${levels[3].price}`;

    let list = levels[3].benefits;
    list.forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = `${item}`;
      benefits.appendChild(li);
    });
  }

  dialog.showModal();
}
