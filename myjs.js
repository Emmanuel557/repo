const btn = document.querySelector(".hamicon .btn");
let nav = document.querySelector('.navwrapper');
const close = document.querySelector('.blehhh');
const but = document.querySelector('.button3');

btn.onclick=()=>{
    btn.style.display = 'none';
    nav.style.display = 'block';
    but.style.display = 'block';
}
close.onclick=()=>{
    btn.style.display = 'block';
    nav.style.display = 'none';
    but.style.display = 'none';
}
