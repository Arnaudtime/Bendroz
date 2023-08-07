function myFunction() {
    var x = document.getElementById("page-navigation");
    if (x.className === "topnav") {
      x.className += " open";
    } else {
      x.className = "topnav";
    }
  }

function toggleNav() {
  document.body.classList.toggle("nav-open");
}