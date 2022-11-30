// прикрепление шапки к верху страницы при скролле
$(function () {
	let header = $('.header__menu');

	$(window).scroll(function () {
		if ($(this).scrollTop() > 1) {
			header.addClass('header_fixed');
		} else {
			header.removeClass('header_fixed');
		}
	});
});