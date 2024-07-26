const cards = document.querySelector(`.cards`);
const btn = document.querySelector(`#button`);
const hide = document.querySelector("#hide");

btn.addEventListener(`click`, (event) => {
  event.preventDefault();
  if (cards.innerHTML != ``) {
    hide.classList.toggle("hide");
  }
  createCard();
});

function createCard() {
  const card = document.createElement("div");

  const serviceName = document.createElement("h2");
  const serviceType = document.createElement("p");
  const price = document.createElement("p");
  const description = document.createElement("p");

  serviceName.textContent = document.querySelector("#name").value;
  serviceName.style.cssText = `font-size: large; padding: 25px 0;`;
  serviceType.innerHTML = `<span>serviceType:</span> ${
    document.querySelector("#type").value
  }`;
  price.innerHTML = `<span>price:</span> ${
    document.querySelector("#price").value
  }`;
  description.innerHTML = `<span>description:</span> ${
    document.querySelector("#desc").value
  }`;

  card.appendChild(serviceName);
  card.appendChild(serviceType);
  card.appendChild(price);
  card.appendChild(description);
  card.className = "card";

  cards.appendChild(card);
}
