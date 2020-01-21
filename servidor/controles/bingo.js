const numerosUsados = new Array();
function lanzar() {
    if(numerosUsados.length<90){
        let misbolas = Math.floor(Math.random() * 65) + 1;
        if (numerosUsados.includes(misbolas))
            lanzar();
        else {
            numerosUsados.push(misbolas);
        }
    }
};
const exportar = () =>{
    lanzar();
    
    return numerosUsados[numerosUsados.length-1];
};
const exportar2 = () =>{
    
    return numerosUsados;
};

exports.exportar = exportar;
exports.exportar2 = exportar2;