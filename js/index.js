

window.onload = function() {

    // location_menu
    let subMenu_1 = document.querySelector(".submenu_1");
    let subMenu_2 = document.querySelector(".submenu_2");

    // 더보기 버튼
    let moreClick = document.querySelector(".tab_menu .more_click");
    let moreBtn = document.querySelector(".more_btn button");

    // top 버튼
    let topBtn = document.querySelector(".top_btn");


    // location_menu
    subMenu_1.addEventListener('click', function() {
        subMenu_1.classList.toggle('active');
    });
    subMenu_2.addEventListener('click', function() {
        subMenu_2.classList.toggle('active');
    });

    // 더보기 버튼
    moreBtn.addEventListener('click', function() {
        moreClick.classList.toggle('active');
    });

    // top 버튼
    topBtn.addEventListener('click', function(e){
        e.preventDefault();
        window.scrollTo({ top:0, behavior: 'smooth'});
    })
}
