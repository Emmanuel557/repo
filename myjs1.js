const btn1 = document.querySelector(".hamicon .btn1");
let nav = document.querySelector(".navwrapper");
const close = document.querySelector(".blehhh");

btn1.onclick = () => {
  btn1.style.display = "none";
  nav.style.display = "block";
};
close.onclick = () => {
  btn1.style.display = "block";
  nav.style.display = "none";
};

function validate() {

  const firstname = document.myForm.firstname.value;
  const lastname = document.myForm.lastname.value;
  const email = document.myForm.email.value;
  const password = document.myForm.password.value;

  const firstname_err = document.querySelector('.name-err');
  const lastname_err = document.querySelector('.lastname-err');
  const email_err = document.querySelector('.email-err');
  const password_err = document.querySelector('.password-err');

  const errors = {
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  };

  if (firstname == '') errors.firstname = 'This field cannot be empty';
  if (lastname == '') errors.lastname = 'This field cannot be empty';
  if (email == '') errors.email = 'This field cannot be empty';
  if (password == '') errors.password = 'This field cannot be empty';

  if(password.lenght < 8) {
    errors.password = 'The minimum is 8 characters';
  }

  if (!email.includes("@") || !email.includes(".com")) {
    errors.email = 'This email is invalid';
  }

  firstname_err.innerHTML = errors.firstname;
  lastname_err.innerHTML = errors.lastname;
  email_err.innerHTML = errors.email;
  password_err.innerHTML = errors.password;

  if(errors.firstname || errors.lastname){
    return false;
  }else if(errors.email || errors.password){
    return false;
  }

  // return false;

  // alert(errors.firstname, errors.lastname, errors.email, email.password);
}
