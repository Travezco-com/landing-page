window.onscroll = function() {
    var scroll_Y = window.pageYOffset;
    if (scroll_Y > 100) {
        document.getElementsByTagName("nav")[0].style.background = "rgba(248, 248, 248, 1)";
    } else {
        document.getElementsByTagName("nav")[0].style.background = "rgba(248, 248, 248, 0.8)";
    }
};

function preAlertClose() {
    document.getElementById("pre-alert").style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById("pre-alert")) {
        document.getElementById("pre-alert").style.display = "none";
    }
}