// прикрепление шапки к верху страницы при скролле
$(function () {
	let header = $('.header__menu');

	$(window).scroll(function () {
		if ($(this).scrollTop() > 1) {
			header.addClass('header__menu--fixed');
		} else {
			header.removeClass('header__menu--fixed');
		}
	});
});