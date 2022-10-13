function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function moveNext() {
    var prev_prev_div = document.getElementsByClassName("team-carousel-image")[0];
    var prev_div = document.getElementsByClassName("team-carousel-image")[1];
    var selected_div = document.getElementsByClassName("team-carousel-image")[2];
    var next_div = document.getElementsByClassName("team-carousel-image")[3];
    var next_next_div = document.getElementsByClassName("team-carousel-image")[4];
    prev_prev_div.style.transform = "translateX(430%)";
    prev_div.style.transform = "translateX(-17%)";
    selected_div.style.transform = "translateX(-47%)";
    next_div.style.transform = "translateX(-60%)";
    next_next_div.style.transform = "translateX(-113%)";
    selected_div.classList.remove("carousel-selected");
    selected_div.classList.add("carousel-prev");
    next_div.classList.remove("carousel-next");
    next_div.classList.add("carousel-selected");
    prev_div.classList.remove("carousel-prev");
    prev_div.classList.add("carousel-prev-prev");
    next_next_div.classList.remove("carousel-next-next");
    next_next_div.classList.add("carousel-next");
    prev_prev_div.classList.remove("carousel-prev-prev");
    prev_prev_div.classList.add("carousel-next-next");
    sleep(500).then(() => {
        var body = document.getElementsByClassName("team-carousel-main")[0];
        body.innerHTML = "";
        body.appendChild(prev_div);
        body.appendChild(selected_div);
        body.appendChild(next_div);
        body.appendChild(next_next_div);
        body.appendChild(prev_prev_div);
        prev_prev_div.style.transform = "";
        prev_div.style.transform = "";
        selected_div.style.transform = "";
        next_div.style.transform = "";
        next_next_div.style.transform = "";
    })

    var prev_prev_square = document.getElementsByClassName("square-prev-prev")[0];
    var prev_square = document.getElementsByClassName("square-prev")[0];
    var selected_square = document.getElementsByClassName("square-selected")[0];
    var next_square = document.getElementsByClassName("square-next")[0];
    var next_next_square = document.getElementsByClassName("square-next-next")[0];
    prev_prev_square.classList.remove("square-prev-prev");
    prev_prev_square.classList.add("square-next-next");
    prev_square.classList.remove("square-prev");
    prev_square.classList.add("square-prev-prev");
    selected_square.classList.remove("square-selected");
    selected_square.classList.add("square-prev");
    next_square.classList.remove("square-next");
    next_square.classList.add("square-selected");
    next_next_square.classList.remove("square-next-next");
    next_next_square.classList.add("square-next");

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
    } else if (next_div.innerHTML.includes("abhinav")) {
        name.innerHTML = "Abhinav Jain";
        desgn.innerHTML = "ML Specialist";
        insta.href = "https://instagram.com/abhinavjn";
        linkedin.href = "https://www.linkedin.com/in/abhinav-jain-4a85281b4";
    } else if (next_div.innerHTML.includes("milan")) {
        name.innerHTML = "Milan Roy";
        desgn.innerHTML = "Adviser";
        insta.href = "https://instagram.com/milan.roy10";
        linkedin.href = "https://www.linkedin.com/in/milan-roy/";
    }
}

function movePrev() {
    var prev_prev_div = document.getElementsByClassName("team-carousel-image")[0];
    var prev_div = document.getElementsByClassName("team-carousel-image")[1];
    var selected_div = document.getElementsByClassName("team-carousel-image")[2];
    var next_div = document.getElementsByClassName("team-carousel-image")[3];
    var next_next_div = document.getElementsByClassName("team-carousel-image")[4];
    prev_prev_div.style.transform = "translateX(113%)";
    prev_div.style.transform = "translateX(60%)";
    selected_div.style.transform = "translateX(47%)";
    next_div.style.transform = "translateX(17%)";
    next_next_div.style.transform = "translateX(-430%)";
    selected_div.classList.remove("carousel-selected");
    selected_div.classList.add("carousel-next");
    next_div.classList.remove("carousel-next");
    next_div.classList.add("carousel-next-next");
    prev_div.classList.remove("carousel-prev");
    prev_div.classList.add("carousel-selected");
    next_next_div.classList.remove("carousel-next-next");
    next_next_div.classList.add("carousel-prev-prev");
    prev_prev_div.classList.remove("carousel-prev-prev");
    prev_prev_div.classList.add("carousel-prev");
    sleep(500).then(() => {
        var body = document.getElementsByClassName("team-carousel-main")[0];
        body.innerHTML = "";
        body.appendChild(next_next_div);
        body.appendChild(prev_prev_div);
        body.appendChild(prev_div);
        body.appendChild(selected_div);
        body.appendChild(next_div);
        prev_prev_div.style.transform = "";
        prev_div.style.transform = "";
        selected_div.style.transform = "";
        next_div.style.transform = "";
        next_next_div.style.transform = "";
    })

    var prev_prev_square = document.getElementsByClassName("square-prev-prev")[0];
    var prev_square = document.getElementsByClassName("square-prev")[0];
    var selected_square = document.getElementsByClassName("square-selected")[0];
    var next_square = document.getElementsByClassName("square-next")[0];
    var next_next_square = document.getElementsByClassName("square-next-next")[0];
    prev_prev_square.classList.remove("square-prev-prev");
    prev_prev_square.classList.add("square-prev");
    prev_square.classList.remove("square-prev");
    prev_square.classList.add("square-selected");
    selected_square.classList.remove("square-selected");
    selected_square.classList.add("square-next");
    next_square.classList.remove("square-next");
    next_square.classList.add("square-next-next");
    next_next_square.classList.remove("square-next-next");
    next_next_square.classList.add("square-prev-prev");

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
    } else if (prev_div.innerHTML.includes("abhinav")) {
        name.innerHTML = "Abhinav Jain";
        desgn.innerHTML = "ML Specialist";
        insta.href = "https://instagram.com/abhinavjn";
        linkedin.href = "https://www.linkedin.com/in/abhinav-jain-4a85281b4";
    } else if (prev_div.innerHTML.includes("milan")) {
        name.innerHTML = "Milan Roy";
        desgn.innerHTML = "Adviser";
        insta.href = "https://instagram.com/milan.roy10";
        linkedin.href = "https://www.linkedin.com/in/milan-roy/";
    }
}