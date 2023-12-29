const loginForm = document.querySelector(".login-form");

const validateInput = (inputObj) => {
  const username = inputObj.username.trim(); 
  const password = inputObj.password.trim();

  if (username === "CSRMU" && password === "CS01") {
    window.location.href = "https://www.example.com";
  } else {
    markInputAsInvalid("username");
    markInputAsInvalid("password");
  }
};

const markInputAsInvalid = (inputId) => {
  const inputElement = document.getElementById(inputId);
  inputElement.style.borderColor = "red";
};

const hdlLogin = (e) => {
  e.preventDefault();
  let inputObj = {};
  for (let el of loginForm.elements) {
    inputObj[el.id] = el.value;
  }
  validateInput(inputObj);
};

loginForm.addEventListener("submit", hdlLogin);
