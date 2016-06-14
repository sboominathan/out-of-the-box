$(document).ready(function(){
   $(window).scroll(function(){
        if($(this).scrollTop() > 300) {
            $("nav").css({"background-color":"#1d1d1d"});   
        	$("#navbar-collapse").css({"background-color":"#1d1d1d"});   
        	/*$("nav").addClass("scroll"); 
        	$("#blue").css({"color":"black"});
        	$("#about").css({"color":"black"});
        	$("#dates").css({"color":"black"});
        	$("#goto-faq").css({"color":"black"});*/
        	//$("#")
        }
        else{
        	$("nav").css({"background-color":"#404040"});
        	$("#navbar-collapse").css({"background-color":"#404040"});     
        	/*$("#navbar-collapse").css({"background-color":"#1d1d1d"});
        	$("#blue").css({"color":"#99ddff"});
        	$("#about").css({"color":"rgba(242, 246, 249, 0.25)"});
        	$("#dates").css({"color":"rgba(242, 246, 249, 0.25)"});
        	$("#goto-faq").css({"color":"rgba(242, 246, 249, 0.25)"});*/
        }
    })
    

})