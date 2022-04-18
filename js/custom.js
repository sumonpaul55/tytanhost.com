
$(document).ready(function(){
    //sticky header
    $('.header').waypoint(function(direction){
       if(direction == 'down'){
        $('nav').addClass('sticky');
       }else{
           $('nav').removeClass('sticky');
       }
    });


    // for filter button
    $('.filter-btn').click(function(){
    $(this).addClass('active-btn').siblings().removeClass('active-btn');
    });
    var mixer = mixitup('.filter-container');//custom code for active filter plugin
    //wol-carousel
  $(".owl-carousel").owlCarousel({
    margin: 10,
    loop: true,
    center: true,
    touchDrag: true,
    nav: true,
    center: true,
    lazyLoad: true,
    responsiveRefreshRate: true,
    responsiveClass: true,
    fluidSpeed: 2000,
    autoplay: true,
    smartSpeed: 1500,
    responsive: {
        0:{
            items: 1
        },
        768:{
            items: 2
        },
        1100:{
            items: 3
        }
    }
  });
});