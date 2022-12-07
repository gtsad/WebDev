const email = document.getElementById("email");
const form = document.querySelector("form");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an e-mail address!");
    email.reportValidity();
  } else {
    email.setCustomValidity("");
  }
});

var psw = document.getElementById("psw");
var psw_repeat = document.getElementById("psw-repeat");

psw_repeat.addEventListener("input", (event) => {
  if (psw.value !== psw_repeat.value) {
    psw_repeat.setCustomValidity("Passwords don't match.");
    psw_repeat.reportValidity();
  } else {
    psw_repeat.setCustomValidity("");
  }
});

psw.addEventListener("input", (event) => {
  if (psw.value !== psw_repeat.value && psw_repeat.value !== "") {
    psw.setCustomValidity("Passwords don't match.");
    psw.reportValidity();
  } else {
    psw.setCustomValidity("");
  }
});

function myFunction() {
  // Get the checkbox
  var checkCard = document.getElementById("check_pay_card");
  var checkPaypal = document.getElementById("check_pay_paypal");
  // Get the output text
  var cardinfo = document.getElementById("card_info");
  var paypallogin = document.getElementById("paypal");

  var card_field = document.getElementById("card");

  // If the checkbox is checked, display the output text
  if (checkCard.checked == true) {
    cardinfo.style.display = "flex";
    card_field.setAttribute("required", "");
  } else {
    cardinfo.style.display = "none";
    card_field.removeAttribute("required");
  }

  if (checkPaypal.checked == true) {
    paypallogin.style.display = "flex";
  } else {
    paypallogin.style.display = "none";
  }
}

var birthdate_field = document.getElementById("birth");
birthdate_field.addEventListener("input", (event) => {
  var userinput = document.getElementById("birth").value;
  var dob = new Date(userinput);
  if (userinput == null || userinput == "") {
    birthdate_field.setCustomValidity("");
  } else {
    //calculate month difference from current date in time
    var month_diff = Date.now() - dob.getTime();

    //convert the calculated difference in date format
    var age_dt = new Date(month_diff);

    //extract year from date
    var year = age_dt.getUTCFullYear();

    //now calculate the age of the user
    var age = Math.abs(year - 1970);

    if (age < 18) {
      birthdate_field.setCustomValidity("You must be older than 18 years old.");
      birthdate_field.reportValidity();
    } else {
      birthdate_field.setCustomValidity("");
    }
  }
});
