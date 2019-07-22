
function removeone() {
    $('.one').removeClass("selected");
    $('.two').removeClass("selected");
    $('.three').removeClass("selected");
    $('.inf').removeClass("selected");
    $('.sel').removeClass("selected");
    $('.grade').removeClass("selected");
}
function removetwo() {
    $('.looklist').removeClass("selected");
    $('.updatelist').removeClass("selected");
    $('.look').removeClass("selected");
    $('.update').removeClass("selected");
}
function removethree() {
    $('.DB').removeClass("selected");
    $('.DBlist').removeClass("selected");
    $('.CS').removeClass("selected");
    $('.CSlist').removeClass("selected");
}

$(".one").on("click",function () {
    removeone();
    $(this).addClass("selected");
    $('.inf').addClass("selected");

});
$(".two").on("click",function () {
    removeone();
    $(this).addClass("selected");
    $('.sel').addClass("selected");
});
$(".three").on("click",function () {
    removeone();
    $(this).addClass("selected");
    $('.grade').addClass("selected");
});

$('.looklist').on("click",function (){
    removetwo();
    $(this).addClass("selected");
    $('.look').addClass("selected");
});
$('.updatelist').on("click",function () {
    removetwo();
    $(this).addClass("selected");
    $('.update').addClass("selected");
});
$('.DB').on("click",function (){
    removethree();
    $(this).addClass("selected");
    $('.DBlist').addClass("selected");
});
$('.CS').on("click",function () {
    removethree();
    $(this).addClass("selected");
    $('.CSlist').addClass("selected");
});