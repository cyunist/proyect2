
const nombre = document.getElementById("nombreEnt");
const apellido = document.getElementById("apellidoEnt");
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
const cuerpoTabla = document.getElementById("cuerpoTabla");

/*
const usuarios = localStorage.getItem("usuarios")|| [] ;
console.log(usuarios);

const agregar = () => { 
    console.log("agregarUsuaio");

}
*/

const agregar = () => {
  const usuario = {
    id: crypto.randomUUID(),
    nombre: nombre.value,
    apellido: apellido.value,
  };

  usuarios.push(usuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  mostrar();
};


// mostrar los usuarios//

const mostrar = () => {   
    console.log(usuarios);
}; 
