const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.loginLink');
const registerLink = document.querySelector('.registerLink');
const btnLogin = document.querySelector('.btnLogin');
const iconClose = document.querySelector('.iconClose');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnLogin.addEventListener('click', ()=> {
    wrapper.classList.add('activePopUp');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('activePopUp');
});