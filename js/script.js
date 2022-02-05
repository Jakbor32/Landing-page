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

    window.addEventListener('onload',go());

function go(){
    toTop.onclick = function() {
        var toTop = document.getElementById("toTop");
        window.scrollTo({ top: -1 * pageYOffset, behavior: 'smooth' });
   
    };
}
    window.addEventListener('scroll', function() {
        if (window.pageYOffset < document.body.scrollHeight / 2) {
            toTop.style.display = "none";
            toTop.classList.remove("magicButton");
        }
        else {
            toTop.classList.add("magicButton");
            toTop.style.display = "block"
    }
} , false);
var i = 1;

function ChangePhoto(){
    if(i==8){
        i=1;
    }
    var photo = document.getElementById("imgSrc");
    photo.src = `/images/gallery${++i}.jpg`;
   
}
function ChangePhotoUndo(){
    if(i==1){
        i=8;
    }
    var photo = document.getElementById("imgSrc");
    photo.src = `/images/gallery${--i}.jpg`;
}
var fade = document.getElementById("fade");
fade.classList.add("fade");
fade.classList.remove("fade");