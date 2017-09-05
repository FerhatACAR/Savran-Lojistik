(function ($) {
/*######################### Menu Scroll Properties ###############*/
	//jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
			$(".scrollcol").css("color","white");
			$("#split").css("border-color","white");
			$(".dropdown-menu").css("background-color","#db0000");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
			$(".scrollcol").css("color","#585858");
			$("#split").css("border-color","grey");
			$(".dropdown-menu").css("background-color","#e1e1e1");
		}
	});
})(jQuery);
/*########################   Back to Top ###########################*/
jQuery("#backtotop").click(function () {
    jQuery("body,html").animate({
        scrollTop: 0
    }, 600);
});
jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() >150) {
        jQuery("#backtotop").addClass("visible");
    } else {
        jQuery("#backtotop").removeClass("visible");
    }
});

/*######################## Slider ########################*/
$(function() {
	var demo1 = $("#demo1").slippry({
		// transition: 'fade',
		// useCSS: true,
		// speed: 1000,
		// pause: 3000,
		// auto: true,
		// preload: 'visible',
		// autoHover: false
	});

	$('.stop').click(function () {
		demo1.stopAuto();
	});

	$('.start').click(function () {
		demo1.startAuto();
	});

	$('.prev').click(function () {
		demo1.goToPrevSlide();
		return false;
	});
	$('.next').click(function () {
		demo1.goToNextSlide();
		return false;
	});
	$('.reset').click(function () {
		demo1.destroySlider();
		return false;
	});
	$('.reload').click(function () {
		demo1.reloadSlider();
		return false;
	});
	$('.init').click(function () {
		demo1 = $("#demo1").slippry();
		return false;
	});
});
/*#################### Deleting Content Left For Mobile ##################*/
$(function () {
			 $(window).ready(function () {
					 if ($(window).width() < 991) {
								$(".leftmen").remove()
								$(".mobremove").remove()
					 }
			 });
	 });
