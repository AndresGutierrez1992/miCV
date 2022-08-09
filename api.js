const  obtenerChistes= async()=>{
    try {
     //traer respuesta
     const respuesta = await fetch("https://api.dadjokes.io/api/random/joke");
     //traer el json o objeto. hay que poner "await antes de respuesta sino no da"
     const  datos = await respuesta.json();
     //aceder al chiste
     let resp = datos.body[0].setup;
     document.getElementById("contenedor").innerHTML = resp;
    } catch (error) {
     console.log(error);
    }

   

   }

   obtenerChistes();