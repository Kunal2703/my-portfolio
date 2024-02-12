$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["a Student", "a Developer", "a Cloud Enthusiast", "an Explorer", "a DevOps Enthusiast", "a realistic sketcher", "a Photographer", "a Traveller", "a Friend"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 30,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000, // Note the correction from autoplayTimeOut to autoplayTimeout
        autoplayHoverPause: true,
        items: 1, // Ensures only one item is displayed at a time
        nav: false, // Assuming you want navigation arrows disabled for all screen sizes
        responsive: {
            0:{
                items: 1 // This is technically redundant given the global items setting above, but it's here for clarity.
            },
            600:{
                items: 1
            },
            1000:{
                items: 1
            }
        }
    });
});