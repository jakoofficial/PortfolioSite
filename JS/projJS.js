//https://stackoverflow.com/questions/9720294/jquery-how-to-detect-window-width-on-the-fly

$(document).ready(function () {
    var $window = $(window);

    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize > 359 && windowsize < 963) {
            $(".project").removeClass("col");
            $(".project").removeClass("span_4_of_12");
            $(".project").css("color", green);
        }
    }
    checkWidth();
    $(window).resize(checkWidth);
});