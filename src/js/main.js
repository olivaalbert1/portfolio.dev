import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init({
    easing: 'ease-out-quart',
    delay: 0,
    duration: 750
})

const boton = document.querySelector('.boton');

boton.addEventListener('click', () => {
  boton.classList.add('copiado');

  setTimeout(() => {
    boton.classList.remove('copiado');
  }, 1500);
});

function copiarAlPortapapeles(texto) {
  navigator.clipboard.writeText(texto)
    .then(() => {
      console.log("¡Texto copiado al portapapeles!");
    })
    .catch((error) => {
      console.log("Error al copiar al portapapeles:", error);
    });
}

const botonCopiar = document.getElementById("emailButton");
botonCopiar.addEventListener("click", () => {
  const textoACopiar = "oliva.albert@gmail.com";
  copiarAlPortapapeles(textoACopiar);
});
