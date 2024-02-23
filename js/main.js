const navopt = document.getElementById("nav-btn"),
    menu = document.querySelector(".nav .nav__menu");

navopt.addEventListener("click", () => {
    if (menu.classList.contains("open")) {
        menu.classList.remove("open");
    } else {
        menu.classList.add("open");
    }
})