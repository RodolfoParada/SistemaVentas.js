class Producto {
    static contadorProductos = 0;

    constructor(nombre, precio) {
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }
    get idProducto() {
        return this._idProducto;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get precio() {
        return this._precio;
    }
    set precio(precio) {
        this._precio = precio;
    }
    toString() {
        return `idProducto: ${this.idProducto}, nombre: ${this.nombre}, precio: $${this.precio}`;
    }
}

// Clase Orden
class Orden {
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS() {
        return 5; // Límite máximo de productos por orden
    }

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes; // Accede correctamente a la propiedad estática
        this._productos = [];
    }

    get idOrden() {
        return this._idOrden;
    }

    agregarProducto(producto) {
        if (this._productos.length < Orden.MAX_PRODUCTOS) {
            this._productos.push(producto);
        } else {
            console.log("No se pueden agregar más productos.");
        }
    }

    calcularTotal() {
        return this._productos.reduce((total, producto) => total + producto.precio, 0);
    }

    mostrarOrden() {
        let productosOrden = this._productos.map((p) => p.toString()).join("\n");
        return `Orden: ${this._idOrden}\nTotal: $${this.calcularTotal()}\nProductos:\n${productosOrden}`;
    }
}



    let producto1 = new Producto('Pantalón', 200)
    let producto2 = new Producto('Camisa', 100)
    console.log(producto1.toString())
    console.log(producto2.toString())

    
    let orden1 = new Orden(); 
    orden1.agregarProducto(producto1);
    orden1.agregarProducto(producto2);

    let orden2 = new Orden();
    let producto3 = new Producto('Cinturon', 50);
    orden2.agregarProducto(producto3);
    orden2.agregarProducto(producto1);
    orden2.agregarProducto(producto2)
    
orden2.mostrarOrden();

console.log(orden1.mostrarOrden());
console.log(orden2.mostrarOrden());

