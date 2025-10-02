const Scrollup = document.querySelector
(".Scroll-up");

window.onscroll = () => {
    if (window.scrollY > 500) {
        Scrollup.classList.add
        ("Scroll-active")
    } else {
        Scrollup.classList.remove("Scroll-active")
    }
    
};