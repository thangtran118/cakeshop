let header = $("#header");

// header scroll
function headerScroll() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) {
            header.addClass("scroll")
        } else {
            header.removeClass("scroll");
        }
    });
}

export { headerScroll };