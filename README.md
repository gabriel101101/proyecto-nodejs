# Proyecto Node.js - API REST

## Descripción

Proyecto creado en Node js que utiliza una API externa para 'crear', 'eliminar' y 'consultar' productos.

## Tecnologías utilizadas

* Node.js
* JavaScript
* Fetch API
* API REST
* Git y GitHub

## Requisitos
* Tener instalado Node.js.
* Disponer de conexión a Internet para comunicarse con la API.

## API utilizada
**Platzi Fake Store API**

* Documentación: https://fakeapi.platzi.com/
* URL base: https://api.escuelajs.co/api/v1/

## Instalación

1. Descargar o clonar el repositorio.
2. Abrir una terminal en la carpeta del proyecto.
3. Ejecutar los comandos desde esa ubicación.

Si el proyecto contiene un archivo `package.json` con el script `start` configurado, no es necesario agregar dependencias para utilizar `fetch` en versiones modernas de Node.js.

## Funciones - Metodos - Comandos(consola)

### GET - Consultar productos
Permite obtener todos los productos disponibles:
```bash
npm run start GET products
```

También permite consultar un producto específico mediante su ID:
```bash
npm run start GET products/15
```

### POST - Crear un producto
Permite enviar los datos de un producto nuevo a la API:
```bash
npm run start POST products "Nombre producto" 500 "caracterista - descripcion"
```

Los datos enviados son:

* Título: Nombre producto
* Precio: 500
* Descripción: caracterista - descripcion

La API procesa la solicitud y devuelve una respuesta con los datos del producto.

### DELETE - Eliminar un producto
Permite solicitar la eliminación de un producto mediante su ID:
```bash
npm run start DELETE products/2
```

En este ejemplo se solicita eliminar el producto con ID `2`.


**Nota:** el resultado depende de la disponibilidad y el comportamiento de la API externa.

## Estructura del proyecto
```text
Proyecto-Nodejs/
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

## Autor
Gabriel Rodriguez
