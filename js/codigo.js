
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

// mostrar los usuarios//

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
          onclick="eliminarUusario('${usuario.id}')"
        >
          Eliminar
        </button><td>
    </tr>`;
  });
};

// elimimar usuarios//

const eliminarUusario = (id) => {
  console.log(id);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  consultarUsuario();
};
