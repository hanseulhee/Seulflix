const form = document.querySelector(".form");
const name = document.querySelector(".name");
const password = document.querySelector(".password");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  inputpassword(password);
  inputname();
});



const inputpassword = () => {
  if (password.value.length >= 6) {
    success(password);
  } else {
    errormessage(password, `Password must be at least 6 characters`);
  }
};

const inputname = () => {
  if (name.value.length === 0) {
    errormessage(name, `Your username must be at least 3 characters`);
  } else if (name.value.length >= 3) {
    success(name);
  } else {
    errormessage(name, `Your username must be at least ${3} characters`);
  }
};

const success = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

const errormessage = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
};

function init() {
  name.addEventListener("input", inputname);
  password.addEventListener("input", inputpassword);
}

init();
