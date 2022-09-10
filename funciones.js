// Idea: convertidor de unidades (kilos a libras y viceversa, millas a metros, etc)


let tipoOperacion = alert("Bienvenido");
let salir = false;
let resultado;
class conversion{
    constructor(tipoIn,numero,result){
        this.tipoIn = tipoIn;
        this.numero = numero;
        this.resultado = result;
    }
}

const historial = [];

function menuInicial(){
    while (!salir){
        tipoOperacion = prompt("Ingrese el tipo de operacion: 1)Distancia, 2)Peso, 3)Para ver el historial,4)Salir");
        switch (tipoOperacion){
            case "1":
                console.log("Modo conversion de distancias");
                operar();
                break;
            case "2":
                console.log("Modo conversion de pesos");
                operar();
                break;
            case "3":
                console.log("Modo vista de historial");
                console.log(historial);
                operar();
                break;
            case "4":
                console.log("Adios");
                salir = true;
                break;
            default:
                alert("Error en tipo de operacion, intentar de nuevo");
                break;
        }
    }
}

menuInicial();

function operar(){
if (tipoOperacion == 1){
    let unidad = prompt("Ingrese la unidad que desea ingresar: 1)Metro,2)Milla ");
    while (unidad != 1 && unidad != 2){
        unidad = prompt("Ingrese la unidad que desea ingresar: 1)Metro,2)Milla");
    }
    if (unidad == 1){
        let aConvertir = prompt("Ingrese su valor en metros: ");
        resultado = convertir(aConvertir,"Metro");
        const operacion = new conversion("Metro",aConvertir,resultado);
        historial.push(operacion);
    }
    else if (unidad == 2) {
        let aConvertir = prompt("Ingrese su valor en millas: ");
        resultado = convertir(aConvertir,"Milla");
        const operacion = new conversion("Milla",aConvertir,resultado);
        historial.push(operacion);
    }
    alert("Su resultado es: " + resultado);
}
else if (tipoOperacion == 2){
    let unidad = prompt("Ingrese la unidad que desea ingresar: 1)Gramo, 2)Libra");
    while (unidad != 1 && unidad != 2){
        unidad = prompt("Ingrese la unidad que desea ingresar: ");
    }
    if (unidad == 1){
        let aConvertir = prompt("Ingrese su valor en gramos: ");
        resultado = convertir(aConvertir,"Gramo");
        const operacion = new conversion("Gramo",aConvertir,resultado);
        historial.push(operacion);
    }
    else if (unidad == 2) {
        let aConvertir = prompt("Ingrese su valor en libras: ");
        resultado = convertir(aConvertir,"Libra");
        const operacion = new conversion("Libra",aConvertir,resultado);
        historial.push(operacion);
    }
    alert("Su resultado es: " + resultado);
}
    else if (tipoOperacion == 3){
        historial.forEach((item) => {
            console.log(item);
        });    
    let modo = prompt("Ingrese lo que desee hacer con el historial: 1)Filtrar, 2)Borrar, 3)Ordenar");
    while (modo != 1 && modo != 2 && modo != 3){
        modo = prompt("Ingrese lo que desee hacer con el historial: 1)Filtrar, 2)Borrar, 3)Ordenar");
    }
    if (modo == 1){
        let filtro = prompt("Ingrese la unidad de entrada que desea buscar: 1)Metro, 2)Milla, 3)Gramo, 4)Libra")
        switch (filtro){
            case "1":
                filtro = "Metro"
                break;
            case "2":
                filtro = "Milla"
                break;
            case "3":
                filtro = "Gramo"
                break;
            case "4":
                filtro = "Libra"
                break;
        }
        const filtrado = historial.filter(item => item.tipoIn == filtro);
        console.log(filtrado);
        filtrado.forEach((item) => {
            console.log(item);
        });
    }
    else if (modo == 2){
        let aBorrar = prompt("Ingrese la operacion que desea eliminar: ");
        historial.splice(aBorrar,1);
    }
    else if (modo == 3){
        let ordenar = prompt("Como desea ordenar? 1)Por tipo de unidad, 2)Por valor de entrada");
        if (ordenar == 1){
            historial.sort((a,b) => (a.tipoIn > b.tipoIn) - (a.tipoIn < b.tipoIn));
        }
        else if (ordenar == 2){
            historial.sort((a,b) => a.numero - b.numero);
        }
    }
    
}
menuInicial();
}

//  Idea: hacer un historial de las conversiones hechas y al final de cada conversion preguntar si quiere hacer otra o ver su historial, dando opciones de usar filtros y etc.




function convertir (valor, tipo){
    let res;
    switch (tipo){
        case "Gramo":
            res = valor/453.6;
            break;
        case "Milla":
            res = valor*1609;
            break;
        case "Metro":
            res = valor/1609
            break;
        case "Libra":
            res = valor *453.6;
            break;
    }
    return res;
}


