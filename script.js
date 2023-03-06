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


// Event listener for the username
fullName.addEventListener("input", () => {
    // stores the value in username input in a variable
    const username = fullName.value;
    // Regex to make sure username takes alphabets only
    const usernamePattern = /^[A-Za-z\s]*$/;
    fullName.style.border = "2px solid #600594";
    // console.log(usernamePattern.test(username))

    // Error message display to alert user when they input a wrong format
    if (username.match(usernamePattern)) {
        errName.textContent = "";
    } else {
        errName.textContent = "Wrong Format, text only";
    }

    if (username == "" || username == null) {
        errName.textContent = ""
    }

    cardName.innerHTML = username;

})


number.addEventListener("input", () => {
    console.log("working");
})





