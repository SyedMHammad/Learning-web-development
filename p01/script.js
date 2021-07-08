const form=document.getElementById("form");
const email=document.getElementById("email");
const username=document.getElementById("username");
const password=document.getElementById("Password");
const password2=document.getElementById("Confirm Password");
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
function isValid(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function getFieldId(input)
{
   return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}
function check(inputArray){
    inputArray.forEach(function(input)
    {
        if(input.value ==='')
        {
            showfailure(input,`${getFieldId(input)} cannot be empty`);
        }
        else
        {
            showsuccess(input);
        }
    });
}
function checkLength(input,min,max)
{
    if(input.value.length < min)
    {
        showfailure(input,`${getFieldId(input)} length should be between ${min} and ${max}`);
    }
    else if(input.value.length > max)
    {
        showfailure(input,`${getFieldId(input)} should be between ${min} and ${max}`);
    }
    else
    {
        showsuccess(input);
    }
}
function checkEmail(input)
{
    if(!isValid(input.value))
    {
        showfailure(input,"Email is invalid");
    }
    else{
        showsuccess(input);
    }
}
function checkpassword(input1,input2)
{
    if(input1.value===input2.value)
    {
        showsuccess(input2);    
    }
    else
    {
        showfailure(input2,"Passwords did not match");
    }
}
form.addEventListener('submit',function(e){
    e.preventDefault();
    check([username,email,password,password2]);
    checkEmail(email);
    checkpassword(password,password2);
    checkLength(username,3,10);
    checkLength(password,6,30);
})