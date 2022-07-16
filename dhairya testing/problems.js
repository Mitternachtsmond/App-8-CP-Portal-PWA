function myFunction() {
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