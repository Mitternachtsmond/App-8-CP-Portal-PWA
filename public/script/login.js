const username = document.querySelector('.username').value
const password = document.querySelector('.password').value
let signupButton=document.querySelector(".signupContainer");
let submitButton=document.querySelector(".submitContainer");
const signup=()=>
{
    document.location.href="/signup";
}
signupButton.addEventListener("click",signup);

