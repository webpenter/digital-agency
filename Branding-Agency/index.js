// sticky header
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-90px";
    }
}

// carousel items auto change

var myCarousel = document.querySelector('#carouselExampleControlsNoTouching');
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 2000
});


