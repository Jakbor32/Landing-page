// Slider
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,6000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}
// Slider - opacity onscroll
window.onscroll = function() {
    var slides = document.getElementById("slides");
    slides.style.opacity =  (1.3 - window.pageYOffset / 700);
    console.log(window.pageYOffset);
     
}
   
   