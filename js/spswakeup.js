 $(function () {
    $(document).scroll(function(){
        $(".navbar").length&&($(".navbar").offset().top>50?$(".scrolling-navbar").addClass("top-nav-collapse"):$(".scrolling-navbar").removeClass("top-nav-collapse"))})
    });