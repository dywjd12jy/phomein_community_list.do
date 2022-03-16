

window.onload = function() {
    let subMenu_1 = document.querySelector(".submenu_1");
    let subMenu_2 = document.querySelector(".submenu_2");

    subMenu_1.addEventListener('click', function() {
        subMenu_1.classList.toggle('active');
    });
    subMenu_2.addEventListener('click', function() {
        subMenu_2.classList.toggle('active');
    });
}
