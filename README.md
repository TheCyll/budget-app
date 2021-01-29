# Challenge MERN JavaScript

Este es un reto para crear una aplicación de administración de presupuesto, usando el stack MERN de JavaScript

## Backend

En el backend utilicé las siguientes tecnologías:

- NodeJS
- Express
- MongoDB (Atlas)

## Frontend

En el frontend utilicé:

- ReactJS

## Secciones

La app tiene dos pantallas:

- Home: Muestra el balance y los últimos 10 registros  
- ABM: Muestra todos los registros según el tipo (ingreso o egreso) y contiene los formularios que controlan el CRUD de la api

## Uso

Lamentablemente, no tengo la experiencia aún de hacer deploys de aplicaciones fullstack, 
pero dejé todo listo para poderla probar lo más rápido posible. En estos días completaré el deploy,
y actualizaré el repositorio con el link en **vivo**

Solamente se deben seguir los siguientes pasos:

1. Clonar el repositorio a su máquina local
2. Entrar en el directorio del proyecto
3. Ejecutar en la terminal el siguiente comando: ```npm run start-app```
4. Abrir en el navegador el servidor local en el puerto 3030, es decir: http://localhost:3030/
5. Probar la app! (no se necesita configurar la base de datos, pues está servida con Mongo Atlas)

## Notas

Decidí usar una base de datos no-relacional, ya que para los requisitos básicos no me pareció necesaria, 
y es con lo que sé trabajar (además de la conveniencia de Mongo Atlas),
pero para una solución más completa (registro, usuarios, categorias) se recomienda usar una base de datos
relacional como PostgreSQL, al igual que Sequelize para el uso de Schemas.
