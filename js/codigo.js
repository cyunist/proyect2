
const nombre = document.getElementById("nombreEnt");
const apellido = document.getElementById("apellidoEnt");
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
const cuerpoTabla = document.getElementById("cuerpoTabla");

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
           onclick="actualizarUsuario('${usuario.id}')"
         >
          Editar
         </button>
        <td>
    </tr>`;
  });
};

// elimimar dato//

const eliminarUsuario = (id) => {

/* consulta id a eliminar en el localStrore
const eliminarUsuario = (id) => {  
  console.log(id);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  consultarUsuario(); */

  const usuario = usuarios.find((usuario) => usuario.id === id)
  console.log(usuario)
  const index = usuarios.indexOf(usuario);
  console.log(index)
  usuarios.splice(index, 1)
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  consultarUsuario();

};  

const actualizarUsuario = (id) => {
console.log(id)
}
