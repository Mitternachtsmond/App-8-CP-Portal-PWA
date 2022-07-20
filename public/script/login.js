const username = document.querySelector('.username').value
const password = document.querySelector('.password').value
let signupButton=document.querySelector(".signupContainer");
let submitButton=document.querySelector(".submitContainer");

const submit = () =>{
    if (username && password){
        
    }
    else{
        console.log('username or password is empty')
    }
}


const signup=()=>
{
    document.location.href="/signup";
}
signupButton.addEventListener("click",signup);
signupButton.addEventListener("click",submit);

