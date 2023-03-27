

const idEnt = document.getElementById("idEnt");
const nombre = document.getElementById("nombreEnt");
const apellido = document.getElementById("apellidoEnt");
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
const cuerpoTabla = document.getElementById("cuerpoTabla");

const btnAgregar = document.getElementById("btnAgregar");
const btnActualizar = document.getElementById("btnActualizar");
btnActualizar.style.display="none";


/*
const usuarios = localStorage.getItem("usuarios")|| [] ;
console.log(usuarios);

const agregar = () => { 
    console.log("agregarUsuario");

}
*/

const agregarUsuario = () => {
  const usuario = {
    id: crypto.randomUUID(),
    nombre: nombre.value,
    apellido: apellido.value,
  };

  usuarios.push(usuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  consultarUsuario();
  idEnt.value = "";
  nombre.value = ""
  apellido.value = ""
};

// consultar los datos//

const consultarUsuario = () => {
  
  cuerpoTabla.innerHTML = "";
  usuarios.forEach((usuario) => {
    cuerpoTabla.innerHTML += `<tr>
        <th scope="row">${usuario.id}</th>
        <td>${usuario.nombre}</td>
        <td>${usuario.apellido}</td>
        
        <td>
         <button
           type="button"
           class="btn btn-danger"
           onclick="eliminarUsuario('${usuario.id}')"
         >
          Eliminar
         </button>
        <td>

        <td>
         <button
           type="button"
           class="btn btn-warning"
           onclick="editarUsuario('${usuario.id}')"
         >
          Editar
         </button>
        <td>
    </tr>`;
  });
};

// elimimar dato del usuario//


/* consulta id a eliminar en el localStrore

const eliminarUsuario = (id) => {  
  console.log(id);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  consultarUsuario(); */

const eliminarUsuario = (id) => {
  const usuario = usuarios.find((usuario) => usuario.id === id)
  console.log(usuario)
  const index = usuarios.indexOf(usuario);
  console.log(index)
  usuarios.splice(index, 1)
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  consultarUsuario();

};  

// muestra el dato a corregir lo editar//

const editarUsuario = (id) => {
  btnAgregar.style.display="none";
  btnActualizar.style.display="inline";

  const usuario = usuarios.find((usuario) => usuario.id === id)
  idEnt.value = usuario.id;
  nombre.value = usuario.nombre;
  apellido.value = usuario.apellido;
}

// Actualizar la informacion del usuario//

const ActualizarUsuario = () => {

  console.log("entro")
  const usuario = usuarios.find((usuario) => usuario.id === idEnt.value)
  usuario.nombre = nombre.value;
  usuario.apellido = apellido.value;
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  consultarUsuario();
  idEnt.value = "";
  nombre.value = ""
  apellido.value = ""
  btnAgregar.style.display="inline";
  btnActualizar.style.display="none";
}