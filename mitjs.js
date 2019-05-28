
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






//hovedprogramdel


//document.getElementById("tilIstanbul").addEventListener("click",function () {
//    document.getElementById("insta").scrollIntoView(true);
//});




document.getElementById("1").addEventListener("click",function() {
    document.getElementById("2").scrollIntoView(true);
    
});
document.getElementById("2").addEventListener("click",function() {
    document.getElementById("3").scrollIntoView(true);
});
document.getElementById("3").addEventListener("click",function() {
    document.getElementById("0").scrollIntoView(true);
});



document.getElementById("dom1").addEventListener("click",function() {  
    document.getElementById("22").scrollIntoView(true);
});
document.getElementById("22").addEventListener("click",function() {
    document.getElementById("33").scrollIntoView(true);
});
document.getElementById("33").addEventListener("click",function() {
    document.getElementById("44").scrollIntoView(true);
});
document.getElementById("44").addEventListener("click",function() {
    document.getElementById("00").scrollIntoView(true);
});






