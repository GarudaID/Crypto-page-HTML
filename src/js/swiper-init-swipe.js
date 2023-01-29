/*------------------------------------------------------------------
jQuery document ready
-------------------------------------------------------------------*/
$(document).ready(function () {
	"use strict";

		/* Simple Slider */
		var cartsliders = [];
		var cartslider = [];
		$('.slider-init-swipe').each(function(index, element){
			
			$(this).addClass('c'+index);
			cartslider[index] = new Swiper('.c'+index, {
				direction: 'horizontal',
				effect: 'slide',
				slidesPerView: 'auto',
				spaceBetween: 0
				  
				});
			cartsliders.push(cartslider[index]);
		});
		
		$(".cart__item-more").on('click', function(e) {
			var swipeitem = $(this).data("swipe-item");
			cartslider[swipeitem].slideNext();
		});
   
});