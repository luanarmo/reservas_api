# API de reservas

Esta API RESTful está diseñada para la gestión de las reservaciones a eventos, facilitando la creación, lectura, actualización, y eliminación (CRUD) de información relacionada con eventos y reservaciones. Proporciona una interfaz sencilla y eficiente para interactuar con los datos, permitiendo a los usuarios gestionar fácilmente eventos y reservaciones.

## Tabla de Contenidos

- [Clonar el repositorio](#clonar-el-repositorio)
- [Configurar el entorno de desarrollo](#configurar-el-entorno-de-desarrollo)
- [Ejecutar la aplicación](#ejecutar-la-aplicación)
- [Realizar peticiones a la API](#realizar-peticiones-a-la-api)

## Clonar el repositorio

Para clonar este repositorio, utiliza el siguiente comando:

```
git clone git@github.com:luanarmo/reservas_api.git
```

## Configurar el entorno de desarrollo

1. Navega al directorio del proyecto:

 ```
 cd reservas_api
 ```
2. Asegúrate de tener Node.js y npm instalados en tu sistema.
3. Instala las dependencias del proyecto:
```
npm install
```
4. Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno necesarias:

```
DB_USERNAME=tu_usuario
DB_PASSWORD=tu_contraseña
DB_DATABASE=nombre_de_tu_base_de_datos
DB_HOST=localhost
DB_DIALECT=mysql
PORT=3000
```

5. Configura la base de datos:

```
npx sequelize-cli db:create
npx sequelize-cli db:migrate
```
## Ejecutar la aplicación

Una vez que hayas configurado tu entorno, puedes ejecutar la aplicación:

Para desarrollo (con nodemon para reinicio automático):
```
npm run dev
```

Para producción:
```
npm start
```

La API estará disponible en `http://localhost:3000` (o el puerto que hayas especificado en tu archivo `.env`)

## Realizar peticiones a la API

Puedes interactuar con la API utilizando herramientas como cURL, Postman, o cualquier cliente HTTP. Aquí hay algunos ejemplos de cómo realizar peticiones

### Obtener todos los eventos

![image](https://github.com/user-attachments/assets/fb1baaf3-7a93-40fa-ba2c-b546f9b0d9dc)

### Crear un nuevo evento

![image](https://github.com/user-attachments/assets/af48c5ac-7ce3-4147-812b-4f1378ecce9b)

### Obtener un evento específico

![image](https://github.com/user-attachments/assets/b1c26653-f942-4423-8862-fc0edae38a1b)

### Actualizar un evento

![image](https://github.com/user-attachments/assets/ad854439-7fb2-4053-88cf-b11673b3c7d4)

### Eliminar un evento

![image](https://github.com/user-attachments/assets/9b437321-b1cb-48e2-b552-30951525025c)

### Obtener todas las reservas

![image](https://github.com/user-attachments/assets/908325ba-911a-4c6a-a05a-210c0cc99135)

### Crear una nueva reserva

![image](https://github.com/user-attachments/assets/f10c52e2-084e-49c2-a5f6-a4930b15ecea)

### Obtener una reserva específica

![image](https://github.com/user-attachments/assets/00d55474-9c54-42b1-a0d8-5d2623f1091b)

### Actualizar una reserva

![image](https://github.com/user-attachments/assets/c9f542c5-f2f9-4bab-a780-ba02d1c780f2)

### Eliminar una reserva

![image](https://github.com/user-attachments/assets/5833a012-f45e-4f2c-b42c-84a3278d354c)
