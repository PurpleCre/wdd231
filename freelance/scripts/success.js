const greet = document.querySelector(`#greet`);

greet.innerHTML = `Welcome Back ${localStorage.getItem("name")}`;
