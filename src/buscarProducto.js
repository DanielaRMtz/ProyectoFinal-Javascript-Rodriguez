import { mostrarProductos } from "./App.js";
import { productos } from "./stock.js";

const inputSearch = document.getElementById("buscarProducto");

const buscarProducto = (productos, productoDesc) => {
    const filtProd = productos.filter( producto => producto.desc.toLowerCase().includes(productoDesc.toLowerCase()));
    mostrarProductos(filtProd);
};

inputSearch.addEventListener("input", (e) => {
    buscarProducto(productos, e.target.value);
});