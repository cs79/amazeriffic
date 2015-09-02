var main = function () {
    'use strict';

    // simplified method # 2
    $(".tabs span").toArray().forEach(function (element) {
        // create click handler
        $(element).on("click", function () {
            $(".tabs span").removeClass("active");
            $(element).addClass("active");
            $("main .content").empty();
            return false;
        });
    });

    // eimplified method # 1
    // var tabNumber;
    //
    // for (tabNumber = 1; tabNumber < 4; tabNumber++) {
    //     var tabSelector = ".tabs a:nth-child(" + tabNumber + ") span";
    //     $(tabSelector).on("click", function () {
    //         $(".tabs span").removeClass("active");
    //         $(event.target).addClass("active");
    //         $("main .content").empty();
    //         return false;
    //     });
    // }

    // poor method with repetitive code
    // var activateTab = function (tabNumber) {
    //     var tabSelector = ".tabs a:nth-child(" + tabNumber + ") span";
    //     $(".tabs span").removeClass("active");
    //     $(tabSelector).addClass("active");
    //     $("main .content").empty();
    // };
    //
    // $(".tabs a:nth-child(1)").on("click", function () {
    //     activateTab(1);
    //     return false;
    // });
    //
    // $(".tabs a:nth-child(2)").on("click", function () {
    //     activateTab(2);
    //     return false;
    // });
    //
    // $(".tabs a:nth-child(3)").on("click", function () {
    //     activateTab(3);
    //     return false;
    // });
};

$(document).ready(main);
