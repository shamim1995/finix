

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
        
    }
});




  //bottom to top
  
  // fadeIn fadeOut
  $(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
    $('.scrollup').fadeIn();
    } else {
    $('.scrollup').fadeOut();
    }
    });
    
    //bottom to top
  
    $('.scrollup').click(function (){
      $("html,body").animate({
      scrollTop: 0
      }, 1000);
      return false;
      });
    
    
  $(document).ready(function(){
    
   
      $(window).on('scroll',function(){
  
  var scroll= $(window).scrollTop();
  
  if(scroll>80){
    $(".nav").addClass('scroll-header');
    
  }else{
    $(".nav").removeClass('scroll-header');
  }
  
    });
    
  });
  