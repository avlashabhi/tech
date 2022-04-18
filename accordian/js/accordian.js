console.log("Abhi");
$(document).ready(function () {
    $(".musiccontent").click(function () {
        // if ($(".musiccontent").sibilings("p").hasClass("musicp")) {
        $(".musicp").slideDown("slow");
        $(".fa-solid").removeClass("fa-angle-down").addClass("fa-angle-up");
        $(".musiccontent").addClass("extra");
        // } else {

        // }
    });
});