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