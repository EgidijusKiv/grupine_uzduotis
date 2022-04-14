const registerForm = document.querySelector("form");
const API_URL = "http://ec2-18-184-55-200.eu-central-1.compute.amazonaws.com";
const inputName = document.getElementById("InputName");
const inputSurname = document.getElementById("InputSurname");
const inputEmail = document.getElementById("InputEmail");
const inputPass = document.getElementById("InputPassword");

const errorAlert = document.querySelector('.alert-danger');
const successAlert = document.querySelector('.alert-success');


registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = inputDataObject();
  formDataString = JSON.stringify(formData);
  register(formDataString);
  console.log(errorAlert.className);
});

function inputDataObject() {
  const formData = {
    name: inputName.value,
    surname: inputSurname.value,
    email: inputEmail.value,
    password: inputPass.value,
  };
  return formData;
}
async function register(param) {
  successAlert.className = 'alert alert-success d-none align-items-center p-2'
  errorAlert.className = 'alert alert-danger d-none align-items-center p-2'
  const responseObject = await fetch(API_URL + "/register", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: param,
  });
  console.log(responseObject);
  if (responseObject.ok) {
    successAlert.className = 'alert alert-success d-flex align-items-center p-2'
    inputName.value = '';
    inputSurname.value = '';
    inputEmail.value = '';
    inputPass.value = '';
  } else {
    errorAlert.className = 'alert alert-danger d-flex align-items-center p-2'
  }
}
