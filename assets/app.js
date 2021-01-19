let navtoggle = document.querySelector('.nav-toggle');
let nav = document.querySelector('.nav');

let toggleMenu = function () {
    nav.classList.toggle("nav-open");
}

navtoggle.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleMenu();
})

document.addEventListener('click', function (e) {
    const target = e.target;
    let its_nav = target == nav || nav.contains(target);
    let its_navtoggle = target == navtoggle;
    let nav_is_active = nav.classList.contains('nav-open');
    
    if (!its_nav && !its_navtoggle && nav_is_active) {
        toggleMenu();
    }
});

