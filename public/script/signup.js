const login=()=>
{
    document.location.href="/login";
    console.log("hello i am");
}
let loginButton=document.querySelector(".signupContainer");
loginButton.addEventListener("click",login);
console.log("working");