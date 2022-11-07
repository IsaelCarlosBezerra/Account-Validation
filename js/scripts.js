//Seleção de elementos

const form = document.querySelector("#form");
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const password1 = document.querySelector("#password1");
const password2 = document.querySelector("#password2");

//Funcoes

function checkInputsVazios() {
  const inputs = document.querySelectorAll("input");
  let password1;

  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      errorValidation(input, "Campo obrigatório");
    } else {
      successValidation(input);
    }
    if (input.type === "password") {
      minValPassword(input);
    }
    confPassword();
  });
}

function errorValidation(input, menssage) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = menssage;
  formControl.classList.remove("success");
  formControl.classList.add("error");
}

function successValidation(input) {
  const formControl = input.parentElement;
  formControl.classList.remove("error");
  formControl.classList.add("success");
}

function minValPassword(password) {
  if (password.value.trim().length < 8) {
    errorValidation(password, "A senha deve ter ao menos 8 caracteres!");
  } else {
    successValidation(password);
  }
}

function confPassword() {
  if (password1.value != password2.value) {
    errorValidation(password2, "Senhas desiguais!");
  }
}

//Eventos

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputsVazios();
});
