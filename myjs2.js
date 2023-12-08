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


const submit = document.querySelector('.submit');

submit.onclick = () => {
    const email = document.myForm.email.value;
    const password = document.myForm.password.value;
    const email_err = document.querySelector('.Email-err');
    const password_err = document.querySelector('.Password-err');

    // console.log(email)
    // console.log(password);

    let err = {
        email: '',
        password: ''
    };

    if (email == '') {
        err.email = 'This field cannot be empty';
    } else if (!email.includes('@') || !email.includes('.com')) {
        err.email = 'Invalid email address';
    }

    if (password == '') {
        err.password = 'This field cannot be empty';
    } else if (password.length < 8) {
        err.password = 'Minimum character is 8';
    }

    email_err.innerHTML = err.email;
    password_err.innerHTML = err.password;

    // return false;

    if (err.email || err.password) {
        return false; // Prevent form submission if there are errors
    }
};
