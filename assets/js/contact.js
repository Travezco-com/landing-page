function contactOpen() {
    var div = document.getElementsByClassName("contact-us")[0];
    div.classList.remove("contact-animation-reverse");
    var oldDiv = document.getElementsByClassName("contact-initial")[0];
    var newDiv = document.getElementsByClassName("contact-later")[0];
    oldDiv.style.display = "none";
    newDiv.style.display = "block";
    div.classList.add("contact-animation");
}

function contactClose() {
    var div = document.getElementsByClassName("contact-us")[0];
    div.classList.remove("contact-animation");
    var oldDiv = document.getElementsByClassName("contact-initial")[0];
    var newDiv = document.getElementsByClassName("contact-later")[0];
    oldDiv.style.display = "flex";
    newDiv.style.display = "none";
    div.classList.add("contact-animation-reverse");
}