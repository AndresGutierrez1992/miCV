let temaDia = document.getElementById("botondia");
const body = document.querySelector("body");

cargarTema();

function cargarTema() {
  const temaclaro = localStorage.getItem("temaclaro");
  if (temaclaro == "false") {
  }else if(temaclaro=="true"){
    body.classList.add("dia");
  }
}

function guardarTema(valor) {
  localStorage.setItem("temaclaro", valor);
}

temaDia.addEventListener("click", (luz) => {
  body.classList?.toggle("dia");
  guardarTema(body.classList.contains("dia"));
});
