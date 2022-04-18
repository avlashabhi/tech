$(document).ready(function () {
    $(".musiccontent").click(function () {
        $(".musicp").slideUp();
        $(this).next(".musicp").slideDown();
        $(this).children().removeClass("fa-angle-down").addClass("fa-angle-up");
        $(".musiccontent").addClass("extra");
    });
});