
let boton = document.querySelector(".unomas");
boton.addEventListener("click", async () => {
  try {
    const respuesta = await fetch("https://api.dadjokes.io/api/random/joke");
    const datos = await respuesta.json();
    let resp = datos.body[0].setup;
    document.getElementById("contenedor").textContent = resp;
  } catch (error) {
    console.log(error);
  }
});








