document.featurePolicy.allowedFeatures();
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
// Movement by button
var button = document.getElementById("button");
button.onclick = function(){
    window.scrollTo({top:1 * 760,behavior: 'smooth'});
    //console.log(document.body.scrollHeight);   <-- checks height of the page
}