$(document).ready(function() {
	$(window).resize(function() {
		if(document.documentElement.clientWidth > 1170) {
			$('.hamburger--vortex').removeClass('is-active');
			$('.header__nav').removeClass('header__nav-active');
			$('body').removeClass('disable-scroll');
		}
	});

	let disableScroll = function () {
		let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
		console.log(paddingOffset)
		$('body').css('padding-right', paddingOffset);
		
	}
	
	$('.symbols__main').removeClass('symbols__main_active');
	
	$('.hamburger--vortex').click(function() {
		$(this).toggleClass('is-active');
		$('body').toggleClass('disable-scroll');
		$('.header__nav').toggleClass('header__nav-active');
	});

	$('.button-js').click(function(){
		$('.popup-overlay').fadeIn();
		$('body').addClass('disable-scroll');
		$('.popup').css('display', 'flex').hide().fadeIn();
		disableScroll();
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
		$('.header__nav').removeClass('header__nav-active');
		let anchor = $(this).attr('href');
		$('html, body').stop().animate({
			scrollTop: $(anchor).offset().top
		}, 800);
	});
}); 

