console.log("This is form validation project");

let username = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let deliverBtn = document.getElementById("deliverBtn");
let usernameValid = false;
let emailValid = false;
let phoneValid = false;
$('#failure').hide();
$('#success').hide();

username.addEventListener("blur", () => {
  // console.log("You leave username");
  let regex = /^([a-zA-Z])([0-9a-zA_Z]){2,10}$/;
  let str = username.value;
//   console.log(str, regex);
  if (regex.test(str)) {
    // console.log("Name valid");
    username.classList.remove("is-invalid");
    usernameValid = true;
  } else {
    // console.log("Name not valid");
    username.classList.add("is-invalid");
    usernameValid = false;
  }
});

email.addEventListener("blur", () => {
  // console.log("You leave email");
  let regex = /^([a-zA-Z0-9\_\.\-]+)@([a-zA-Z0-9\_\.\-]+)\.([a-zA-Z]{2,6})$/;
  let str = email.value;
//   console.log(str, regex);
  if (regex.test(str)) {
    // console.log("email address valid");
    email.classList.remove("is-invalid");
    emailValid = true;
  } else {
    // console.log("email address not valid");
    email.classList.add("is-invalid");
    emailValid = false;
  }
});

phone.addEventListener("blur", () => {
  // console.log("You leave phone");
  let regex = /^([0-9]){11}$/;
  let str = phone.value;
//   console.log(str, regex);
  if (regex.test(str)) {
    // console.log("phone number valid");
    phone.classList.remove("is-invalid");
    phoneValid = true;
  } else {
    // console.log("phone number not valid");
    phone.classList.add("is-invalid");
    phoneValid = false;
  }
});

deliverBtn.addEventListener('click', (e) => {
console.log("Your click deliver button");
console.log(usernameValid, emailValid, phoneValid);
e.preventDefault();

if(usernameValid && emailValid && phoneValid){
    let success = document.getElementById('success');
    success.classList.add('show');
    $('#failure').hide();
        $('#success').show();

}else {
    let failure = document.getElementById('failure');
    failure.classList.add('show');
    $('#success').hide();
        $('#failure').show();
}
})

