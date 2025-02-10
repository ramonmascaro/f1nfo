
  (function ($) {
  
  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  
  })(window.jQuery);

/* BOTON PARA ALTERNAR CLASIFICACIÓN PILOTOS/EQUIPOS */

function mostrarTabla(tipo) {
  // Obtén las tablas y botones
  const tablaPilotos = document.getElementById('tabla-pilotos');
  const tablaEquipos = document.getElementById('tabla-equipos');
  const btnPilotos = document.getElementById('btn-pilotos');
  const btnEquipos = document.getElementById('btn-equipos');

  // Oculta ambas tablas
  tablaPilotos.classList.add('oculto');
  tablaEquipos.classList.add('oculto');

  // Quita la clase activa de ambos botones
  btnPilotos.classList.remove('activo');
  btnEquipos.classList.remove('activo');

  // Muestra la tabla seleccionada y activa el botón correspondiente
  if (tipo === 'pilotos') {
    tablaPilotos.classList.remove('oculto');
    btnPilotos.classList.add('activo');
  } else if (tipo === 'equipos') {
    tablaEquipos.classList.remove('oculto');
    btnEquipos.classList.add('activo');
  }
}

