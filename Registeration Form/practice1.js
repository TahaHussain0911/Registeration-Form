const user=document.querySelector('#username')
const pass=document.querySelector('#password')
const confirmpass=document.querySelector('#confirmPassword')
user.insertAdjacentHTML("beforebegin",`<label>Username:</label>`)
pass.insertAdjacentHTML("beforebegin",`<label>Password:</label>`)
confirmpass.insertAdjacentHTML("beforebegin",`<label>Confirm Password:</label>`)

function checkInput(event){
    const errorelement=Array.from(event.target.parentNode.querySelectorAll('span'))
    if (!errorelement.length && event.target.value=="") {
       event.target.insertAdjacentHTML("afterend",`<span class="text-danger" >Required</span>`) 
    }
    if (errorelement.length && event.target.value!="") {
        errorelement.forEach(elme=>elme.remove())
    }
}
user.addEventListener('blur',checkInput)
pass.addEventListener('blur',checkInput)
confirmpass.addEventListener('blur',checkInput)

function checkPass(event){
    if (event.target.value!=pass.value) {
        event.target.insertAdjacentHTML('afterend',`<span class="text-danger" >Pass Not Match | </span>`)
    }
}
confirmpass.addEventListener('blur',checkPass)

const button=document.querySelector(".btn")
button.setAttribute("disabled","disabled")
function enable(event){
    const checkinput=Array.from(document.querySelectorAll('input')).every(check=>check.value!="")
    if (checkinput && pass.value==confirmpass.value) {
        button.removeAttribute("disabled");
    }
    else{
        button.setAttribute("disabled","disabled")
    }
}
const form=document.querySelector('#registrationForm')
form.addEventListener("change",enable)

function submitted(event){
    event.preventDefault();
    const createdelement=document.createElement('div')
    createdelement.innerHTML="Your Form has been submitted";
    createdelement.classList.add('alert','alert-success');
    // form.insertAdjacentHTML("beforebegin",createdelement)
    form.prepend(createdelement)

    user.setAttribute("disabled","disabled")
    pass.setAttribute("disabled","disabled")
    confirmpass.setAttribute("disabled","disabled")
    button.setAttribute("disabled","disabled")    
}
form.addEventListener('submit',submitted)