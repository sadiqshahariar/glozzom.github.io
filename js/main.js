$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>=200)
        {
            $("nav").addClass("scroll");
        }
        else {
            $("nav").removeClass("scroll");
        }
    })
    $("nav .navbar-nav .nav-item .nav-link").click(function(){
        $("nav .navbar-nav .nav-item .nav-link").removeClass("active");
        $(this).addClass("active");
    })
})