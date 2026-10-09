
console.log(process.argv);

const args = process.argv.slice(2);

async function obtenerProductos(ruta) {
    try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/${ruta}`);
        const data = await response.json();
        return data;

    } catch (error) {
        console.log("Error:", error.message);
    }
}


async function crearProducto(producto) {
    try {
        const response = await fetch(
            "https://api.escuelajs.co/api/v1/products/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(producto)
            }
        );

        if (response.ok) {
            console.log("producto creado");
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.log("Error :", error.message);
    }
}

switch (args[0]) {
    case "GET":
        console.log(args[0]);

        if (args[1]) {
            const productos = await obtenerProductos(args[1]);
            console.log(productos);
        } else {
            console.log("Comando incorrecto");
        }
        break;

    
case "POST":
    console.log(args[0]);

    if (
        args[1] &&
        args[2] &&
        args[3] &&
        args[4] &&
        args[1].startsWith("products")
    ) {
        const producto = {
            title: args[2],
            price: Number(args[3]),
            description: args[4],
            categoryId: 1,
            images: ["https://placehold.co/600x400"]
        };

        const resultado = await crearProducto(producto);

        console.log("Producto creado:");
        console.log(resultado);

    } else {
        console.log("Comando incompleto");
    }
    break;
}