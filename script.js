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
const monthFormat = document.querySelector(".mo");
const yearFormat = document.querySelector(".yr");
const numOnCard = document.querySelector(".number-on-card");
const cvcCard = document.querySelector(".cvc-number");
const btnConfirm = document.querySelector(".confirm");


let holdersNamefun = function () {

    fullName.addEventListener("input", () => {
        // stores the value in username input in a variable
         const username = fullName.value;

        // Regex to make sure username takes alphabets only
        const usernamePattern = /^[A-Za-z\s]*$/;
        
        // Error message display to alert user when they input a wrong format
        if (username.match(usernamePattern)) {
            fullName.style.border = "2px solid #600594";
            cardName.innerHTML = username;
            errName.textContent = "";
        } else {
            fullName.style.border = "2px solid #ff5252";
            errName.textContent = "Wrong Format, letters only";
        }
        
        if (username === "" || username === null) {
            fullName.style.border = "1px solid #dedddf";
            errName.textContent = "";
            cardName.innerHTML = "JANE APPLESEED";
        }
        
    })
};

let numInputfun = function () {

    number.addEventListener("input", () => {
        const userNumber = number.value;
        const pattern2 = /^\d+$/g;

        if (userNumber.match(pattern2)) {
            number.style.border = "2px solid #600594";
            errInput.textContent = ""
            numOnCard.innerHTML = userNumber.match(/.{1,4}/g).join(" ");
        } else {
            number.style.border = "2px solid #ff5252";
            errInput.textContent = "Wrong Format, numbers only";
        }

        if (userNumber === "" || userNumber === null) {
            number.style.border = "1px solid #dedddf";
            errInput.textContent = ""
            numOnCard.innerHTML = "0000 0000 0000 0000";
        }
    })

};

let dateFormatfun = function () {

    month.addEventListener("input", () => {
        const pattern3 = /^[0-9]{2}$/;

        if (month.value.match(pattern3)) {
            month.style.border = "2px solid #600594";
            errExp.textContent = "" 
            monthFormat.innerHTML = month.value;
        } else {
            errExp.textContent = "";
            month.style.border = "2px solid #ff5252"; 
            monthFormat.innerHTML = "00" 
        }

        if (month.value == "" || month.value == null) {
            month.style.border = "2px solid #ff5252";
            errExp.textContent = "Can't be blank";
            monthFormat.innerHTML = "00"
        }

    })


    year.addEventListener("input", () => {
        const pattern4 = /^[0-9]{2}$/;

        if (year.value.match(pattern4)) {
            year.style.border = "2px solid #600594";
            errExp.textContent = "" 
            yearFormat.innerHTML = year.value;
        } else {
            year.style.border = "2px solid #ff5252";
            errExp.textContent = ""; 
            yearFormat.innerHTML = "00" 
        }

        if (year.value == "" || year.value == null) {
            year.style.border = "2px solid #ff5252";
            errExp.textContent = "Can't be blank";
            yearFormat.innerHTML = "00"
        }

    })

};

let cvcfun = function () {
    cvcDigit.addEventListener("input", () => {
        const pattern4 = /^[0-9]{3}$/;

        if (cvcDigit.value.match(pattern4)) {
            cvcDigit.style.border = "2px solid #600594";
            errCvc.textContent = "" 
            cvcCard.innerHTML = cvcDigit.value;
        } else {
            errCvc.textContent = "";
            cvcDigit.style.border = "2px solid #ff5252"; 
            cvcCard.innerHTML = "000" 
        }

        if (cvcDigit.value == "" || cvcDigit.value == null) {
            cvcDigit.style.border = "2px solid #ff5252";
            errCvc.textContent = "Can't be blank";
            cvcCard.innerHTML = "000"
        }
    })
};

    holdersNamefun();
    numInputfun();
    dateFormatfun();
    cvcfun();

    let allfun = [holdersNamefun, numInputfun, dateFormatfun, cvcfun]


btnConfirm.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("do");
    
    // holdersNamefun();
    // numInputfun();
    // dateFormatfun();
    // cvcfun();

    // const thankYou = document.querySelector(".complete-state");
    // const form = document.querySelector(".form");
    // form.style.visibility = "hidden"
    // thankYou.style.visibility = "visible";

    if (allfun === true) {
        console.log("true");
    } else {
        console.log("false");
    }
        
        // const thankYou = document.querySelector(".complete-state");
        // const form = document.querySelector(".form");
        // holdersNamefun();
        // numInputfun();
        // dateFormatfun();
        // cvcfun();
        // form.style.visibility = "hidden"
        // thankYou.style.visibility = "visible";
    
})







