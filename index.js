
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

    default:
        console.log("Método no reconocido");
        break;
}