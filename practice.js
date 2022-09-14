const user = document.getElementById('username');
const pass = document.getElementById('password');
const confirmpass = document.getElementById('confirmPassword');
user.insertAdjacentHTML("beforebegin", `<label>Username:</label>`)
pass.insertAdjacentHTML("beforebegin", `<label>Password:</label>`)
confirmpass.insertAdjacentHTML("beforebegin", `<label>Confirm Password:</label>`)

Array.from(document.querySelectorAll('input')).forEach(element=>element.addEventListener('blur',(event)=>{
    let errorElem = Array.from(event.target.parentNode.querySelectorAll('span   '));
    if (!errorElem.length&&event.target.value=="") {
        event.target.insertAdjacentHTML("afterend",`<span    class="text-danger">Required</span    >`)
    }
    if(errorElem.length && event.target.value!=""){
        errorElem.forEach(element=>element.remove())
    }
}))


function checkpassword(event){
    if (event.target.value!=pass.value  && event.target.value!="") {
        event.target.insertAdjacentHTML("afterend",`<span class="text-danger">Pass Not Match</span>`)
    }
}
confirmpass.addEventListener('blur',checkpassword)
const register=document.querySelector('.btn');
register.setAttribute("disabled","disabled");
function ifInput(event){
    const inputs=Array.from(document.querySelectorAll('input')).every(input=>input.value!="");
    if (inputs && confirmpass.value==pass.value) {
        register.removeAttribute("disabled");
    }
    else{
        register.setAttribute("disabled","disabled")
    }
}
const form=document.querySelector('#registrationForm');
form.addEventListener('change',ifInput);

function message(event){
    event.preventDefault();
    let text=document.createElement('div');
    text.innerText="Your Form has been submitted";
    text.classList.add('alert','alert-success')
    form.prepend(text);
    user.setAttribute("disabled","disabled");
    pass.setAttribute("disabled","disabled");
    confirmpass.setAttribute("disabled","disabled");
    register.setAttribute("disabled","disabled");
}
form.addEventListener('submit',message)