const form = document.querySelector("form");
const eField = form.querySelector(".email");
const eInput = eField.querySelector("input");
const pField = form.querySelector(".password");
const pInput = pField.querySelector("input");

form.onsubmit = (e) => {
  e.preventDefault();

  // Check email and password
  eInput.value == "" ? eField.classList.add("shake", "error") : checkEmail();
  pInput.value == "" ? pField.classList.add("shake", "error") : checkPass();

  setTimeout(() => {
    eField.classList.remove("shake");
    pField.classList.remove("shake");
  }, 500);

  eInput.onkeyup = () => {
    checkEmail();
  };

  pInput.onkeyup = () => {
    checkPass();
  };

  function checkEmail() {
    //checkEmail function
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern for validate email
    if (!eInput.value.match(pattern)) {
      //if pattern not matched then add error and remove valid class
      eField.classList.add("error");
      eField.classList.remove("valid");
      let errorTxt = eField.querySelector(".error-txt");
      //if email value is not empty then show please enter valid email else show Email can't be blank
      eInput.value != ""
        ? (errorTxt.innerText = "Enter a valid email address")
        : (errorTxt.innerText = "Email can't be blank");
      eField.querySelector(".valid-icon").style.display = "none"; // hide valid icon
    } else {
      //if pattern matched then remove error and add valid class
      eField.classList.remove("error");
      eField.classList.add("valid");
      eField.querySelector(".valid-icon").style.display = "block"; // show valid icon
    }
  }

  function checkPass() {
    //checkPass function
    if (pInput.value.length < 8) {
      //minimum length requirement set to 8
      //if pass is too short then add error and remove valid class
      pField.classList.add("error");
      pField.classList.remove("valid");
      let errorTxt = pField.querySelector(".error-txt");
      errorTxt.innerText = "Password must be at least 8 characters long";
      pField.querySelector(".valid-icon").style.display = "none"; // hide valid icon
    } else {
      //if pass is long enough then remove error and add valid class
      pField.classList.remove("error");
      pField.classList.add("valid");
      pField.querySelector(".valid-icon").style.display = "block"; // show valid icon
    }
  }

  if (
    !eField.classList.contains("error") &&
    !pField.classList.contains("error")
  ) {
    // Redirect to welcome page if email and password are valid
    window.location.href = "welcome.html";
  }
};
