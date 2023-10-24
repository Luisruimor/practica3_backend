# Práctica 3 de Backend

1. [Documentación API](#docu-api)
2. [Enunciado](#enunciado)

## Docu API
Bienvenido a nuestra API de Discos de Música, diseñada para almacenar y gestionar tu colección de discos. Aquí puedes registrar discos con su nombre, formato, y más. Con funciones CRUD, puedes crear, leer, actualizar o eliminar cualquier disco de tu colección. ¡Empieza a organizar tu música ahora!

**BASE URL**: `https://practica3.deno.dev`

### Disco Schema
| Key     | Type     | Description                   |
|---------|----------|-------------------------------|
| _id     | ObjectId | Identificador único del disco |
| nombre  | String   | Nombre del disco              |
| autor   | String   | Autor del disco               |
| formato | String   | Formato del disco             |
| matriz  | Boolean  | Si el disco es matriz         |
| pais    | String   | País de impresión del disco   |


### GET todos los discos
Puedes pedir todos los discos con la url: `/disco`

`GET https://practica3.deno.dev/disco`

```` json
[
    {
        "_id": "6530fcd36770dc41ec1afc3f",
        "nombre": "Back in Black",
        "autor": "AC-DC",
        "formato": "CD",
        "matriz": false,
        "pais": "Australia"
    },
    {
        "_id": "6530fcee6770dc41ec1afc40",
        "nombre": "Nevermind",
        "autor": "Nirvana",
        "formato": "CD",
        "matriz": false,
        "pais": "EEUU"
    },
    {
        "_id": "6530fd0a6770dc41ec1afc41",
        "nombre": "Rumours",
        "autor": "Fleetwood Mac",
        "formato": "Vinilo",
        "matriz": true,
        "pais": "Reino Unido"
    },
    {
        "_id": "6530fd1d6770dc41ec1afc42",
        "nombre": "Abbey Road",
        "autor": "The Beattles",
        "formato": "Vinilo",
        "matriz": true,
        "pais": "Reino Unido"
    },
    {
        "_id": "6530fd766770dc41ec1afc43",
        "nombre": "The Joshua Tree",
        "autor": "U2",
        "formato": "CD",
        "matriz": false,
        "pais": "Irlanda"
    },
    //....
]
````
 
### GET un disco
Puedes pedir un único disco añadiendo su `_id` a la url como parámetro: `/disco/_id`

`GET https://practica3.deno.dev/6537976d41d7832e800d2b11`

```` json
{
    "_id": "6537976d41d7832e800d2b11",
    "nombre": "Dark Side of the Moon",
    "autor": "Pink Floyd",
    "formato": "Vinilo",
    "matriz": true,
    "pais": "Reino Unido"
}
````

### GET discos por nombre
Puedes pedir los discos con un nombre concreto añadiendo el `nombre` a la url como parámetro: `/disco/nombre/:nombre`

`GET https://practica3.deno.dev/disco/nombre/Dark%20Side%20of%20the%20Moon`

```` json
[
    {
        "_id": "6537976d41d7832e800d2b11",
        "nombre": "Dark Side of the Moon",
        "autor": "Pink Floyd",
        "formato": "Vinilo",
        "matriz": true,
        "pais": "Reino Unido"
    },
    //....
]
````

### GET discos por formato
Puedes pedir los discos con un formato concreto añadiendo el `formato` a la url como parámetro: `/disco/formato/:formato`

Los formatos válidos son: `CD`, `DVD`, `BluRay` y `Vinilo`

`GET https://practica3.deno.dev/disco/formato/Vinilo`

```` json
[
    {
        "_id": "6530fd0a6770dc41ec1afc41",
        "nombre": "Rumours",
        "autor": "Fleetwood Mac",
        "formato": "Vinilo",
        "matriz": true,
        "pais": "Reino Unido"
    },
    {
        "_id": "6530fd1d6770dc41ec1afc42",
        "nombre": "Abbey Road",
        "autor": "The Beattles",
        "formato": "Vinilo",
        "matriz": true,
        "pais": "Reino Unido"
    },
    //....
]
````

### GET discos por país
Puedes pedir los discos con un país concreto añadiendo `pais` a la url como parámetro: `/disco/pais/:pais`

`GET https://practica3.deno.dev/disco/pais/España`

```` json
[
    {
        "_id": "6530fdc36770dc41ec1afc45",
        "nombre": "Más",
        "autor": "Alejandro Sanz",
        "formato": "CD",
        "matriz": true,
        "pais": "España"
    },
    //...
]
````

### POST nuevo disco
Puedes crear un nuevo disco enviando un json con los datos del disco a la url: `/addDisco`

`POST https://practica3.deno.dev/addDisco` y añadir un cuerpo con estas características:
````json
{
    "nombre": "Más",
    "autor": "Alejandro Sanz",
    "formato": "CD",
    "matriz": true,
    "pais": "España"
}
````
Si se ha añadido correctamente deberá devolver: `Disco insertado con id : xxxxxxxxxxxxxxxxxxxxxx`

### PUT actualizar disco

### DELETE eliminar disco
Puedes eliminar un disco enviando su `_id` a la url: `/deleteDisco/:_id`

`DELETE https://practica3.deno.dev/deleteDisco/6530fdc36770dc41ec1afc45`

Si se ha eliminado correctamente deberá devolver: `Se ha borrado correctamente`


## Enunciado
Crear un API para el guardado de discos de música.  De cada disco se guardarán los siguientes datos:
- Nombre
- Autor
- Formato (LP, CD, single, cassette, reel to reel, minidisc, videocd ...)
- Matriz (si existe)
- País de impresión
- Arte de portada
- id
El api deberá de poseer las siguientes llamadas:

### GET

- Obtener todos los discos existentes
- Obtener un disco mediante id
- Obtener listado de discos según nombre
- Obtener listado de discos según formato
- Obtener listado de discos según país de impresión

### POST

- Crear nuevo disco

### PUT

- Actualizar un disco existente indicándolo por su id

### DELETE

- Eliminar un disco mediante su id

----------------------------------------------------------------------------------------------------------------------

En el repositorio el readme deberá funcionar como documentación del API indicando todos los endpoints y parámetros necesarios para su uso. [Documentación API](#docu-api)

Creando el api con exclusivamente datos locales se podrá llegar a la nota máxima de 6.

Implementando mongodb al guardado, obtención y modificación de los datos se podrá llegar a un 9.

Para obtener la puntuación máxima habrá que publicar el trabajo en deno deploy.

-----------------------------------------------------------------------------------------------------------------------


Un archivo no ejecutable mediante deno por algún tipo de error no será corregido y por tanto evaluado automáticamente con un 0.
El trabajo será exclusivamente individual sin permitir hacer parejas o entregas conjuntas de ningún tipo.
La entrega se hará en una release de GitHub en un repositorio antes de este miércoles 26 de octubre a las 18:00, un trabajo que no cumpla esta cláusulas de entrega será evaluado automáticamente con un 0.

En caso de obtar a la nota máxima se deberá envíar también el enlace del despliegue en deno deploy.