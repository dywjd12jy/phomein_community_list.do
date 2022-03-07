$(function(){
    //1019이상 nav 호버시 슬라이드 이벤트
    var Header_DT = $('#desktop.header')
    var Nav = $('#desktop nav')
    
    Nav.on("mouseover",function(){
        Header_DT.addClass('active');
    }); 
    Nav.on("mouseout",function(){
        Header_DT.removeClass('active');
    });
});
