// Source: https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_slideshow_self
function changeSlide(type, n) {
    var image = document.getElementsByClassName(type + " container");
    var images = document.getElementsByClassName(type + " slides");
    n = n % images.length;
    
    for (i = 0; i < images.length; i++) {
        images[i].style.opacity = "0.4";
    }
    images[n].style.opacity = "1";

    var src = images[n].getAttribute("src");
    image[0].setAttribute("src", src);
}

function switchToSlide(type, n) {
    var image = document.getElementsByClassName(type + " container");
    var images = document.getElementsByClassName(type + " slides");
    
    var i;
    for (i = 0; i < images.length; i++) {
        if (images[i].getAttribute("src") == image[0].getAttribute("src")) {
            changeSlide(type, i + n);
            return;
        }
    }
}

function expand(type) {
    var caret = document.getElementsByClassName(type + " caret");
    if (caret[0].style.transform === "rotate(180deg)") {
        caret[0].style.transform = "rotate(0deg)";
    } else {
        caret[0].style.transform = "rotate(180deg)";
    }

    var section = document.getElementsByClassName(type + " expand");
    if (section[0].style.display === "flex") {
        section[0].style.display = "none";
    } else {
        section[0].style.display = "flex"
    }
}