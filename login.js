const loginForm = document.querySelector("form");
const API_URL = "http://ec2-18-184-55-200.eu-central-1.compute.amazonaws.com";
const inputEmail = document.getElementById("InputEmail");
const inputPass = document.getElementById("InputPassword");
//Host: http://ec2-18-184-55-200.eu-central-1.compute.amazonaws.com
const errorAlert = document.querySelector('.alert-danger');
const successAlert = document.querySelector('.alert-success');

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = inputDataObject();
    formDataString = JSON.stringify(formData);
    login(formDataString);
  });

  function inputDataObject() {
    const formData = {
      name: inputEmail.value,
      password: inputPass.value,
    };
    return formData;
  }

  async function login(param) {
    successAlert.className = 'alert alert-success d-none align-items-center p-2'
    errorAlert.className = 'alert alert-danger d-none align-items-center p-2'
   
    const responseObject = await fetch(API_URL + "/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: param,
    });
    console.log(responseObject);
    if (responseObject.ok) { 
      successAlert.className = 'alert alert-success d-flex align-items-center p-2'
      inputEmail.value = '';
      inputPass.value = '';
      document.querySelector('.card').style.backgroundColor = 'rgb(187, 247, 187)';
      const relocate = () => location.assign('skelbimai.html');
      setTimeout(relocate, 3000);
    } else {
      errorAlert.className = 'alert alert-danger d-flex align-items-center p-2'
      document.querySelector('.card').style.backgroundColor = 'rgb(243, 197, 197)';
    }
  }
// "Bearer 85|OTjpejYD1KjIHZFcWyjfv5iibtOXXK8WcdKjJvi0"