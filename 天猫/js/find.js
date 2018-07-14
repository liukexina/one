var search = document.getElementsByClassName("search-text")[0];
var behave = document.getElementsByClassName("behave")[0];
behave.onclick = function () {
    behave.style.color ="rgb(204, 204, 204)";
    search.focus();   /*获取焦点*/
};
search.onkeydown = function () {
    behave.style.display = "none";
};













var select = document.getElementsByClassName("mart-btns")[0].getElementsByTagName("span");
var xian = document.getElementsByClassName("mart-concent-item");

select[0].onmouseover = function () {
    console.log("1");
    select[0].classList.add("mart-btns-active");
    select[1].classList.remove("mart-btns-active");
    xian[0].classList.add("mart-active");
    xian[1].classList.remove("mart-active");
};
select[1].onmouseover = function () {
    console.log("2");
    select[1].classList.add("mart-btns-active");
    select[0].classList.remove("mart-btns-active");
    xian[1].classList.add("mart-active");
    xian[0].classList.remove("mart-active");
};