function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function achievements() {
    var i1 = document.getElementById("achievement-image-1");
    var i2 = document.getElementById("achievement-image-2");
    var i3 = document.getElementById("achievement-image-3");
    var i4 = document.getElementById("achievement-image-4");
    var u1 = document.getElementById("achievement-underline-1");
    var u2 = document.getElementById("achievement-underline-2");
    var u3 = document.getElementById("achievement-underline-3");
    var u4 = document.getElementById("achievement-underline-4");
    i4.style.opacity = "0";
    i1.style.opacity = "1";
    u4.style.width = 0;
    u1.style.width = "15vw";
    sleep(5000).then(() => {
        i1.style.opacity = "0";
        i2.style.opacity = "1";
        u1.style.width = 0;
        u2.style.width = "15vw"; 
        sleep(5000).then(() => {
            i2.style.opacity = "0";
            i3.style.opacity = "1";
            u2.style.width = 0;
            u3.style.width = "15vw"; 
            sleep(5000).then(() => {
                i3.style.opacity = "0";
                i4.style.opacity = "1";
                u3.style.width = 0;
                u4.style.width = "15vw";
                sleep(5000).then(() => achievements());
            });
        });
    });
}

achievements();