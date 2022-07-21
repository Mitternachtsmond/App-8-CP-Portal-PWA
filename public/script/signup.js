let submission = document.querySelector('.submission')
let submitButton = document.querySelector('.submitContainer')
let loginbtn=document.querySelector(".signupContainer");

const submit = () =>{
    submission.click();
}
const login2=()=>
{
    document.location.href="/login";
    console.log(`button has been clicked `);
}
loginbtn.addEventListener("click",login2);
submitButton.addEventListener('click',submit);

