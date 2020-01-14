let b=new Array();
let i=new Array();
let n=new Array();
let g=new Array();
let o=new Array();
const numerosUsados = new Array();

let total=0;
fnRandom = (x,y) =>(Math.floor(Math.random()*(x-y))+y)
iniciar = () =>{GenerarNumeros()};
mi_funcion_principal = () => {
    b=new Array();
    i=new Array();
    n=new Array();
    g=new Array();
    o=new Array();
    total=0
    
    while (total < 24){

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
        }
    
}
mi_funcion_principal()
let tabla1 = new Array;
GenerarNumeros =()=> { 
    for (let i = 0; i < 24; i++) {
        if (i == 12)
            continue;
        generarCasilla(i);
    }
}
const exportar = () =>{
    
    mi_funcion_principal();
    tabla1=[].concat(b, i,n,g,o);
    return tabla1
    
}
const tabla = () =>{
    return tabla1;
}
exports.exportar = exportar;
exports.tabla = exportar;