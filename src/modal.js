import { eliminarProductoCarrito } from "./accionesCarrito.js";
import { sumarRestProductoCarrito } from "./accionesCarrito.js";

const modalContenedor = document.querySelector('.modal-contenedor');
const abrirCarrito = document.getElementById('cesta-carrito');
const cerrarCarrito = document.getElementById('btn-cerrar-carrito');
const modalCarrito = document.querySelector('.modal-carrito');

abrirCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

cerrarCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

modalContenedor.addEventListener('click', () => {
    cerrarCarrito.click()
});

modalCarrito.addEventListener("click", (e) => {
    e.stopPropagation();
    if (e.target.classList.contains('boton-eliminar')) {
        Swal.fire({
            title: '¿Esta seguro?',
            text: 'Va a eliminar el producto',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                eliminarProductoCarrito(e.target.value);
                Swal.fire(
                    'Eliminado',
                    'El producto ha sido eliminado',
                    'success'
                )
            }
        })
    }
});

modalCarrito.addEventListener("click", (e) => {
    e.stopPropagation();
    if (e.target.classList.contains('boton-sumar')) {
        Swal.fire({
            title: '¿Esta seguro?',
            text: 'Va a sumar el producto',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sumar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                sumarRestProductoCarrito(e.target.value,1);
                Swal.fire(
                    'Agregado',
                    'El producto ha sido sumado',
                    'success'
                )
            }
        })
    }
});

modalCarrito.addEventListener("click", (e) => {
    e.stopPropagation();
    if (e.target.classList.contains('boton-restar')) {
        Swal.fire({
            title: '¿Esta seguro?',
            text: 'Va a restar el producto',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Restar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                sumarRestProductoCarrito(e.target.value,0);
                Swal.fire(
                    'Restado',
                    'El producto ha sido restado',
                    'success'
                )
            }
        })
    }
});



