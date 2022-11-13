//Creación de un array de productos
const arrayProductos=[];
const producto1=new producto('PRY1','Playera',150);
const producto2=new producto('PRY2','Falda',180);
const producto3=new producto('PRY3','Vestido',300);
const producto4=new producto('PRY4','Jeans',350);
const producto5=new producto('PRY5','Tenis',600);

arrayProductos.push(producto1,producto2,producto3,producto4,producto5);

const ordenAsc=()=>{
    arrayProductos.sort((a,b)=>a.precio-b.precio);
    muestraDatos();
}

const ordenDesc=()=>{
    arrayProductos.sort((a,b)=>b.precio-a.precio);
    muestraDatos();
}

const muestraDatos = () => {
    let array=[];
    arrayProductos.forEach(producto=>array.push(producto.id+': '+producto.nombre+': $'+producto.precio));
    alert('Lista de precios:'+'\n'+array.join('\n'));
};


function ordenPref(){
let opc='';
let rep;

do{
    rep=false;//Para que no se quede en un ciclo sin fin
    opc=parseInt(prompt('Ingrese 1 para visualizar el catálogo por el precio más bajo y 2 para visualizar por el precio más alto') );
    switch(opc)
    {
        case 1:
            ordenAsc();
        break;
        
        case 2:
            ordenDesc();
        break;

        default:
            rep=true;
            alert('Función no disponible intente de nuevo.')
            
    }
}while(rep)    
}


function comprarProductos() {
    let clave = '';
    let cantidad = 0;
    let totalCompra = 0;
    let cantidadTotal = 0;
    let seguirComprando = false;

    do {
        ordenPref();
        clave = prompt("Ingrese la clave del producto que desea agregar al carrito", 'Ej: PRY1').toUpperCase();
        cantidad = parseInt(prompt('¿Cuantos quieres comprar?'));

        let cantidadValidada = validacionCant(cantidad);

        const productoSel=arrayProductos.find(producto=>producto.id===clave);
        
        if(productoSel){
            totalCompra += productoSel.precio * cantidadValidada;
            cantidadTotal += cantidad;
        }
        else{
            alert('El producto seleccionado no se encuentra en el catálogo');
        }
        

        seguirComprando = confirm('¿Desea agregar más productos al carrito?');

    } while (seguirComprando)

    return totalCompra;
}

function validacionCant(cantidad) {
    while(Number.isNaN(cantidad) || cantidad === 0) {
        if (cantidad !== 0) {
            alert('Debe agregar un número.')
        } else {
            alert('Debe ingresar un número distinto de cero.')
        }
        cantidad = parseInt(prompt('¿Cuantos quieres comprar?'));
    }

    return cantidad;
}

function aplicarDescuento(totalCompra) {
    if (totalCompra >= 5000) {
        return totalCompra * 0.80;
    } else {
        return totalCompra;
    }
}

function calcularEnvio(totalCompra) {
    let tieneEnvioADomicilio = confirm('Queres envio a domicilio?');

    if (tieneEnvioADomicilio && totalCompra >= 900) {
        alert('Tienes envio gratis. El total de la compra es: '+totalCompra);
    } else if (tieneEnvioADomicilio && totalCompra < 900 && totalCompra !== 0) {
        totalCompra += 99;
        alert('El envío cuesta $99. El total de la compra es: '+totalCompra);
    } else {
        alert('El total de la compra es: '+totalCompra);
    }
}

calcularEnvio(aplicarDescuento(comprarProductos()));  
