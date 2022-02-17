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
        //console.log(window.pageYOffset);
     
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
    photo.src = `images/gallery${++i}.jpg`;
   
}
function ChangePhotoUndo(){
    if(i==1){
        i=8;
    }
    var photo = document.getElementById("imgSrc");
    photo.src = `images/gallery${--i}.jpg`;
}

const checkbox = document.querySelector("#toggle");
var toggleImage = document.getElementById("toggleImage");
const navLinks = document.querySelector(".nav-links");

checkbox.addEventListener('change', function() {
    if (this.checked) {
        toggleImage.src = `images/Letter_x.svg`;
        body.style.overflow = "hidden";
        
        
    }else{
        toggleImage.src = `images/menu.svg`;
        body.style.overflow = "visible";
       
        
        
        
    }
   
    

  });
  const header = document.getElementById("header");
  const logostyle = document.querySelector(".logo");
  const emptyBox = document.querySelector(".empty-box");
  const body = document.querySelector("body");
  
  const headerafter = document.querySelector(".headerafter");
  
  const handleScroll = () => {
    if (window.pageYOffset>header.offsetHeight) {
        
        header.classList.add("headerafter");
        header.style.position = "fixed";
        emptyBox.style.display = "block";
        logostyle.style.width = "5rem";
        
        
        
       
    
    }
    else{
            
            header.classList.remove("headerafter");
            header.style.position = "relative";
            logostyle.style.width = "";
            emptyBox.style.display = "none";
            if(checkbox.checked){
                emptyBox.style.display = "block";
                   
            }
        
            
            
           
            
        console.log(window.innerHeight);
        console.log(window.pageYOffset);
        console.log(header.offsetHeight);
    }}
    
   
    window.addEventListener('scroll', handleScroll);