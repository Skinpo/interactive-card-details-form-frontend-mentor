const fullName = document.querySelector(".name");
const number = document.querySelector(".number");
const month = document.querySelector(".mm");
const year = document.querySelector(".yy");
const cvcDigit = document.querySelector(".cvc-digit");
const errName = document.querySelector(".error-name");
const errInput = document.querySelector(".error-input");
const errExp = document.querySelector(".error-exp");
const errMonth = document.querySelector(".error-mon");
const errCvc = document.querySelector(".error-cvc");
const cardName = document.querySelector(".name-on-card");
const monthFormat = document.querySelector(".mo");
const yearFormat = document.querySelector(".yr");
const numOnCard = document.querySelector(".number-on-card");
const cvcCard = document.querySelector(".cvc-number");
const btnConfirm = document.querySelector(".confirm");
const btnContinue = document.querySelector(".btn-continue");
const form =  document.querySelector(".form");
const thankYou = document.querySelector(".complete-state");



cvcDigit.addEventListener("keyup", () => {
    cvcDigit.style.border = "2px solid #600594";
    errCvc.textContent = "" 
    cvcCard.innerHTML = cvcDigit.value;
});

year.addEventListener("keyup", () => {
    year.style.border = "2px solid #600594";
    errExp.textContent = "" 
    yearFormat.innerHTML = year.value;
});

month.addEventListener("keyup", () => {
    month.style.border = "2px solid #600594";
    errMonth.textContent = "" 
    monthFormat.innerHTML = month.value;
});

number.addEventListener("keyup", () => {
    number.style.border = "2px solid #600594";
    errInput.textContent = ""
    numOnCard.innerHTML = number.value.match(/.{1,4}/g).join(" ");
});

fullName.addEventListener("keyup", () => {
    fullName.style.border = "2px solid #600594";
    cardName.innerHTML = fullName.value;
    errName.textContent = "";
});



const handleSubmit = function() {

    if (fullName.value.match(/^[A-Za-z\s]*$/)) {
        fullName.style.border = "2px solid #600594";
        cardName.innerHTML = fullName.value;
        errName.textContent = "";
    } else {
        fullName.style.border = "2px solid #ff5252";
        errName.textContent = "Wrong Format, letters only";
        cardName.innerHTML = "JANE APPLESEED";
    }

    if (fullName.value === "" || fullName.value === null) {
        fullName.style.border = "2px solid #ff5252";
        errName.textContent = "cannot be blank";
        cardName.innerHTML = "JANE APPLESEED";
    }
    
    

    if (number.value.match(/^[0-9]{16}$/)) {
        number.style.border = "2px solid #600594";
        errInput.textContent = ""
        numOnCard.innerHTML = number.value.match(/.{1,4}/g).join(" ");
    } else if (number.value === "" || number.value === null) {
        number.style.border = "2px solid #ff5252";
        errInput.textContent = "cannot be blank"
        numOnCard.innerHTML = "0000 0000 0000 0000";
    } else {
        number.style.border = "2px solid #ff5252";
        errInput.textContent = "Wrong Format";
    }

    if (month.value.match(/^[0-9]{2}$/)) {
        month.style.border = "2px solid #600594";
        errMonth.textContent = "" 
        monthFormat.innerHTML = month.value;
    } else if (month.value === "" || month.value === null) {
        month.style.border = "2px solid #ff5252";
        errMonth.textContent = "Can't be blank";
        monthFormat.innerHTML = "00"
    } else {
        errMonth.textContent = "";
        month.style.border = "2px solid #ff5252"; 
        monthFormat.innerHTML = "00"
    }

    if (year.value.match(/^[0-9]{2}$/)) {
        year.style.border = "2px solid #600594";
        errExp.textContent = "" 
        yearFormat.innerHTML = year.value;
    } else if (year.value == "" || year.value == null) {
        year.style.border = "2px solid #ff5252";
        errExp.textContent = "Can't be blank";
        yearFormat.innerHTML = "00"
    } else {
        year.style.border = "2px solid #ff5252";
        errExp.textContent = "";
        yearFormat.innerHTML = "00"
    }

    if (cvcDigit.value.match(/^[0-9]{3}$/)) {
        cvcDigit.style.border = "2px solid #600594";
        errCvc.textContent = "" 
        cvcCard.innerHTML = cvcDigit.value;
    } else if (cvcDigit.value == "" || cvcDigit.value == null) {
        cvcDigit.style.border = "2px solid #ff5252";
        errCvc.textContent = "Can't be blank";
        cvcCard.innerHTML = "000"
    } else {
        errCvc.textContent = "";
        cvcDigit.style.border = "2px solid #ff5252"; 
        cvcCard.innerHTML = "000" 
    }

    if (fullName.value.match(/^[A-Za-z\s]*$/)
        && fullName.value !== ""
        && number.value.match(/^[0-9]{16}$/)
        && month.value.match(/^[0-9]{2}$/)
        && year.value.match(/^[0-9]{2}$/)
        && cvcDigit.value.match(/^[0-9]{3}$/)) 
        {
        return true
    }
    
}


btnConfirm.addEventListener("click", (e) => {
    e.preventDefault();
    
    if (handleSubmit()) {
        form.style.visibility = "hidden";
        thankYou.style.visibility = "visible";
    } else {
        handleSubmit();
    }
});

btnContinue.addEventListener("click", () => {
    form.style.visibility = "visible";
    thankYou.style.visibility = "hidden";
    fullName.value = "";
    number.value = "";
    month.value = "";
    year.value = "";
    cvcDigit.value = "";
    cardName.innerHTML = "JANE APPLESEED";
    numOnCard.innerHTML = "0000 0000 0000 0000";
    monthFormat.innerHTML = "00";
    yearFormat.innerHTML = "00";
    cvcCard.innerHTML = "000";
    fullName.style.border = "1px solid #dedddf";
    number.style.border = "1px solid #dedddf";
    month.style.border = "1px solid #dedddf";
    year.style.border = "1px solid #dedddf";
    cvcDigit.style.border = "1px solid #dedddf";
})