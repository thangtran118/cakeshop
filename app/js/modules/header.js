let header = $("#header");

// header scroll
function headerScroll() {
    console.log("hello");
    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) {
            header.addClass("scroll")
        } else {
            header.removeClass("scroll");
        }
    });
}

export { headerScroll };