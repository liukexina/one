jQuery.fn.extend({
    slider:function (option) {
        var defaultOption = {
            timer:1000
        };
        var newOption = $.extend({},defaultOption,option);

        var content = $("<div class='slider'><div/>");

       /* var sliderList = '<div class="slider-panner sp-1 active">\n' +
            '                <div>\n' +
            '                    <img src=" '+ newOption.pic[0] + '" alt="">\n' +
            '                </div>\n' +
            '            </div>\n' +
            '            <div class="slider-panner sp-2">\n' +
            '                <div>\n' +
            '                    <img src=" '+ newOption.pic[1] + '" alt="">\n' +
            '                </div>\n' +
            '            </div>\n' +
            '            <div class="slider-panner sp-3">\n' +
            '                <div>\n' +
            '                    <img src=" '+ newOption.pic[2] + '" alt="">\n' +
            '                </div>\n' +
            '            </div>\n' +
            '            <div class="slider-panner sp-4">\n' +
            '                <div>\n' +
            '                    <img src=" '+ newOption.pic[3] + '" alt="">\n' +
            '                </div>\n' +
            '            </div>';
        */

        var sliderList='',sliderLi ='';
        for(i = 0 ; i < newOption.pic.length ; i++){
            sliderList += '<div class="slider-panner" style="background: '+ newOption.bg[i] + '">\n' +
                '                <div>\n' +
                '                    <img src=" ' + newOption.pic[i] + ' " alt="">\n' +
                '                </div>\n' +
                '            </div>';
        }


        for(i = 0 ; i < newOption.pic.length ; i++){
            sliderLi += '<li></li>';
        }

        var sliderBtn = '<div class="box">\n' +
            '            <ul>\n' + sliderLi +
            '            </ul>\n' +
            '        </div>';
/*
        var sliderBtn = '<div class="box">\n' +
            '            <ul>\n' +
            '                <li class="test"></li>\n' +
            '                <li></li>\n' +
            '                <li></li>\n' +
            '                <li></li>\n' +
            '            </ul>\n' +
            '        </div>';
*/


        content.html(sliderList + sliderBtn);
        $(this).append(content);
        $(".slider-panner:eq(0)").addClass("active");
        $("li:eq(0)").addClass("test");

        var index = 0;
        var isRun = true;
        setInterval(function(){
            if(isRun){
                run();
                index ++;
            }
        },newOption.timer);
        function run() {
            if(index == newOption.pic.length){
                index =0;
            }
            $(".slider-panner:eq("+ index + ")").addClass("active").siblings().removeClass("active");
            $("li:eq(" + index + ")").addClass("test").siblings().removeClass("test");
        }
        $("li").on("mouseover",function () {
            index = $(this).index();
            run();
        });

        $(".slider").hover(function () {
            isRun = false;
        },function () {
            isRun = true;
        })
    }
});