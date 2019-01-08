$(document).ready(function () {
    $(".qita").click(function () {
        $(this).siblings("textarea").fadeIn(1000)
    })
    $(".comment").click(function () {
        $(this).siblings("textarea").fadeOut(1000)
    })
})