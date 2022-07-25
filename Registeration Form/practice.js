const user=document.getElementById('username')
const pass=document.getElementById('password')
const confirmpass=document.getElementById('confirmPassword')
user.insertAdjacentHTML("beforebegin",`<label for="username">Username:</label>`)
pass.insertAdjacentHTML("beforebegin",`<label for="password">Password:</label>`)
confirmpass.insertAdjacentHTML("beforebegin",`<label for="confirmpass">Confirm Password:</label>`)

function checkinput(check){
    const errorelem=Array.from(check.target.parentNode.querySelectorAll('span'));
    if (!errorelem.length && check.target.value=="") {
        check.target.insertAdjacentHTML("afterend",`<span class="text-danger">Required</span>`)
    }
    if (errorelem.length && check.target.value!="") {
        errorelem.forEach(element=>element.remove())
    }
};

user.addEventListener('blur',checkinput)
pass.addEventListener('blur',checkinput)
confirmpass.addEventListener('blur',checkinput)

function passcheck(check){
    if (check.target.value!=pass.value) {
        check.target.insertAdjacentHTML("afterend",`<span class="text-danger">Pass Not Match</span>`)
    }
}
confirmpass.addEventListener('blur',passcheck)


const button=document.querySelector('button')
button.setAttribute('disabled','disabled') //setAttribute(name of attribute,name to assign)
function enable(){
    const formfilled=Array.from(document.querySelectorAll('input')).every(input=>input.value)
    if (formfilled && pass.value==confirmpass.value) {
        button.removeAttribute('disabled')
    }
    else{
        button.setAttribute('disabled','disabled')
    }
}
const form=document.getElementById('registrationForm')
form.addEventListener('change',enable)

function submit(event){
    event.preventDefault();     //because the form from bootstrap has a default behaviour
    const alert =document.createElement('div')
    alert.classList.add('alert','alert-success')//boostrap classes add in alert
    alert.innerText='Your form was submitted'
    form.prepend(alert);            //form.prepend will send the alert div to the first child of the form
    user.setAttribute('disabled','disabled')
    pass.setAttribute('disabled','disabled')
    confirmpass.setAttribute('disabled','disabled')
    button.setAttribute('disabled','disabled')
}
form.addEventListener('submit',submit)