//POST DATA IN DATABASE
const http = new XMLHttpRequest();

const API_URL = "http://localhost:8001/server/bingo";

postDataPersona = () => {
  let tabla = "persona";
  let persona_nombre = document.getElementById("persona_nombre").value;
  let persona_email = document.getElementById("persona_email").value;
  let persona_clave = document.getElementById("persona_clave").value;

  let data = `{
    "tabla": "${tabla}", 
    "datos":
      {
        "tipo_persona_id": 2,
        "persona_nombre": "${persona_nombre}",
        "persona_email": "${persona_email}",
        "persona_clave": "${persona_clave}"
      }
   }`;

  http.open("POST", API_URL, true);
  http.setRequestHeader("Content-Type", "application/json");

  if (persona_nombre == "" || persona_email == "" || persona_clave == "") {
    alert("Complete todos los datos para continuar...");
  } else {
    http.send(data);
    alert("Se ha registrado correctamente");
    window.location.assign("./login.html");
  }
};

//GET DATA IN DATABASE
// getDataPersona = () => {
//   http.open('GET', API_URL+"?tabla=persona")

//   http.responseType = 'json'

//   http.onload = () => {
//     var datos = (http.response).datos[0].persona_nombre
//     console.log(datos);
//     document.getElementById('test').innerHTML = datos;
//   }

//   http.send()
// }
