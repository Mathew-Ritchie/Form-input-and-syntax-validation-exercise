function validateName() {
  let input = document.getElementById("nameInput").value;

  let pattern = /^[a-z]{2,}( [a-z]+)*?( [a-z]{2,}){1,}$/i;

  if (pattern.test(input)) {
    document.getElementById("nameResult").innerText = "";
  } else {
    document.getElementById("nameResult").innerText = "Invalid Name";
  }
}

function validateEmail() {
  let input = document.getElementById("emailInput").value;

  let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (pattern.test(input)) {
    document.getElementById("emailResult").innerText = "";
  } else {
    document.getElementById("emailResult").innerText = "Invalid Email";
  }
}

function validatePhone() {
  let input = document.getElementById("phoneInput").value;

  let pattern = /^([0-9]{10})$/;

  if (pattern.test(input)) {
    document.getElementById("phoneResult").innerText = "";
  } else {
    document.getElementById("phoneResult").innerText = "Invalid Number";
  }
}

function validateAge() {
  let input = document.getElementById("ageInput").value;

  let pattern = /^([0-9])/;

  if (pattern.test(input)) {
    document.getElementById("ageResult").innerText = "";
  } else {
    document.getElementById("ageResult").innerText = "Invalid Age";
  }
}
