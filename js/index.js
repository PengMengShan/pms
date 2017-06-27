//判断是PC还是手机
function IsPC() {
	var userAgentInfo = navigator.userAgent;
	var Agents = ["Android", "iPhone",
		"SymbianOS", "Windows Phone",
		"iPad", "iPod"
	];
	var flag = true;
	for(var v = 0; v < Agents.length; v++) {
		if(userAgentInfo.indexOf(Agents[v]) > 0) {
			flag = false;
			break;
		}
	}
	return flag;
}

//手机四秒展开,PC两秒展开
if(IsPC()) {
	mLoading(2000)
} else {
	mLoading(4000)

}
function mLoading(timer) {
	setTimeout(function() {
		// Remove preloader
		// https://ihatetomatoes.net/create-custom-preloading-screen/
		$('body').addClass('loaded');
	}, timer)
}

function adjustHeightOfPage(pageNo) {

	// Get the page height
	var totalPageHeight = 15 + $('.cd-slider-nav').height() +
		$(".cd-hero-slider li:nth-of-type(" + pageNo + ") .js-tm-page-content").height() + 160 +
		$('.tm-footer').height();

	// Adjust layout based on page height and window height
	if(totalPageHeight > $(window).height()) {
		$('.cd-hero-slider').addClass('small-screen');
		$('.cd-hero-slider li:nth-of-type(' + pageNo + ')').css("min-height", totalPageHeight + "px");
	} else {
		$('.cd-hero-slider').removeClass('small-screen');
		$('.cd-hero-slider li:nth-of-type(' + pageNo + ')').css("min-height", "100%");
	}

}

/*
    Everything is loaded including images.
*/
$(window).load(function() {

	adjustHeightOfPage(1); // Adjust page height

	/* Gallery pop up
	-----------------------------------------*/
	$('.tm-img-gallery').magnificPopup({
		delegate: 'a', // child items selector, by clicking on it popup will open
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	/* Collapse menu after click
	-----------------------------------------*/

	$('#tmNavbar #github').on('click', function() {
		location.href = 'https://github.com/PengMengShan';
	})
	$('#tmNavbar #blog').on('click', function() {
		location.href = 'http://www.cnblogs.com/pms01/';
	})

	$('#tmNavbar a').click(function() {
		$('#tmNavbar').collapse('hide');
		adjustHeightOfPage($(this).data("no")); // Adjust page height
	});

	/* Browser resized
	-----------------------------------------*/
	$(window).resize(function() {
		var currentPageNo = $(".cd-hero-slider li.selected .js-tm-page-content").data("page-no");
		adjustHeightOfPage(currentPageNo);
	});

	(function(window) {

		var imgArry = [
			'img/show/01.jpg',
			'img/show/02.jpg',
			'img/show/03.jpg',
			'img/show/04.jpg',
			'img/show/05.jpg',
			'img/show/06.jpg',
			'img/show/07.jpg',
			'img/show/08.jpg',
			'img/show/09.jpg',
		];
		var num = parseInt(Math.random() * 9);
		if(IsPC()) {
			switchImg();
		};

		function switchImg() {
			setInterval(function() {
				$('.cd-hero-slider li').each(function(i, el) {
					var num = parseInt(Math.random() * 9);
					$(el).css('background-image', 'url(' + imgArry[num] + ')');
				})
			}, 20000)
		}

		for(var i = 0; i < 9; i++) {
			var str =
				'<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">' +
				'<a href="' + imgArry[i] + '">' +
				'<img src="' + imgArry[i] + '" alt="Image" class="img-fluid tm-img">' +
				'</a>' +
				'</div>';
			$('#imgWarp').append(str);
		};
	})(window)

});