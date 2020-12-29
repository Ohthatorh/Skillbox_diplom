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
		let paddingOffset = $(window).innerWidth() - $('body').outerWidth() + 'px';
		let pagePosition = window.scrollY;
		$('body').css({'padding-right': paddingOffset, 'top': -pagePosition+'px'});
		$('.fixed').css('padding-right', paddingOffset);
		$('body').addClass('disable-scroll');
		document.body.dataset.position = pagePosition;
	}

	let enableScroll = () => {
		let paddingOffset = '0px';
		let pagePosition = parseInt(document.body.dataset.position, 10);
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
		setTimeout(enableScroll, 800);
	});

	$('a.scroll-to').on('click', function(e){
		let anchor = $(this).attr('href');
		e.preventDefault();
		$('.hamburger--vortex').removeClass('is-active');
		enableScroll();
		$('.header__nav').removeClass('header__nav-active');
		$('html, body').stop().animate({
			scrollTop: $(anchor).offset().top
		}, 800);
	});
}); 

