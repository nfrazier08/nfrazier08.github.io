$(document).ready(function(){

    //Change of nav bar on scroll
        //Scroll top is getting the current vertical position of the scroll bar in every matched element or first matched element
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();

        if(scroll > 300){            
            $(".opaque").css("background", "orange");
        }

        else {
            $(".opaque").css("background", "#f48fb1");
        }
    })


})