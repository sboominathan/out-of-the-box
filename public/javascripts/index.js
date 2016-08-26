$(document).ready(function(){
   $(window).scroll(function(){
        if($(this).scrollTop() > 450) {
            $("nav").css({"background-color":"#05354e"});
            $("#navbar-collapse").css({"background-color":"#05354e"});     
            
        }
        else{
        	$("nav").css({"background-color":"#1d1d1d"});   
            $("#navbar-collapse").css({"background-color":"#1d1d1d"});   
        }
    })
    
})