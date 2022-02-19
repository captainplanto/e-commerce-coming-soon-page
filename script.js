//input length < 12= error message
//input == @ = error message (input must be an email address)
//success message = Email was sent succesfully.
//Error message = Please enter correct email address.Email
const regEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
const form = document.querySelector("form");
const btn = document.querySelector("button");
const textInput = document.querySelector("input");
const errorMessage = document.querySelector("#error_message");
const successMessage = document.querySelector("#success_message");

const validateEmail = () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  btn.addEventListener("click", () => {
    if (textInput.value.match(regEx)) {
      successMessage.style.display = "block";
      textInput.value = "";
    } else {
      errorMessage.style.display = "block";
      textInput.value = "";
    }
  });

  form.addEventListener("keydown", () => {
    successMessage.style.display = "none";
    errorMessage.style.display = "none";
  });
};

validateEmail();
