$(document).ready(function ($) {
	$('.masonry-items').masonry({
		percentPosition: true,
	});

	// init Isotope
	var $filters = $('.masonry-items').isotope({
		// options
	});
	// filter items on button click
	$('.filter-menu ul').on('click', 'li', function () {
		var filttering = $(this).attr('data-filter');
		$filters.isotope({
			filter: filttering
		});
	});
});
