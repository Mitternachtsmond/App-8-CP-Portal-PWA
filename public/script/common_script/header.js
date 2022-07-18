let btn=document.querySelector('.leftExpand');

btn.addEventListener('click',()=>
{
    console.log("clicked");
    let content=document.querySelector('.expandContent');
    let current=content.style.display;
    if(current=="inherit")
    content.style.display = "none";
    else
    content.style.display = "inherit";
})