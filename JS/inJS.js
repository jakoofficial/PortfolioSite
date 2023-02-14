// JavaScript source code
// https://www.w3schools.com/html/html_scripts.asp
// https://www.w3schools.com/jquery/jquery_get_started.asp
// https://www.tutorialspoint.com/jquery/jquery-syntax.htm

var abClicked = false;

function abClose() {
    $("#ab-info").animate({ height: "0px" }, 500);
    abChange("rgba(216, 216, 216, 0.65)");
    $("#ab-info").promise().done(function () {
        $("#ab-info").css("visibility", "hidden");
        abClicked = false;
    });
}
function abChange(c) {
    $("#ab-btn").css("background-color", c);
}

$(document).ready(function () {
    $("#ab-btn").mouseout(function () {
        if (!abClicked) {
            abChange("rgba(216, 216, 216, 0)");
        }
    });
    $("#ab-btn").mouseover(function () {
        if (!abClicked) {
            abChange("rgba(216, 216, 216, 0.9)");
        }
    });
    $("#ab-btn").click(function () {
        abClicked = !abClicked;
        if (abClicked) {
            $("#ab-info").css("visibility", "visible");
            $("#ab-info").animate({ height: "535px" }, 500);
            abChange("rgba(216, 216, 216, 0.9)");

            $("html, body").animate({
                scrollTop: $("#ab-info").offset().top
            }, 750);

            $("#ab-btn-img").attr("src", "IMG/X.png")
        }
        else {
            $("#ab-btn-img").attr("src", "IMG/Face.png")
            abClose();
        }
    });
});