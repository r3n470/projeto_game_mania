
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
  