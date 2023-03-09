// Header Dropdown Code Start------------------------------------
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

const menuButton = document.querySelector(".menu");
const closeButton = document.querySelector(".close");
const navbar = document.getElementsByClassName("navbar")[0];
const navbarLinkList = document.getElementsByClassName("nav-links-list")[0];

console.log(menuButton);
window.addEventListener("resize", function () {
  if (window.innerWidth > 800) {
    // navbar.classList.remove("mobile-navbar");
    navbar.classList.remove("navbar-mobile-styling");
    closeButton.classList.remove("show");
    menuButton.classList.remove("hide");
  }
});
menuButton.addEventListener("click", function () {
  console.log("menubtn");
  // navbar.classList.add("mobile-navbar");
  // navbarLinkList.add("mobile-navbar");
  navbar.classList.add("navbar-mobile-styling");
  menuButton.classList.add("hide");
  closeButton.classList.remove("hide");
  closeButton.classList.add("show");
  // menuButton.style.display = "none";
  // closeButton.style.display = "block";
});
closeButton.addEventListener("click", function () {
  console.log("closebtn");
  closeButton.classList.remove("show");
  // navbar.classList.remove("mobile-navbar");
  navbar.classList.remove("navbar-mobile-styling");
  // navbarLinkList.remove("mobile-navbar");
  menuButton.classList.remove("hide");
  // menuButton.style.display = "block";
  // closeButton.style.display = "none";
});

// Header Dropdown code End----------------------------------------------------------
