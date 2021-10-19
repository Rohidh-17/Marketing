/*  Theme Name: Rexzon - Responsive One Page Multipurpose   Template
    Author: Saptavarana
    Version: 1.0.0
    Created:August 2018
    File Description: Main JS file of the template
*/

$(window).on("scroll",function(){$(window).scrollTop()>=50?$(".sticky").addClass("stickyadd"):$(".sticky").removeClass("stickyadd")}),$(".navbar-nav a").on("click",function(a){var i=$(this);$("html, body").stop().animate({scrollTop:$(i.attr("href")).offset().top-0},1500,"easeInOutExpo"),a.preventDefault()}),$("#navbarCollapse").scrollspy({offset:20}),$("#owl-demo").owlCarousel({navigation:!1,slideSpeed:300,paginationSpeed:400,singleItem:!0}),$(".img-zoom").magnificPopup({type:"image",closeOnContentClick:!0,mainClass:"mfp-fade",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]}}),$(window).on("load",function(){var a=$(".work-filter"),i=$("#menu-filter");a.isotope({filter:"*",layoutMode:"masonry",animationOptions:{duration:750,easing:"linear"}}),i.find("a").on("click",function(){var o=$(this).attr("data-filter");return i.find("a").removeClass("active"),$(this).addClass("active"),a.isotope({filter:o,animationOptions:{animationDuration:750,easing:"linear",queue:!1}}),!1})});