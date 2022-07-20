const login=()=>
{
    document.location.href="/login";
    console.log("hello i am");
}
let loginBtn=document.querySelector(".signupContainer");
loginBtn.addEventListener("click",login);
console.log("working");

