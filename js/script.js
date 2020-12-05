$(document).ready(function() {
	$(window).resize(function() {
		if(document.documentElement.clientWidth > 1170) {
			$('.hamburger--vortex').removeClass('is-active');
			$('.main__nav').removeClass('main__nav-active');
			$('body').removeClass('disable-scroll');
		}
	});
	
	$('.symbols__main').removeClass('symbols__main_active');
	
	$('.hamburger--vortex').click(function() {
		$(this).toggleClass('is-active');
		$('body').toggleClass('disable-scroll');
		$('.main__nav').toggleClass('main__nav-active');
	});

	$('.button, .header__button-mobile').click(function(){
		$('.popup-overlay').fadeIn();
		$('.popup').css('display', 'flex').hide().fadeIn();
	});

	$('.popup-close, .popup-overlay').click(function(){
		$('.popup-overlay').fadeOut();
		$('.popup').fadeOut();
	});
}); 

