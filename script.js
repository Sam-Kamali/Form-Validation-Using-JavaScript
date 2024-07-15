var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");
//add function that validates input box
function validateName() {
  var name = document.getElementById("contact-name").value;
  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }
  if (!name.match(/^[AA-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write full name";
    return false;
  } else {
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"</i>';
    return true;
  }
}
function validateNumber() {
  var phone = document.getElementById("contact-number").value;
  if (phone.length == 0) {
    phoneError.innerHTML = "Phone number is required";
    return false;
  }
  if (phone.length !== 10) {
    phoneError.innerHTML = "Must be 10 digits long";
    return false;
  }

  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "only digits";
    return false;
  } else {
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"</i>';
    return true;
  }
}
function validateEmail() {
  var email = document.getElementById("contact-email").value;
  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }
  //   if (!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
  //     emailError.innerHTML = "Invalid email";
  //     return false;
  //   }
  emailError.innerHTML = '<i class="fa-solid fa-circle-check"</i>';
  return true;
}
function validateMessage() {
  var message = document.getElementById("contact-message").value;
  var required = 30;
  var left = required - message.length;

  if (left > 0) {
    messageError.innerHTML = left + " more characters required";
    return false;
  }
  messageError.innerHTML = '<i class="fa-solid fa-circle-check"</i>';
}
function validateForm() {
  if (
    !validateName() ||
    !validateNumber() ||
    !validateEmail() ||
    !validateMessage()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please fix error to submit!";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
}
