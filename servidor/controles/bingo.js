let b=new Array();
let i=new Array();
let n=new Array();
let g=new Array();
let o=new Array();
let b1=new Array();
let i1=new Array();
let n1=new Array();
let g1=new Array();
let o1=new Array();
let b2=new Array();
let i2=new Array();
let n2=new Array();
let g2=new Array();
let o2=new Array();
let b3=new Array();
let i3=new Array();
let n3=new Array();
let g3=new Array();
let o3=new Array();
const numerosUsados = new Array();
let tabla1 = new Array;
let tabla2 = new Array;
let tabla3 = new Array;
let tabla4 = new Array;
let total=0;
fnRandom = (x,y) =>(Math.floor(Math.random()*(x-y))+y)
mi_funcion_principal = () => {

    while (total < 100){

            let preparado1= fnRandom(1,15)
            let preparado2= fnRandom(16,30)
            let preparado3= fnRandom(31,45)
            let preparado4= fnRandom(46,60)
            let preparado5= fnRandom(61,75)

            if (b.includes(preparado1)===false && b.length<5){
                b.push(preparado1)
                total+=1
            }
            if (i.includes(preparado2)===false && i.length<5){
                i.push(preparado2)
                total+=1
            }
            if (n.includes(preparado3)===false && n.length<5){
                n.push(preparado3)
                total+=1
            }
            if (g.includes(preparado4)===false && g.length<5){
                g.push(preparado4)
                total+=1
            }
            if (o.includes(preparado5)===false && o.length<5){
                o.push(preparado5)
                total+=1
            }
            preparado1= fnRandom(1,15)
            preparado2= fnRandom(16,30)
            preparado3= fnRandom(31,45)
            preparado4= fnRandom(46,60)
            preparado5= fnRandom(61,75)
            if (b1.includes(preparado1)===false && b1.length<5){
                b1.push(preparado1)
                total+=1
            }
            if (i1.includes(preparado2)===false && i1.length<5){
                i1.push(preparado2)
                total+=1
            }
            if (n1.includes(preparado3)===false && n1.length<5){
                n1.push(preparado3)
                total+=1
            }
            if (g1.includes(preparado4)===false && g1.length<5){
                g1.push(preparado4)
                total+=1
            }
            if (o1.includes(preparado5)===false && o1.length<5){
                o1.push(preparado5)
                total+=1
            }
            preparado1= fnRandom(1,15)
            preparado2= fnRandom(16,30)
preparado3= fnRandom(31,45)
preparado4= fnRandom(46,60)
preparado5= fnRandom(61,75)
            if (b2.includes(preparado1)===false && b2.length<5){
                b2.push(preparado1)
                total+=1
            }
            if (i2.includes(preparado2)===false && i2.length<5){
                i2.push(preparado2)
                total+=1
            }
            if (n2.includes(preparado3)===false && n2.length<5){
                n2.push(preparado3)
                total+=1
            }
            if (g2.includes(preparado4)===false && g2.length<5){
                g2.push(preparado4)
                total+=1
            }
            if (o2.includes(preparado5)===false && o2.length<5){
                o2.push(preparado5)
                total+=1
            }
            preparado1= fnRandom(1,15)
preparado2= fnRandom(16,30)
preparado3= fnRandom(31,45)
preparado4= fnRandom(46,60)
preparado5= fnRandom(61,75)
            if (b3.includes(preparado1)===false && b3.length<5){
                b3.push(preparado1)
                total+=1
            }
            if (i3.includes(preparado2)===false && i3.length<5){
                i3.push(preparado2)
                total+=1
            }
            if (n3.includes(preparado3)===false && n3.length<5){
                n3.push(preparado3)
                total+=1
            }
            if (g3.includes(preparado4)===false && g3.length<5){
                g3.push(preparado4)
                total+=1
            }
            if (o3.includes(preparado5)===false && o3.length<5){
                o3.push(preparado5)
                total+=1
            }
        }           
}
mi_funcion_principal();
tabla1 = [].concat(b, i,n,g,o)     
tabla2 = [].concat(b1, i1,n1,g1,o1)
tabla3 = [].concat(b2, i2,n2,g2,o2)
tabla4 = [].concat(b3, i3,n3,g3,o3)

GenerarNumeros =()=> { 
    for (let i = 0; i < 25; i++) {
        if (i == 12)
            continue;
        generarCasilla(i);
    }
}
const exportar = () =>{
    
    mi_funcion_principal();
    console.log(tabla1)
    return tabla1
}
const exportar1 = () =>{
    
    mi_funcion_principal();
    console.log(tabla2)
    return tabla2
}
const exportar2 = () =>{
    
    mi_funcion_principal();
    console.log(tabla3)
    return tabla3
}
const exportar3 = () =>{
    
    mi_funcion_principal();
    console.log(tabla4)
    return tabla4
}
const tabla = () =>{
    return ;
}
exports.exportar = exportar;
exports.exportar1 = exportar1;
exports.exportar2 = exportar2;
exports.exportar3 = exportar3;
function generarCasilla(num25) {
    let casillaNum = "sq" + num25;
    let numero = (tabla1[num25])
    document.getElementById(casillaNum).value = numero;
}
function lanzar() {
    if(numerosUsados.length<75){
        let misbolas = Math.floor(Math.random() * 75) + 1;
        if (numerosUsados.includes(misbolas))
            lanzar();
        else {
            numerosUsados.push(misbolas);
            if (misbolas >= 1 && misbolas <= 15)
                document.getElementById("lanzar").innerHTML = 'B' + misbolas;
            else if (misbolas >= 16 && misbolas <= 30)
                document.getElementById("lanzar").innerHTML = 'I' + misbolas;
            else if (misbolas >= 31 && misbolas <= 45)
                document.getElementById("lanzar").innerHTML = 'N' + misbolas;
            else if (misbolas >= 46 && misbolas <= 60)
                document.getElementById("lanzar").innerHTML = 'G' + misbolas;
            else
                document.getElementById("lanzar").innerHTML = 'O' + misbolas;
            document.getElementById("numerosLlamados").innerHTML = numerosUsados;
        }
    }
};