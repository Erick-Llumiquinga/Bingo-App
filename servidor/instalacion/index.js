const express = require("express"),
  bodyParser = require("body-parser"),
  PORT = 8001;

let app = express(),
  rutas = require("../rutas/ruta");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Allow", "GET, POST, PUT, DELETE");
  next();
});

app.use("/server", rutas);

app.listen(PORT, () => {
  console.log(`El servicio está funcionando en el puerto ${PORT}`);
});
