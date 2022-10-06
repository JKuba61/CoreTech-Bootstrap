$('.team-carousel').slick({
	mobileFirst: true,
	arrows: false,
	autoplay: true,
	adaptiveHeight: false,
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 998,
			settings: {
				slidesToShow: 3,
			},
		},
	],
})
