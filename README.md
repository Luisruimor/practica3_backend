# practica3_backend
Crear un API para el guardado de discos de música.

De cada disco se guardarán los siguientes datos:

- Nombre
- Autor
- Formato (LP, CD, single, cassette, reel to reel, minidisc, videocd ...)
- Matriz (si existe)
- País de impresión
- Arte de portada
- id

El api deberá de poseer las siguientes llamadas:

GET ->

- Obtener todos los discos existentes
- Obtener un disco mediante id
- Obtener listado de discos según nombre
- Obtener listado de discos según formato
- Obtener listado de discos según país de impresión

POST ->

- Crear nuevo disco

PUT ->

- Actualizar un disco existente indicándolo por su id

DELETE ->

- Eliminar un disco mediante su id

----------------------------------------------------------------------------------------------------------------------

En el repositorio el readme deberá funcionar como documentación del API indicando todos los endpoints y parámetros necesarios para su uso.

Creando el api con exclusivamente datos locales se podrá llegar a la nota máxima de 6.

Implementando mongodb al guardado, obtención y modificación de los datos se podrá llegar a un 9.

Para obtener la puntuación máxima habrá que publicar el trabajo en deno deploy.

-----------------------------------------------------------------------------------------------------------------------


Un archivo no ejecutable mediante deno por algún tipo de error no será corregido y por tanto evaluado automáticamente con un 0.
El trabajo será exclusivamente individual sin permitir hacer parejas o entregas conjuntas de ningún tipo.
La entrega se hará en una release de GitHub en un repositorio antes de este miércoles 26 de octube a las 18:00, un trabajo que no cumpla esta cláusulas de entrega será evaluado automáticamente con un 0.

En caso de obtar a la nota máxima se deberá envíar también el enlace del despliegue en deno deploy.