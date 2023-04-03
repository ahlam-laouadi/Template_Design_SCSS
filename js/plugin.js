$(function(){    
  'use strict';
  
  var wh = $(window).innerHeight(),
      ub = $(".upper-bar").innerHeight(),
      nb = $(".navbar").innerHeight();

//$(".slider, .carousel-item").css("height", wh - (ub + nb) );

    
    $(".fetWrk button").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        
        if( $(this).data('class') === 'all' ){
            $(".imagesPr .col-md-3").css("opacity","1");
        }
        else{
            $(".imagesPr .col-md-3").css("opacity","0.1");
            $($(this).data('class')).parent().css("opacity","1");
        }
    });
    
    
    
    /*$(".Testmonials .carousel-indicators li").click(function(){
        $(this).css("backgroungColor","white");
            
    });*/
    
/*    
    $(".prods div").hover(function(){        
        $(".fetWrk-ov").css("display","flex");
        $(this).addClass("fetWrk-ov");
    })
*/    
});