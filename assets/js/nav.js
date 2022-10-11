window.onscroll = function() {
    var scroll_Y = window.pageYOffset;
    if (scroll_Y > 100) {
        document.getElementsByTagName("nav")[0].style.background = "rgba(248, 248, 248, 1)";
    } else {
        document.getElementsByTagName("nav")[0].style.background = "rgba(248, 248, 248, 0.8)";
    }
};