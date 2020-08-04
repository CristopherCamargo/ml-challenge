## Requerimientos

Node >= v14.3.0

## Uso

Clone el proyecto. Ubiquese en la carpeta del proyecto. Use dos terminales para ejecutar el proyecto, una para el cliente y otra para el api gateway.

### Cliente

Ejecute.

`cd ml-client`

`yarn install`

`yarn start`

### Api gateway

Ejecute.

`cd ml-api-gateway`

`yarn install`

Para el api gateway asegúrese de tener el .env configurado con `PORT=5000`

`yarn start`

## Curiosidades

### Componentes

Los componentes usados en el frontend están estructurados siguiendo la metodología de [atomic design](https://bradfrost.com/blog/post/atomic-web-design/) para creación de sitios web escalables.

### Redux

En el proyecto se ha usado la libreria de [redux](https://redux.js.org/) para el manejo de estados del sitio web.

De igual manera se hizo uso de un patrón de `cadena de responsabilidad` u `observable` que haciendo uso de middlewares de redux consigue crear side effects y tener la lógica de negocios en la store, dejando así a un lado la responsabilidad de los componentes y limitarlos a ser elementos generadores.
