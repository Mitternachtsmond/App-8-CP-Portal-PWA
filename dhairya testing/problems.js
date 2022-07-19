


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



const problemData = () => {
  let num = Math.floor(Math.random() * 7000)
  if(num<=20){
    num += 21
  }

  fetch('https://codeforces.com/api/problemset.problems')
  .then((res) => res.json())
  .then((data) => {
      console.log(`resulting link is "https://codeforces.com/problemset/problem/${data.result.problems[num].contestId}/${data.result.problems[num].index}"`);
      problemName.innerHTML = data.result.problems[num].name 
      rating.innerHTML = data.result.problems[num].rating
      tag.innerHTML = data.result.problems[num].tags[0]
      
  })
  .catch((error) => {
    console.log(error);
  } )
}
const relink = () =>{
  window.location.href = 'https://codeforces.com/problemset/problem/${data.result.problems[num].contestId}/${data.result.problems[num].index}';
}
problemData();

shuffleButton.addEventListener("click", problemData); 
redirect.addEventListener("click",relink);