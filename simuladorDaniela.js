function comprarProductos() {
    let clave = '';
    let precio = 0;
    let cantidad = 0;
    let totalCompra = 0;
    let cantidadTotal = 0;
    let seguirComprando = false;

    do {
        clave = prompt("Ingrese la clave del producto que desea agregar al carrito", 'Ej: PRY1').toUpperCase();
        cantidad = parseInt(prompt('¿Cuantos queres comprar?'));

        let cantidadValidada = validacionCant(cantidad);

        switch (clave) {
            case 'PRY1'://Playera
                precio = 150;
                break;
            case 'PRY2'://Falda
                precio = 180;
                break;
            case 'PRY3'://Vestido
                precio = 300;
                break;
            case 'PRY4'://Jeans
                precio = 350;
                break;
            case 'PRY5'://Tenis
                precio = 600;
                break;
            default://Clave incorrecta
                alert('La clave ingresada no se encuentra en nuestro sistema');
                precio = 0;
                cantidad = 0;
                break;
        }

        totalCompra += precio * cantidadValidada;
        cantidadTotal += cantidad;

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
        cantidad = parseInt(prompt('¿Cuantos queres comprar?'));
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
        alert('Tenes envio gratis. El total de la compra es: '+totalCompra);
    } else if (tieneEnvioADomicilio && totalCompra < 900 && totalCompra !== 0) {
        totalCompra += 99;
        alert('El envío cuesta $99. El total de la compra es: '+totalCompra);
    } else {
        alert('El total de la compra es: '+totalCompra);
    }
}

calcularEnvio(aplicarDescuento(comprarProductos()));