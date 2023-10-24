# Docu API
Bienvenido a nuestra API de Discos de Música, diseñada para almacenar y gestionar tu colección de discos. Aquí puedes registrar discos con su nombre, formato, y más. Con funciones CRUD, puedes crear, leer, actualizar o eliminar cualquier disco de tu colección. ¡Empieza a organizar tu música ahora!

**BASE URL**: `https://practica3.deno.dev`

## Disco Schema

| Key     | Type     | Description                   |
|---------|----------|-------------------------------|
| _id     | ObjectId | Identificador único del disco |
| nombre  | String   | Nombre del disco              |
| autor   | String   | Autor del disco               |
| formato | String   | Formato del disco             |
| matriz  | Boolean  | Si el disco es matriz         |
| pais    | String   | País de impresión del disco   |


## GET todos los discos
Puedes pedir todos los discos con la url: `/disco`

`GET https://practica3.deno.dev/disco`


## GET un disco
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

## GET discos por nombre
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

## GET discos por formato
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

## GET discos por país
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
    {
        "_id": "6530fdd86770dc41ec1afc46",
        "nombre": "Lay ley innata",
        "autor": "Extremoduro",
        "formato": "CD",
        "matriz": true,
        "pais": "España"
    },
    //....
]
````

## POST nuevo disco
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

## PUT actualizar disco

## DELETE eliminar disco
Puedes eliminar un disco enviando su `_id` a la url: `/deleteDisco/:_id`

`DELETE https://practica3.deno.dev/deleteDisco/6530fdc36770dc41ec1afc45`

Si se ha eliminado correctamente deberá devolver: `Se ha borrado correctamente`

