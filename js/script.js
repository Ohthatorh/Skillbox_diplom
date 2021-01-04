$(document).ready(function() {
	$(window).resize(function() {
		if(document.documentElement.clientWidth > 1170) {
			$('.hamburger--vortex').removeClass('is-active');
			$('.header__nav').removeClass('header__nav-active');
			enableScroll();
		}
	});

	$('.symbols__main').removeClass('symbols__main_active');
	let disableScroll = () => {
		let paddingOffset = $(window).outerWidth() - $('body').outerWidth() + 'px';
		let pagePosition = $(window).scrollTop();
		$('body').css({'padding-right': paddingOffset, 'top': -pagePosition+'px'});
		$('.fixed').css('padding-right', paddingOffset);
		$('body').addClass('disable-scroll');
		$('body').attr('data-position', pagePosition);
	}

	let enableScroll = () => {
		let paddingOffset = '0px';
		let pagePosition = parseInt($('body').attr('data-position'));
		$('body').css({'padding-right': paddingOffset, 'top': 'auto'});
		$('.fixed').css('padding-right', paddingOffset);
		$('body').removeClass('disable-scroll');
		window.scroll({top: pagePosition, left: 0});
		$('body').removeAttr('data-position');
	}
	
	$('.hamburger--vortex').click(function() {
		$(this).toggleClass('is-active');
		($('.hamburger--vortex').hasClass('is-active')) ? disableScroll() : enableScroll();
		$('.header__nav').toggleClass('header__nav-active');
	});

	$('.button-js').click(function(){
		disableScroll();
		$('.popup-overlay').css('top', -window.scrollY+'px');
		$('.popup-overlay').fadeIn();
		$('.popup').css('display', 'flex').hide().fadeIn();
	});

	$('.popup__close, .popup-overlay').click(function(){
		$('.popup-overlay').fadeOut();
		$('.popup').fadeOut();
		enableScroll();
	});

	$('a.scroll-to').click(function(e){
		e.preventDefault();
		let anchor = $(this).attr('href');
		$('.hamburger--vortex').removeClass('is-active');
		$('.header__nav').removeClass('header__nav-active');
		$('html, body').stop().animate({
			scrollTop: $(anchor).offset().top
		}, 800);
		enableScroll();
	});
}); 

