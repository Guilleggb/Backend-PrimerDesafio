class GestorInventario {
    constructor() {
        this.inventario = [];
        this.itemId = 0;
    }

    agregarProducto(nombre, descripcion, precio, codigo, stock) {
        if (this.inventario.some((producto) => producto.codigo === codigo)) {
            console.log(`El código ${codigo} está repetido`);
            return;
        }

        if (!nombre || !descripcion || !precio || !codigo || !stock) {
            console.log("Todos los campos son requeridos");
            return;
        }

        const nuevoProducto = {
            id: ++this.itemId,
            nombre,
            descripcion,
            precio,
            codigo,
            stock,
        };

        this.inventario.push(nuevoProducto);
    }

    obtenerProductos() {
        return this.inventario;
    }

    obtenerProductoPorId(id) {
        const producto = this.inventario.find((producto) => producto.id === id);
        if (!producto) {
            console.log("No encontrado");
        } else {
            return producto;
        }
    }
}

const gestorInventario = new GestorInventario();

gestorInventario.agregarProducto(
    "El Alquimista",
    "Un viaje mágico a través del desierto en busca de un tesoro.",
    7000,
    "A11",
    30
);

gestorInventario.agregarProducto(
    "Cien años de soledad",
    "La saga de la familia Buendía a través de siete generaciones en Macondo.", 7500, "A12", 25);

gestorInventario.agregarProducto(
    "Harry Potter y la Piedra Filosofal",
    "La historia del joven mago Harry Potter en Hogwarts.",
    8500, "A13", 40);

console.log(gestorInventario.obtenerProductos());
console.log(gestorInventario.obtenerProductoPorId(1));
console.log(gestorInventario.obtenerProductoPorId(3));