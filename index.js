
  //script login midia social 

    var modal = document.getElementById('id01');

    // Quando o usuário clicar em qualquer lugar fora do modal, feche-o

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }  
  
  //script menu lateral 

      function openNav() {
      document.getElementById("menuLateralMobile").style.width = "100%"; // DEFINIR LARGURA AO CLICAR NO BOTÃO MENU VERSÃO MOBILE
     
    }

    function closeNav() {
      document.getElementById("menuLateralMobile").style.width = "0";
    }

  
  
//carrossel banner principal
    
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


//função para cadastrar email

function cadastrarNewsletter() {
	let email = document.getElementById("campo-email").value

	alert("Obrigado por se cadastrar")
	console.log(email)
}


// jQuery usado no rodapé para ocultar conteúdo dos itens Formas de Pagamento e  Redes Sociais

$(document).ready(function(){
  $("button2").click(function(){
    $(".bandeiras").toggle();
  });



  $("button3").click(function(){
    $(".redes").toggle();
  });
});


// outra forma de uso do jQuery, agora no conteúdo do campo Institucional

$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });
});



// alterar comportamento do conteúdo de Institucional dependendo do tamanho de tela 


$(window).resize(function(){    
    if (window.matchMedia("(max-width: 480px)").matches) {
    
    $("#flip").show();
    $("#pk").hide();
    $("#panel").hide();
      
    }
     else {
      $("#flip").hide();
      $("#pk").show();
      $("#panel").show();
    }
}).resize()//  dispara no carregamento da página



// alterar comportamento do conteúdo de Formas de Pagamento
$(window).resize(function(){    
    if (window.matchMedia("(max-width: 480px)").matches) {
    
    $("button2").show();
    $("pk1").hide();
    $(".bandeiras").hide();
    
      
    }
     else {
      $("button2").hide();
      $("pk1").show();	
      $(".bandeiras").show();
      
    }
}).resize()


