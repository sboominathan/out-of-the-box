$(document).ready(function(){
   $(window).scroll(function(){
        if($(this).scrollTop() < 620) {
            $("nav").css({"background-color":"#0f1428"});
            $("#navbar-collapse").css({"background-color":"#0f1428"});
        }
        else if($(this).scrollTop() > 620 &&  $(this).scrollTop() < 1400) {
            $("nav").css({"background-color":"#b1264e"});
            $("#navbar-collapse").css({"background-color":"#b1264e"});
        }
        else if($(this).scrollTop() > 1440 &&  $(this).scrollTop() < 3250) {
            $("nav").css({"background-color":"#80c3d8"});
            $("#navbar-collapse").css({"background-color":"#80c3d8"});
        }
        else if($(this).scrollTop() > 3250 &&  $(this).scrollTop() < 4000) {
            $("nav").css({"background-color":"#f5b634"});
            $("#navbar-collapse").css({"background-color":"#f5b634"});
        }  
        else if($(this).scrollTop() > 4000 &&  $(this).scrollTop() < 4800) {
            $("nav").css({"background-color":"#b1264e"});
            $("#navbar-collapse").css({"background-color":"#b1264e"});
        }         
        else{
        	$("nav").css({"background-color":"#0f1428"});   
            $("#navbar-collapse").css({"background-color":"#0f1428"});   
        }
    })
    
})