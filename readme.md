# Tienda virtual - Fake Store 

Este proyecto fue realizado en el marco del curso de ReactJS ofrecido por CoderHouse. El mismo consiste en realizar una tienda virtual sencilla. El código está subido en el repositorio de GitHub https://github.com/rcossio/LearningReactJS.git y montado en un servidor de Netlify https://learning-react-coderhouse-rcossio.netlify.app/.

## Paquetes específicos utilizados
- React-router-DOM
- Firebase

## Caracteristicas

- El usuario puede filtrar los productos por categoría, ingresar al detalle de un producto y agregar el producto al carrito
- Los productos y categorías mostrados son obtenidos de una base de datos en Firebase (Firestore)
- Los componenetes están separados por funcion contenedora o de presentación
- En el carrito se pueden agregar productos repetidos y acceder a finalizar la compra o volver a la tienda
- Al realizar la compra el usuario puede colocar sus datos y alojar una orden de compra en la base de datos, obteniendo un número de compra.

## ¿Cómo replicar este proyecto localmente? 

1. Clonar el repositorio en una carpeta local

`git clone https://github.com/rcossio/LearningReactJS.git`

2. Instalar las dependencias del proyecto

`npm i`

3. Iniciar el proyecto localmente

`npm start`
