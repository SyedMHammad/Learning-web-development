const form=document.getElementById("form");
const email=document.getElementById("email");
const username=document.getElementById("username");
const password=document.getElementById("Password");
const password2=document.getElementById("Password2");
function showfailure(input,message)
{
    const formcontrol=input.parentElement;
    formcontrol.className='form-control failure';
    const mes=formcontrol.querySelector("small");
    mes.innerText=message;
}
function showsuccess(input)
{
    const formcontrol=input.parentElement;
    formcontrol.className='form-control success';
}
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
form.addEventListener('submit',function(e){
    e.preventDefault();
    if(username.value === ''){
        showfailure(username,'Username cannot be empty');
    }
    else
    {
        showsuccess(username);
    }
    if(email.value === ''){
        showfailure(email,'Email cannot be empty');
    }
    else if(validateEmail(email))
    {
        showfailure(email,'Enter valid email');
    }
    else
    {
        showsuccess(email);
    }

    if(password.value === ''){
        showfailure(password,'Password cannot be empty');
    }
    else
    {
        showsuccess(password);
    }
    if(password2.value === ''){
        showfailure(password2,'Passwords did not match');
    }
    else if(password2.value != password.value)
    {
        showfailure(password2,'Passwords did not match');
    }
    else
    {
        showsuccess(password2);
    }
    
    
    
})