$(".trigger").on("click",function () {
    console.log("123");
    $(".overlay").addClass("active");
});
$(".icon-shanchu").on("click",function () {
    console.log("234");
    $(".overlay").removeClass("active");
});