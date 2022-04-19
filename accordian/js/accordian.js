$(document).ready(function () {
    $(".musiccontent").click(function () {
        $(".musicp").slideUp();
        $(this).next(".musicp").slideDown();
        $(this).children().removeClass("fa-angle-down").addClass("fa-angle-up");
        $(".musiccontent").addClass("extra");

    });
    // $(".musiccontent").dblclick(function () {
    //     $(".musiccontent").next(".musicp").slideUp();
    //     $(".musiccontent").removeClass("extra");
    //     $(".musiccontent").children().removeClass("fa-angle-up").addClass("fa-angle-down");
    // });
});