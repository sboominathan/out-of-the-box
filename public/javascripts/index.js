// $(document).ready(function(){
//    $(window).scroll(function(){
//         if($(this).scrollTop() > 450) {
//             $("nav").css({"background-color":"#05354e"});
//             $("#navbar-collapse").css({"background-color":"#05354e"});     
            
//         }
//         else{
//         	$("nav").css({"background-color":"#1d1d1d"});   
//             $("#navbar-collapse").css({"background-color":"#1d1d1d"});   
//         }
//     })
    
// })

$(document).ready(function(){

   $(window).scroll(function(){
        var scrollPercent = ($(this).scrollTop() / $(document).height()) * 100;

        if(scrollPercent < 11) {
            $("nav").css({"background-color":"#0f1428"});
            $("#navbar-collapse").css({"background-color":"#0f1428"});
        }
        else if(scrollPercent > 10 && scrollPercent < 28) {
            $("nav").css({"background-color":"#b1264e"});
            $("#navbar-collapse").css({"background-color":"#b1264e"});
        }
        else if(scrollPercent > 28 && scrollPercent < 60) {
            $("nav").css({"background-color":"#80c3d8"});
            $("#navbar-collapse").css({"background-color":"#80c3d8"});
        }
        else if(scrollPercent > 60 && scrollPercent < 75) {
            $("nav").css({"background-color":"#f5b634"});
            $("#navbar-collapse").css({"background-color":"#f5b634"});
        }  
        else if(scrollPercent > 75 && scrollPercent < 90) {
            $("nav").css({"background-color":"#b1264e"});
            $("#navbar-collapse").css({"background-color":"#b1264e"});
        }         
        else{
            $("nav").css({"background-color":"#0f1428"});   
            $("#navbar-collapse").css({"background-color":"#0f1428"});   
        }
    })
    
})