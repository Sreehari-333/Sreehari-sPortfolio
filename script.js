const sideMenu = document.querySelector("#sideMenu");
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");


function openMenu() {
    sideMenu.style.transform = "translate(-16rem)";
}

function closeMenu() {
    sideMenu.style.transform = "translate(16rem)";
}


//  NavBar

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        // Add classes to navbar
        navBar.classList.add('backdrop-blur-md', 'bg-white/70', 'shadow-sm');
        // Remove classes from navLinks (if needed)
        navLinks.classList.remove('bg-white', 'shadow-sm');
    } else {
        // Remove classes from navbar
        navBar.classList.remove('backdrop-blur-md', 'bg-white/70', 'shadow-sm');
        // Add classes to navLinks (if needed)
        navLinks.classList.add('bg-white', 'shadow-sm');
    }
});