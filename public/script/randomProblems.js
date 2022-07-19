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
printData();
}
mainfunction();

shuffleButton.addEventListener("click", printData); 
redirect.addEventListener("click",relink);