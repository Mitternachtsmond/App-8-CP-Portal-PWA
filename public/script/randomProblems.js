
function showMenu() {
  document.getElementById("myMenu").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.menuButton')) {
    var dropdowns = document.getElementsByClassName("menuContent");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 

// i dont quite understand this code rn but i will soon after seeing the js projects
// here's the link for it https://www.w3schools.com/howto/howto_js_dropdown.asp

const problemName = document.querySelector('.problemName')
const rating = document.querySelector('.rating')
const tag = document.querySelector('.tags')
const siteName = document.querySelector('.siteName')
const shuffleButton = document.querySelector('.shuffleContainer')
const redirect = document.querySelector('.problemHolder')
siteName.innerHTML = "CodeForces"
let contestId,index;

let arrayOfData=[];
const problemData = async () => {
    let res=await fetch('https://codeforces.com/api/problemset.problems')
    let data=await res.json();
    let len=data.result.problems.length;
    console.log(len);
    for(let i=0;i<len;i++)
    {
      if (data.result.problems[i].rating){
      let obj={
        contestId:data.result.problems[i].contestId,
        index:data.result.problems[i].index,
        name:data.result.problems[i].name,
        rating:data.result.problems[i].rating,
        tag:data.result.problems[i].tags[0]
      };
      arrayOfData.push(obj);
      }
    }
    console.log("done");
}


const printData=()=>
{
    let num = Math.floor(Math.random() * arrayOfData.length);
    problemName.innerHTML = arrayOfData[num].name; 
    rating.innerHTML = arrayOfData[num].rating; 
    tag.innerHTML = arrayOfData[num].tag; 
    contestId=arrayOfData[num].contestId; 
    index=arrayOfData[num].index; 
}
const relink = () =>{
  window.location.href = `https://codeforces.com/problemset/problem/${contestId}/${index}`;
}
const mainfunction=async()=>
{
await problemData();
console.log("here");
printData();
}
mainfunction();

shuffleButton.addEventListener("click", printData); 
redirect.addEventListener("click",relink);