const loginForm = document.getElementById("login__form");
const registrForm = document.getElementById("registr__form");
const submitForm = document.querySelector(".submit");
const inpSign = document.getElementById("inputs__sign");
const inpRegistr = document.getElementById("inputs__registr");
const inputLogin = document.getElementById("input__login");

function cl() {
  console.log(`click on ${this}`);
}

loginForm.addEventListener("click", loginToggle);
registrForm.addEventListener("click", registrToggle);
submitForm.addEventListener("click", cl);

function loginToggle() {
  if (registrForm.className == "button active") {
    registrForm.classList.remove("active");
    loginForm.classList.add("active");
    inpRegistr.style.display = "none";
    inpSign.style.display = "flex";
  } else {
    console.log("error, already login-Active");
  }
}

function registrToggle() {
  if (loginForm.className == "button active") {
    loginForm.classList.remove("active");
    registrForm.classList.add("active");
    inpSign.style.display = "none";
    inpRegistr.style.display = "flex";
  } else {
    console.log("error, already registr-Active");
  }
}

const testB = document.getElementById("test");
testB.addEventListener("click", testCl);
function testCl() {
  console.log(inputLogin.value);
}

const myForm = document.querySelector("#inputs__registr");

myForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    const response = await fetch(event.target.action, {
      method: "POST",
      body: new URLSearchParams(new FormData(event.target)),
    });

    console.log("headers:", response.headers);

    const body = await response.json();

    console.log("body:", body);
  } catch (error) {
    console.error("Error has occured on form submit", error);
  }
});
