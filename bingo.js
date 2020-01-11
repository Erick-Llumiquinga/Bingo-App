const b = new Array();
const i = new Array();
const n = new Array();
const g = new Array();
const o = new Array();
const numerosUsados = new Array();
const tabla1 = [].concat(b, i, n, g, o);
let total = 0;
iniciar = () => {
  GenerarNumeros();
};
mi_funcion_principal = () => {
  fnRandom = (x, y) => Math.floor(Math.random() * (x - y)) + y;
  while (total < 25) {
    let preparado1 = fnRandom(1, 15);
    let preparado2 = fnRandom(16, 30);
    let preparado3 = fnRandom(31, 45);
    let preparado4 = fnRandom(46, 60);
    let preparado5 = fnRandom(61, 75);

    if (b.includes(preparado1) === false && b.length < 5) {
      b.push(preparado1);
      total += 1;
    }
    if (i.includes(preparado2) === false && i.length < 5) {
      i.push(preparado2);
      total += 1;
    }
    if (n.includes(preparado3) === false && n.length < 5) {
      n.push(preparado3);
      total += 1;
    }
    if (g.includes(preparado4) === false && g.length < 5) {
      g.push(preparado4);
      total += 1;
    }
    if (o.includes(preparado5) === false && o.length < 5) {
      o.push(preparado5);
      total += 1;
    }
  }
};
mi_funcion_principal();
GenerarNumeros = () => {
  for (let i = 0; i < 25; i++) {
    if (i == 12) continue;
    generarCasilla(i);
  }
};

function generarCasilla(num25) {
  let casillaNum = "sq" + num25;
  let numero = tabla1[num25];
  document.getElementById(casillaNum).value = numero;
}
function lanzar() {
  if (numerosUsados.length < 75) {
    let misbolas = Math.floor(Math.random() * 75) + 1;
    if (numerosUsados.includes(misbolas)) lanzar();
    else {
      numerosUsados.push(misbolas);
      if (misbolas >= 1 && misbolas <= 15)
        document.getElementById("lanzar").innerHTML = "B" + misbolas;
      else if (misbolas >= 16 && misbolas <= 30)
        document.getElementById("lanzar").innerHTML = "I" + misbolas;
      else if (misbolas >= 31 && misbolas <= 45)
        document.getElementById("lanzar").innerHTML = "N" + misbolas;
      else if (misbolas >= 46 && misbolas <= 60)
        document.getElementById("lanzar").innerHTML = "G" + misbolas;
      else document.getElementById("lanzar").innerHTML = "O" + misbolas;
      document.getElementById("numerosLlamados").innerHTML = numerosUsados;
    }
  }
}
