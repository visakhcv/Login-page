const wrapper=document.querySelector('.wrapper')
const loginlink=document.querySelector('.login-link')
const registerlink=document.querySelector('.register-link')
const btnpopup=document.querySelector('.btnLogin-popup')
const iconclose=document.querySelector('.close-icon')

registerlink.addEventListener('click',()=>{
    wrapper.classList.add('active')
})

loginlink.addEventListener('click',()=>{
    wrapper.classList.remove('active')
})

btnpopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup')
})

iconclose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup')
})


let menu=document.querySelector('#menu')
let nav=document.querySelector('.nav')
let wrap=document.querySelector('.wrapper')

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active')
}

wrap.onclick=()=>{
    menu.classList.remove('bx-x')
    nav.classList.remove('active')
}