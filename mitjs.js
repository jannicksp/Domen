
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
function erSynlig(elementId){
    var elementBoks = document.getElementById(elementId).getBoundingClientRect();
    var halvtredsPct = elementBoks.height*0.5;
    var start = window. innerHeight-halvtredsPct;
    if(elementBoks.top <= start && elementBoks.bottom -halvtredsPct > 0 ){
        return true;
    } else{
        return false;
    }
}


function aktiverMultimedier(elementIdListe, AVIdListe){
    for (var i=0; i < elementIdListe.length; i++){
        if (erSynlig(elementIdListe[i])){
          document.getElementById(AVIdListe[i]).play();  
        }
        else{
            document.getElementById(AVIdListe[i]).pause();
        }
    }
    
}


//hovedprogramdel
var elementIdListe =["paris","istanbul","firenze","video"];
var AVIdListe =["bouncy", "walker","funky","video"];

window.addEventListener("scroll", function(){
    aktiverMultimedier (elementIdListe,AVIdListe);
});

document. getElementById("tilVideo").addEventListener("click",function () {
    document. getElementById("video").scrollIntoView(true);
});