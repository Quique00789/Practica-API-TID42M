# Practica-API-TID42M
Trabajo API

API de Productos Gráficos
Este proyecto presenta una interfaz web y un servidor API para interactuar con una lista de productos gráficos, específicamente tarjetas gráficas para computadoras. La interfaz web utiliza HTML y JavaScript para conectarse al servidor mediante solicitudes HTTP, permitiendo realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en la lista de tarjetas gráficas.

Contenido del Repositorio
Interfaz Web (index.html):

Proporciona una interfaz gráfica para interactuar con la API.
Permite a los usuarios realizar operaciones CRUD en tarjetas gráficas.
Servidor API (server.js):

Implementa un servidor Express en Node.js.
Ofrece rutas para realizar operaciones CRUD específicas para productos gráficos.
Incluye medidas de seguridad básicas, como autorización mediante token y configuración CORS.
Datos de Productos Gráficos (server.js):

Contiene información sobre tarjetas gráficas, cada una representada como un objeto JavaScript.
Cada tarjeta gráfica tiene un ID, categoría, precio, nombre, especificaciones y una URL de imagen.
Configuración e Instalación
Interfaz Web:

Abre el archivo index.html en un navegador web para interactuar con la interfaz.
Servidor API:

Abre una terminal en la carpeta del servidor.
Instala las dependencias con el comando npm install.
Inicia el servidor con el comando node server.js.
Funcionalidades de la Interfaz Web
Listado de Tarjetas Gráficas:

Muestra un listado de tarjetas gráficas al cargar la página.
Puedes obtener la lista actualizada haciendo clic en el botón "Obtener Tarjetas Gráficas".
Agregar Tarjeta Gráfica:

Completa el formulario en la sección "Agregar Tarjeta Gráfica".
Haz clic en "Agregar Tarjeta Gráfica" para agregar una nueva tarjeta.
Actualizar Tarjeta Gráfica:

Completa el formulario en la sección "Actualizar Tarjeta Gráfica".
Ingresa el ID de la tarjeta a actualizar y los nuevos detalles.
Haz clic en "Actualizar Tarjeta Gráfica" para aplicar los cambios.
Eliminar Tarjeta Gráfica:

Completa el formulario en la sección "Eliminar Tarjeta Gráfica".
Ingresa el ID de la tarjeta a eliminar.
Haz clic en "Eliminar Tarjeta Gráfica" para eliminar la tarjeta seleccionada.
API del Servidor
Obtener Lista de Tarjetas Gráficas:

Método: GET
Ruta: /
Se requiere autorización mediante un token.
Agregar Categoría:

Método: POST
Ruta: /categorias
Registra una nueva categoría en el servidor.
Actualizar Tarjeta Gráfica:

Método: PUT
Ruta: /:id
Actualiza los detalles de una tarjeta gráfica específica según el ID proporcionado.
Se requiere autorización mediante un token.
Actualizar Parcialmente Tarjeta Gráfica:

Método: PATCH
Ruta: /:id
Actualiza parcialmente los detalles de una tarjeta gráfica según el ID proporcionado.
Se requiere autorización mediante un token.
Eliminar Tarjeta Gráfica:

Método: DELETE
Ruta: /:id
Elimina una tarjeta gráfica específica según el ID proporcionado.
Se requiere autorización mediante un token.
Autorización
Se implementa un mecanismo básico de autorización mediante un token.
El token de autorización válido es qwer1234.
Configuración de CORS
El servidor está configurado para permitir solicitudes desde cualquier origen.
Notas Adicionales
La aplicación utiliza imágenes de tarjetas gráficas alojadas en URLs específicas. Asegúrate de tener conexión a internet para cargar las imágenes correctamente.

