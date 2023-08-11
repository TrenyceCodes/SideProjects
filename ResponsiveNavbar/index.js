let navigationLinks = document.querySelector(".navigation-links");
let menuIcon = document.querySelector(".menu-icon");

// Toggle Navigation Menu on Click of the hamburger icon
// and close it when clicked again
function toggleNavigationMenu() {
    navigationLinks.classList.toggle("active")
}

menuIcon.addEventListener("click", toggleNavigationMenu);