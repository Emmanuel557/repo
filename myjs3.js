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

function validate(){
    const username = document.Formme.name.value;
    const email = document.Formme.email.value;
    const phone = document.Formme.phone.value;

    const name_err = document.querySelector('.name-err');
    const email_err = document.querySelector('.email-err');
    const phone_err = document.querySelector('.phone-err');

    const errs={
        username: '',
        email: '',
        phone: ''
    };

    if(username == '') errs.username = 'field cannot be empty';
    // if(email == '') errs.email = 'field cannot be empty';
    if(phone == '') errs.phone = 'field cannot be empty';

    if (email == '') {
      errs.email = 'This field cannot be empty';
    } else if (!email.includes('@') || !email.includes('.com')) {
      errs.email = 'Invalid email address';
    }

    if(phone.length > 14){
        errs.phone = 'invalid input';
    }else if(isNaN(phone)){
      errs.phone = 'must include numbers only';
    }
      

    // if(isNaN(phone)){
    //   phone_err = 'must include numbers only';
    // }

    name_err.innerHTML = errs.username;
    email_err.innerHTML = errs.email;
    phone_err.innerHTML = errs.phone;

    if(errs.name || errs.email){
      return false;
    }else if(errs.phone){
      return false;
    }

    // return false;
}