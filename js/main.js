document.addEventListener("DOMContentLoaded", () => {
	// меню-гамбургер

	const hamb = document.querySelector('#hamb')
	const popup = document.querySelector('#popup')
	const menu = document.querySelector('#menu').cloneNode(1)
	const body = document.body

	hamb.addEventListener('click', hambHandler)

	function hambHandler(e) {
		e.preventDefault()
		popup.classList.toggle('open')
		hamb.classList.toggle('active')
		body.classList.toggle('noscroll')
		renderPopup()
	}

	function renderPopup() {
		popup.appendChild(menu)
	}
})

// прикрепление шапки к верху страницы при скролле
$(function () {
	let header = $('.header__menu')

	$(window).scroll(function () {
		if ($(this).scrollTop() > 1) {
			header.addClass('header__menu--fixed')
		} else {
			header.removeClass('header__menu--fixed')
		}
	})
})



