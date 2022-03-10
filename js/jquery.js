// $(function(){
//     //1019이상 nav 호버시 슬라이드 이벤트
//     var Header_DT = $('#desktop.header')
//     var Nav = $('#desktop nav')
    
//     Nav.on("mouseover",function(){
//         Header_DT.addClass('active');
//     }); 
//     Nav.on("mouseout",function(){
//         Header_DT.removeClass('active');
//     });
// });

var location = document.querySelector('.location_sub_menu');
var active = document.querySelector('.active');

// function myFunc() {
//     var para = document.getElementById("p");
//     para.classList.toggle("paragraphClass");
// }
location.addEventListener('mouseenter', function(){
    this.classList.remove('active');
    this.classList.add('active');
})
// container.addEventListener('mouseleave', function(){
//     this.classList.add('first');
//     this.classList.remove('second');
// })
//     location.addEventListener('click', function() {
//         // console.log("active됌");
//     if(location.classList.contains(active)){
//         location.classList.remove(active);
//     } else {
//         location.classList.add(active);
//     }
// });
// (function(){} location.addEventListener('click', function() {
//     console.log("active됌");
// //     location.classList.toggle('active');
// });