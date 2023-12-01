    // Función para cargar imágenes de manera diferida (lazy loading)
    function lazyLoadImages() {
      const images = document.querySelectorAll(".imagenb img");

      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const image = entry.target;
            image.src = image.dataset.src;
            observer.unobserve(image);
          }
        });
      }, options);

      images.forEach((image) => {
        observer.observe(image);
      });
    }

    // Función para activar/desactivar imágenes al hacer clic en "MOSTRAR MÁS"
    function toggleImages(index) {
      const imagenes = document.querySelectorAll(`.imagenesb:nth-child(${index}) .imagenb img`);

      imagenes.forEach((imagen) => {
        imagen.dataset.src = imagen.src; // Guardar la URL en el atributo de datos
        imagen.removeAttribute("src"); // Quitar la URL para detener la carga inicial
      });

      lazyLoadImages(); // Llamar a lazyLoadImages después de actualizar las imágenes
    }

    // Llamar a lazyLoadImages al cargar la página
    document.addEventListener("DOMContentLoaded", lazyLoadImages);
// -------------------------------------------------------------------------------

// funcion menu para celular
  $(document).ready(function () {
    // Función para mostrar/ocultar el menú al hacer clic en el botón
    $(".menu-btn").click(function () {
      $(".nv1 ul").slideToggle();
    });

    // Asegúrate de que el menú se muestre al redimensionar la ventana en caso de que se haya ocultado
    $(window).resize(function () {
      if ($(window).width() > 768) {
        $(".nv1 ul").show();
      } else {
        $(".nv1 ul").hide();
      }
    });
  });

var per = document.getElementById("personas");
var emp = document.getElementById("empresas");

function elec(){
	per.style.display = "block";
	emp.style.display = "none";
}
function elec1(){
	emp.style.display = "block";
	per.style.display = "none";
}

// -------------------------------------------funcion para ver los archivos

    // Espera a que el DOM esté completamente cargado
    document.addEventListener("DOMContentLoaded", function () {
      // Obtén todas las imágenes
      var imagenes = document.querySelectorAll('img');

      // Itera sobre cada imagen
      imagenes.forEach(function (imagen) {
        // Agrega un evento de clic a cada imagen
        imagen.addEventListener('click', function () {
          // Crea un nuevo elemento <a> y establece su href con la URL de la imagen
          var aElemento = document.createElement('a');
          aElemento.setAttribute('data-fancybox', 'gallery');
          aElemento.setAttribute('href', imagen.src);

          // Clona la imagen y agrega la imagen clonada al nuevo elemento <a>
          var imagenClonada = imagen.cloneNode(true);
          aElemento.appendChild(imagenClonada);

          // Abre Fancybox con la imagen
          $.fancybox.open(aElemento);
        });
      });
    });
	

// funcion para descripcion de publicaciones
function toggleImages(index) {
  var descripcion = document.querySelectorAll('.descripcionb')[index - 1];
  var imagenes = document.querySelectorAll('.imagenesb')[index - 1];

  if (descripcion.style.display === 'none' || descripcion.style.display === '') {
    descripcion.style.display = 'block';
    imagenes.style.display = 'none';
  } else {
    descripcion.style.display = 'none';
    imagenes.style.display = 'flex';
  }
}


// funcion para optimizar navegacion
function verificarClaseX() {
  var bodyElement = document.body;
  var classesToHide = ['1', '2', '3', '4', '5'];

  // Iterar sobre las clases y ocultar los elementos correspondientes
  classesToHide.forEach(function(className) {
    if (bodyElement.classList.contains('x' + className)) {
      var elementToHide = document.getElementsByClassName(className);
      if (elementToHide.length > 0) {
        elementToHide[0].style.display = "none";
      }
    }
  });
}

// Llamar a la función al cargar la página
window.onload = function (){
	verificarClaseX();
	mostrarFormulario();

}


// -----------------------------------------tipo de formulario

function vf(){
	window.location.href = "novedades.html";
}
function redi(numero) {
    localStorage.setItem("valorf", numero);
    window.location.href = "formularios.html";
}

function mostrarFormulario() {
    var formNumero = localStorage.getItem("valorf");
    var formulario = document.getElementById("fm" + formNumero);

    if (formulario !== null) {
        formulario.style.display = "block";
    }
}


