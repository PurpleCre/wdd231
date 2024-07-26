const userName = document.querySelector("#name");
const btn = document.querySelector("#button");

// localStorage.clear();
btn.addEventListener("click", () => {
    localStorage.setItem(`name`, `${userName.value}`);
});
