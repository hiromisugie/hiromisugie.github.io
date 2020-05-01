/**
 * hamburger
*/

(function($) {
    $(function() {
        var $header = $('#top-head');
        // Nav Fixed
        $(window).scroll(function() {
            if ($(window).scrollTop() > 50000) {
                $header.addClass('fixed');
            } else {
                $header.removeClass('fixed');
            }
        });
        // Nav Toggle Button
        $('#nav-toggle').click(function(){
            $header.toggleClass('open');
        });
        // Close Toggle Button
        $('#global-nav').click(function(){
            $header.removeClass('open');
        });
    });
})(jQuery);