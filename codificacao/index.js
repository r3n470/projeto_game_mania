
  /*script login midia social */ 

    var modal = document.getElementById('id01');

    /* Quando o usuário clicar em qualquer lugar fora do modal, feche-o*/

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }  
  
  /*script menu lateral */

      function openNav() {
      document.getElementById("menuLateralMobile").style.width = "100%"; /* DEFINIR LARGURA AO CLICAR NO BOTÃO MENU VERSÃO MOBILE */
    }

    function closeNav() {
      document.getElementById("menuLateralMobile").style.width = "0";
    }
  
/*carrossel banner principal*/
    
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("bannerPromo");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000); // intervalo em milisegundos para alteração da imagem do banner Principal
}



  /* slide banner */

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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

