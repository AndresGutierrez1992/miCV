let consulta = "";
let pagina = 1;

let anterior = document.querySelector(".anterior");
let siguiente = document.querySelector(".siguiente");

siguiente.addEventListener("click", () => {
  //document.querySelector(".munecos").textContent="";
  if (pagina < 43) {
    pagina += 1;
    obtenerRick();
  }
});

anterior.addEventListener("click", () => {
  //document.querySelector(".munecos").textContent="";
  if (pagina > 1) {
    pagina -= 1;
    obtenerRick();
  }
});

const obtenerRick = async () => {
  try {
    const resultado = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${pagina}&${consulta}`
    );
    const elementos = await resultado.json();

    let personajes = "";

     //let fragment = document.createDocumentFragment();
    // let contenedor = document.querySelector(".contenedor");

    elementos.results.forEach((personaje) => {

      // const div = document.createElement("div");
      // div.classList.add("munecos");

      // const h5 =document.createElement("h5");
      // h5.classList.add("nombre");
      // h5.textContent = personaje.name;

      // const img = document.createElement("img");
      // img.classList.add("imagen");
      // img.src = personaje.image;

      // const h4 = document.createElement("h4");
      // h4.classList.add("genero");
      // h4.textContent=personaje.gender;

      // const h42 = document.createElement("h4");
      // h42.classList.add("estado");
      // h42.textContent = personaje.status;

      // div.appendChild(h5);
      // div.appendChild(img);
      // div.appendChild(h4);
      // div.appendChild(h42);

      // fragment.appendChild(div);

      personajes += `<div class="munecos">
       <h5 class="nombre"> ${personaje.name} </h5> 
       <img class="imagen"src="${personaje.image}" alt="">
      <h4 class="genero">${personaje.gender}</h4>
      <h4 class="estado">${personaje.status}</h4>
      </div> `;
    });
    //contenedor.appendChild(fragment);
    document.querySelector(".contenedor").innerHTML = personajes;
  } catch (error) {
    console.log(error);
  }
};

let todos = document.querySelector(".todos");
let genderless = document.querySelector(".genderless");
let mujeres = document.querySelector(".mujeres");
let hombres = document.querySelector(".hombres");
let vivos = document.querySelector(".vivos");
let muertos = document.querySelector(".muertos");

todos.addEventListener("click", () => {
  //document.querySelector(".munecos").textContent="";
  consulta = "";
  obtenerRick();
});

genderless.addEventListener("click", () => {
  //document.querySelector(".munecos").textContent="";
  consulta = "gender=genderless";
  obtenerRick();
});

mujeres.addEventListener("click", () => {
  //document.querySelector(".munecos").textContent="";
  consulta = "gender=female";
  obtenerRick();
});

hombres.addEventListener("click", () => {
  //document.querySelector(".munecos").textContent="";
  consulta = "gender=male";
  obtenerRick();
});

vivos.addEventListener("click", () => {
  //document.querySelector(".munecos").textContent="";
  consulta = "status=alive";
  obtenerRick();
});

muertos.addEventListener("click", () => {
  //document.querySelector(".munecos").textContent="";
  consulta = "status=dead";
  obtenerRick();
});