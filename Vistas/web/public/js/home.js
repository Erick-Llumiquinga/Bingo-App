const http = new XMLHttpRequest();

const API_URL = "http://localhost:8001/server/bingo";

document.getElementById("persona_nombre").innerHTML = "Bienvenido " + localStorage.getItem("persona_nombre");

logout = () => {
  alert("Ha cerrado sesión correctamente");
  window.location.assign("./index.html");
};
