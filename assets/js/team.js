function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function moveNext() {
    var prev_div = document.getElementsByClassName("team-carousel-image")[0];
    var selected_div = document.getElementsByClassName("team-carousel-image")[1];
    var next_div = document.getElementsByClassName("team-carousel-image")[2];
    prev_div.style.transform = "translateX(200%)";
    selected_div.style.transform = "translateX(-67%)";
    next_div.style.transform = "translateX(-75%)";
    selected_div.classList.remove("carousel-selected");
    selected_div.classList.add("carousel-prev");
    next_div.classList.remove("carousel-next");
    next_div.classList.add("carousel-selected");
    prev_div.classList.remove("carousel-prev");
    prev_div.classList.add("carousel-next");
    sleep(500).then(() => {
        var body = document.getElementsByClassName("team-carousel-main")[0];
        body.innerHTML = "";
        body.appendChild(selected_div);
        body.appendChild(next_div);
        body.appendChild(prev_div);
        prev_div.style.transform = "";
        selected_div.style.transform = "";
        next_div.style.transform = "";
    })

    var prev_square = document.getElementsByClassName("square-prev")[0];
    var selected_square = document.getElementsByClassName("square-selected")[0];
    var next_square = document.getElementsByClassName("square-next")[0];
    prev_square.classList.remove("square-prev");
    prev_square.classList.add("square-next");
    selected_square.classList.remove("square-selected");
    selected_square.classList.add("square-prev");
    next_square.classList.remove("square-next");
    next_square.classList.add("square-selected");

    var name = document.getElementById("team-name");
    var desgn = document.getElementById("team-designation");
    var insta = document.getElementById("team-instagram");
    var linkedin = document.getElementById("team-linkedin");

    if (next_div.innerHTML.includes("rupesh")) {
        name.innerHTML = "Rupesh Taneja";
        desgn.innerHTML = "Chief Executive Officer";
        insta.href = "https://instagram.com/ruptan.psd";
        linkedin.href = "https://www.linkedin.com/in/rupesh-taneja-836225195/";
    } else if (next_div.innerHTML.includes("shashank")) {
        name.innerHTML = "Shashank Mahawar";
        desgn.innerHTML = "Chief Technology Officer";
        insta.href = "https://instagram.com/shashmahawar";
        linkedin.href = "https://www.linkedin.com/in/shashmahawar/";
    } else if (next_div.innerHTML.includes("vipul")) {
        name.innerHTML = "Vipul Suthar";
        desgn.innerHTML = "Chief Design Officer";
        insta.href = "https://instagram.com/vipulsuthar225";
        linkedin.href = "https://www.linkedin.com/in/vipul-suthar-1ba612216/";
    }
}

function movePrev() {
    var prev_div = document.getElementsByClassName("team-carousel-image")[0];
    var selected_div = document.getElementsByClassName("team-carousel-image")[1];
    var next_div = document.getElementsByClassName("team-carousel-image")[2];
    prev_div.style.transform = "translateX(75%)";
    selected_div.style.transform = "translateX(67%)";
    next_div.style.transform = "translateX(-200%)";
    selected_div.classList.remove("carousel-selected");
    selected_div.classList.add("carousel-next");
    next_div.classList.remove("carousel-next");
    next_div.classList.add("carousel-prev");
    prev_div.classList.remove("carousel-prev");
    prev_div.classList.add("carousel-selected");
    sleep(500).then(() => {
        var body = document.getElementsByClassName("team-carousel-main")[0];
        body.innerHTML = "";
        body.appendChild(next_div);
        body.appendChild(prev_div);
        body.appendChild(selected_div);
        prev_div.style.transform = "";
        selected_div.style.transform = "";
        next_div.style.transform = "";
    })

    var prev_square = document.getElementsByClassName("square-prev")[0];
    var selected_square = document.getElementsByClassName("square-selected")[0];
    var next_square = document.getElementsByClassName("square-next")[0];
    prev_square.classList.remove("square-prev");
    prev_square.classList.add("square-selected");
    selected_square.classList.remove("square-selected");
    selected_square.classList.add("square-next");
    next_square.classList.remove("square-next");
    next_square.classList.add("square-prev");

    var name = document.getElementById("team-name");
    var desgn = document.getElementById("team-designation");
    var insta = document.getElementById("team-instagram");
    var linkedin = document.getElementById("team-linkedin");

    if (prev_div.innerHTML.includes("rupesh")) {
        name.innerHTML = "Rupesh Taneja";
        desgn.innerHTML = "Chief Executive Officer";
        insta.href = "https://instagram.com/ruptan.psd";
        linkedin.href = "https://www.linkedin.com/in/rupesh-taneja-836225195/";
    } else if (prev_div.innerHTML.includes("shashank")) {
        name.innerHTML = "Shashank Mahawar";
        desgn.innerHTML = "Chief Technology Officer";
        insta.href = "https://instagram.com/shashmahawar";
        linkedin.href = "https://www.linkedin.com/in/shashmahawar/";
    } else if (prev_div.innerHTML.includes("vipul")) {
        name.innerHTML = "Vipul Suthar";
        desgn.innerHTML = "Chief Design Officer";
        insta.href = "https://instagram.com/vipulsuthar225";
        linkedin.href = "https://www.linkedin.com/in/vipul-suthar-1ba612216/";
    }
}