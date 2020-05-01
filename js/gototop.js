$(function() {
	var pageTop = $('#pageTop');
	pageTop.hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			pageTop.fadeIn();
		} else {
			pageTop.fadeOut();
		}
	});
    pageTop.click(function () {
		$('body, html').animate({scrollTop:0}, 200, 'swing');
		return false;
    });
});
