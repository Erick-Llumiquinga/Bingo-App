const http = new XMLHttpRequest();

const API_URL = "http://localhost:8001/server/bingo";

getDataLogin = () => {
  let correo = document.getElementById("persona_email").value;
  let contraseña = document.getElementById("persona_clave").value;

  http.open("GET", API_URL + "?tabla=persona");

  http.responseType = "json";

  http.onload = () => {
    let datos = http.response.datos;
    let correoBD;
    let contraseñaBD;
    let nombreBD;

    datos.forEach(element => {
      if (
        element.persona_email == correo &&
        element.persona_clave == contraseña
      ) {
        nombreBD = element.persona_nombre;
        correoBD = element.persona_email;
        contraseñaBD = element.persona_clave;
      }
    });

    if (correo === correoBD) {
      if (contraseña === contraseñaBD) {
        localStorage.setItem("persona_nombre", nombreBD);
        window.location.assign("./home.html");
      }
    } else {
      alert("Datos incorrectos, intentelo nuevamente");
    }
  };

  http.send();
};
