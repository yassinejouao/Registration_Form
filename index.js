//Verify password confirmation
var check = function () {
  if (
    document.getElementById("passwordText").value ==
    document.getElementById("passwordConfirmationText").value
  ) {
    document.getElementById("message").style.color = "green";
    document.getElementById("message").innerHTML = "matching";
    document
      .getElementById("passwordConfirmationText")
      .classList.add("border-green");
    document
      .getElementById("passwordConfirmationText")
      .classList.remove("border-red");
  } else {
    document.getElementById("message").style.color = "red";
    document.getElementById("message").innerHTML = "not matching";
    document
      .getElementById("passwordConfirmationText")
      .classList.add("border-red");
    document
      .getElementById("passwordConfirmationText")
      .classList.remove("border-green");
    return false;
  }
};
//Verify password if is correct
var checkregex = function () {
  let pattern = /^(?=.*\W)[a-zA-Z0-9\S]{10,}$/g;
  if (pattern.test(document.getElementById("passwordText").value)) {
    document.getElementById("passwordText").classList.add("border-green");
    document.getElementById("passwordText").classList.remove("border-red");
  } else {
    document.getElementById("passwordText").classList.add("border-red");
    document.getElementById("passwordText").classList.remove("border-green");
  }
};

//pour afficher et cacher le mot de passe
const passwordshowhide = document.getElementById("passwordShowHide");
const passwordtext = document.getElementById("passwordText");
passwordshowhide.onclick = () => {
  if (passwordshowhide.firstChild.classList.contains("fa-eye")) {
    passwordshowhide.firstChild.classList.remove("fa-eye");
    passwordshowhide.firstChild.classList.add("fa-eye-slash");
    passwordtext.type = "password";
  } else {
    passwordshowhide.firstChild.classList.remove("fa-eye-slash");
    passwordshowhide.firstChild.classList.add("fa-eye");
    passwordtext.type = "text";
  }
};
const passwordConfirmationShowHide = document.getElementById(
  "passwordConfirmationShowHide"
);
const passwordConfirmationText = document.getElementById(
  "passwordConfirmationText"
);
passwordConfirmationShowHide.onclick = () => {
  if (passwordConfirmationShowHide.firstChild.classList.contains("fa-eye")) {
    passwordConfirmationShowHide.firstChild.classList.remove("fa-eye");
    passwordConfirmationShowHide.firstChild.classList.add("fa-eye-slash");
    passwordConfirmationText.type = "password";
  } else {
    passwordConfirmationShowHide.firstChild.classList.remove("fa-eye-slash");
    passwordConfirmationShowHide.firstChild.classList.add("fa-eye");
    passwordConfirmationText.type = "text";
  }
};
