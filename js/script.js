$(document).ready(function() {
	$(window).resize(function() {
		if(document.documentElement.clientWidth > 1170) {
			$('.hamburger--vortex').removeClass('is-active');
			$('.header__nav').removeClass('header__nav-active');
			enableScroll();
		}
	});

	$('.symbols__main').removeClass('symbols__main_active');

	let disableScroll = function () {
		let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
		$('body').css('padding-right', paddingOffset);
		$('.fixed').css('padding-right', paddingOffset);
		$('body').addClass('disable-scroll');
	}

	let enableScroll = function () {
		let paddingOffset = '0px';
		$('body').css('padding-right', paddingOffset);
		$('.fixed').css('padding-right', paddingOffset);
		$('body').removeClass('disable-scroll');
	}
	
	$('.hamburger--vortex').click(function() {
		$(this).toggleClass('is-active');
		($('.hamburger--vortex').hasClass('is-active')) ? disableScroll() : enableScroll();
		$('.header__nav').toggleClass('header__nav-active');
	});

	$('.button-js').click(function(){
		disableScroll();
		$('.popup-overlay').fadeIn();
		$('.popup').css('display', 'flex').hide().fadeIn();
	});

	$('.popup__close, .popup-overlay').click(function(){
		enableScroll();
		$('.popup-overlay').fadeOut();
		$('.popup').fadeOut();
	});

	$('a.scroll-to').on('click', function(e){
		e.preventDefault();
		$('.hamburger--vortex').removeClass('is-active');
		enableScroll();
		$('.header__nav').removeClass('header__nav-active');
		let anchor = $(this).attr('href');
		$('html, body').stop().animate({
			scrollTop: $(anchor).offset().top
		}, 800);
	});
}); 

