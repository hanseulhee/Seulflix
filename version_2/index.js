const form = document.querySelector(".form");
const name = document.querySelector(".name");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const password2 = document.querySelector(".password2");




form.addEventListener("submit", function (e) {
  e.preventDefault();
  inputpassword(password);
  inputname();
  inputemail(email);
  inputpassword2(password, password2);
});

// function movieHome(){

//   location.href = "main.html";
// }


const setDefault = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control";
};

const inputpassword2 = () => {
  const input1 = password.value;
  const input2 = password2.value;
  if (password2.value.length === 0) {
    errormessage(password2, `Password2 is required`);
  } else if (input1 === input2) {
    success(password2);
  } else {
    errormessage(password2, `Passwords do not match`);
  }
};

const inputpassword = () => {
  if (password.value.length >= 6) {
    success(password);
  } else {
    errormessage(password, `Password must be at least 6 characters`);
  }
};

const inputemail = () => {
  const rule = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (rule.test(email.value.trim())) {
    success(email);
  } else {
    errormessage(email, `Email is not valid`);
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
  email.addEventListener("input", inputemail);
  password.addEventListener("input", inputpassword);
  password2.addEventListener("input", inputpassword2);

}

init();
