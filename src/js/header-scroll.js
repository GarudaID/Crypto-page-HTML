jQuery(document).ready(function ($) {
"use strict";

	function navScroll(){
		var window_top = $('.page__content').scrollTop(); 
		var div_top = $('body').offset().top;
		if (window_top > div_top) {
				$('.header').addClass('header--page');
			} else {
				$('.header').removeClass('header--page');
			}
	}
	$('.page__content').scroll(function() {
		navScroll();
	});
	navScroll();

});
