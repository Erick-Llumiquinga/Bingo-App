const http = new XMLHttpRequest();

const API_URL = "http://localhost:8001/server/login";

getDataLogin = () => {
  let usuario = document.getElementById("persona_usuario").value;
  let contraseña = document.getElementById("persona_clave").value;

  let data = {
    usuario: usuario,
    clave: contraseña
  }

  http.open("POST", API_URL);
  http.setRequestHeader("Content-Type", "application/json");


  http.onreadystatechange = function(){
    if(http.readyState === 4){

      let response = JSON.parse(http.response) 
      if(response.mensaje != 'inc'){
        window.location.assign('./home.html')
      }
      else
      {
        alert('Datos Incorrectos')
      }
    }
  }

  http.send(JSON.stringify(data));
};
