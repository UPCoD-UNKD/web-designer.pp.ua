import * as $ from 'jquery'

$(document).ready(function() {
	$('.wd-burger').on('click', function() {
		$(this).toggleClass('opened')
		$('.wd-menu').toggleClass('mob-menu')
		$('body').toggleClass('fix-mob')
	})
	// Preblems & Solutions
	$('wd-menu--hover.opened').mouseleave(function() {
		$(this).removeClass('opened')
	})
	$('.wd-menu__link--dropdown').hover(
		function() {
			$('#top_block').css('overflow', 'visible')
			$('wd-menu--hover').addClass('opened')
		},
		function() {
			if ($('wd-menu--hover').hasClass('opened') !== true) {
				$('#top_block').css('overflow', 'hidden')
			}
		}
	)

	// Scroll To
	$('.scroll').click(function(event) {
		event.preventDefault()
		var full_url = this.href
		var parts = full_url.split('#')
		var trgt = parts[1]
		var target_offset = $('#' + trgt).offset()
		var target_top = target_offset.top - 78
		$('html, body').animate({ scrollTop: target_top }, 1500)
	})
})
