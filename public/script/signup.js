let submission = document.querySelector('.submission')
let submitButton = document.querySelector('.submitContainer')
let loginButton=document.querySelector(".signupContainer");
let checker = 1;

const submit = () =>{
    submission.click();
}
const login=()=>
{
    document.location.href="/login";
    console.log(`button has been clicked `);
}
loginButton.addEventListener("click",login);
submitButton.addEventListener('click',submit);
