$(document).ready(function() {
	$(window).resize(function() {
		if(document.documentElement.clientWidth > 1170) {
			$('.hamburger--vortex').removeClass('is-active');
			$('.main__menu').removeClass('main__menu-active');
			$('body').removeClass('disable-scroll');
		}
	});
	
	$('.symbols__main').removeClass('symbols__main_active');
	
	$('.hamburger--vortex').click(function() {
		$(this).toggleClass('is-active');
		$('body').toggleClass('disable-scroll');
		$('.main__menu').toggleClass('main__menu-active');
	});

	$('.button-js').click(function(){
		$('.popup-overlay').fadeIn();
		$('body').addClass('disable-scroll');
		$('.popup').css('display', 'flex').hide().fadeIn();
	});

	$('.popup__close, .popup-overlay').click(function(){
		$('.popup-overlay').fadeOut();
		$('.popup').fadeOut();
		$('body').removeClass('disable-scroll');
	});

	$('a.scroll-to').on('click', function(e){
		e.preventDefault();
		$('.hamburger--vortex').removeClass('is-active');
		$('body').removeClass('disable-scroll');
		$('.main__menu').removeClass('main__menu-active');
		let anchor = $(this).attr('href');
		$('html, body').stop().animate({
			scrollTop: $(anchor).offset().top
		}, 800);
	});
}); 

