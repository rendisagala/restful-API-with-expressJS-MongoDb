const register = document.querySelector(".registerButton");
const subtitle = document.querySelector(".subtitle");

function registered() {
  subtitle.textContent = "You are registered, please login back!";
}

// show password

function showPassword() {
  const password = document.querySelectorAll("#password");
  const showPass = document.querySelector("#showPass");
  for (let i = 0; i < password.length; i++) {
    showPass.classList.toggle("bg-danger");
    if (password[i].type === "password") {
      password[i].type = "text";
    } else {
      password[i].type = "password";
    }
  }
}

// confirm password

function confirmPassword() {
  const passwordText = document.querySelector("#password").value;
  const confirmpassword = document.querySelector("#confirmpassword").value;
  const doesntmatch = document.querySelector("#doesntmatch");
  const morecharacter = document.querySelector("#morecharacter");
  if (passwordText.length < 8) {
    morecharacter.classList.toggle("d-none");
  }

  if (passwordText != confirmpassword) {
    doesntmatch.classList.toggle("d-none");
    return false;
  } else {
    return true;
  }
}

function characterPassword() {}
