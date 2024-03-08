const menuButton = document.querySelector(".hamburger-menu");

const expandedMenu = document.querySelector(".expanded-menu-icon");

const closeMenu = document.querySelector(".close-menu");

menuButton.addEventListener("click", function () {
  if (expandedMenu.style.display === "block") {
    expandedMenu.style.display = "none";
  } else {
    expandedMenu.style.display = "block";
  }
});
