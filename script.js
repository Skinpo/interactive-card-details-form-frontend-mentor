const fullName = document.querySelector(".name");
const number = document.querySelector(".number");
const month = document.querySelector(".mm");
const year = document.querySelector(".yy");
const cvcDigit = document.querySelector(".cvc-digit");
const errName = document.querySelector(".error-name");
const errInput = document.querySelector(".error-input");
const errExp = document.querySelector(".error-exp");
const errCvc = document.querySelector(".error-cvc");
const cardName = document.querySelector(".name-on-card");
const dateFormat = document.querySelector(".date-format");



fullName.addEventListener("input", () => {
    const username = fullName.value;
    const usernamePattern = /^[a-zA-Z]{0,32}$/;
    fullName.style.border = "2px solid #600594";
    console.log(usernamePattern.test(username))

    if (!usernamePattern.test(username)) {
        errName.textContent = "Wrong Format, text only";
    } else {
        errName.textContent = "";
    }

    cardName.innerHTML = username;

})






