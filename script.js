let succes_btn = document.querySelector('.Secces')
let error_btn = document.querySelector('.Error')
let invalid_btn = document.querySelector('.Invalid')
let toast_notification = document.querySelector('.toast_notification')


succes_btn.addEventListener('click',()=>{
    let succes_div = document.createElement('div');
    succes_div.classList.add('succes-div');
    let img =document.createElement('img')
    let para = document.createElement('p')
    para.textContent = "Succes"
    img.src = `./img/tickmark.png`
    succes_div.appendChild(img)
    succes_div.appendChild(para)
    toast_notification.appendChild(succes_div)
    setTimeout(() => {
        toast_notification.removeChild(succes_div)
    }, 10000);
})
error_btn.addEventListener('click',()=>{
    let error_div = document.createElement('div');
    error_div.classList.add('error-div');
    let img =document.createElement('img')
    let para = document.createElement('p')
    para.textContent = "Pease Fix The Error"
    img.src = `./img/cross-512.webp`
    error_div.appendChild(img)
    error_div.appendChild(para)
    toast_notification.appendChild(error_div)
    setTimeout(() => {
        toast_notification.removeChild(error_div)
    }, 10000);
})
invalid_btn.addEventListener('click',()=>{
    let invalid_div = document.createElement('div');
    invalid_div.classList.add('invalid-div');
    let img =document.createElement('img')
    let para = document.createElement('p')
    para.textContent = "Invalid Input Chek Again"
    img.src = `./img/387524_!_character_math_question_sign_icon.png`
    invalid_div.appendChild(img)
    invalid_div.appendChild(para)
    toast_notification.appendChild(invalid_div)
    setTimeout(() => {
        toast_notification.removeChild(invalid_div)
    }, 10000);
})