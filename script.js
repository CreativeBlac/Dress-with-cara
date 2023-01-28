const mobileEl = document.querySelector(".mobile-menu");
const navBar = document.getElementById("nav-bar");
const closeBar = document.getElementById("close");
if (mobileEl) {
    mobileEl.addEventListener("click", () => {
        navBar.classList.add("active")
    })

}
if (closeBar) {
    closeBar.addEventListener("click", () => {
        navBar.classList.remove("active")
    })
}