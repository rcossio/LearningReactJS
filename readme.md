# Tienda virtual - Fake Store 

Este proyecto fue realizado en el marco del curso de ReactJS ofrecido por CoderHouse. El mismo consiste en realizar una tienda virtual sencilla. El código está subido en el repositorio de GitHub https://github.com/rcossio/LearningReactJS.git y montado en un servidor de Netlify https://learning-react-coderhouse-rcossio.netlify.app/.

## Librerías utilizadas
- React-router-DOM: Esta librería nos permite renderizar las distintas secciones de la aplicación a partir del URL y con un buen tiempo de rendering. (https://www.npmjs.com/package/react-router-dom)
- Firebase: A través de Firestore podemos guardar productos y categorías para renderizarlas de manera dinámica (https://firebase.google.com/). 
- Netlify: Nos permite realizar un despleigue de la aplicación en el hosting de Netlify (https://www.netlify.com/).

## Caracteristicas

- El usuario puede filtrar los productos por categoría, ingresar al detalle de un producto y agregar el producto al carrito.
- Los productos y categorías mostrados son obtenidos de una base de datos en Firebase (Firestore).
- Los componenetes están separados por funcion contenedora o de presentación.
- En el carrito se pueden agregar productos repetidos y acceder a finalizar la compra o volver a la tienda.
- Al realizar la compra el usuario puede colocar sus datos y alojar una orden de compra en la base de datos, obteniendo un número de compra.
- El ingreso de datos del usuario tiene algunos métodos sencillos de validación.

## ¿Cómo replicar este proyecto localmente? 

1. Clonar el repositorio en una carpeta local

`git clone https://github.com/rcossio/LearningReactJS.git`

2. Instalar las dependencias del proyecto

`npm i`

3. Iniciar el proyecto localmente

`npm start`

## Consideraciones y mejoras

El proyecto realiza demasiadas consultas a la base de datos Firestore, lo que consume varias de las consultas permitidas mensualmente. Una mejora futura es guardar los productos en el local storage, ya que no son muchos. Quizas limitar la consulta a una consulta por hora.

Otro aspecto a mejorar es que cualquier usuario anónimo puede hacer consultas, indiscriminadamente, incluso mediante un script. Por lo que se podría agregar alguna librería de captcha.
