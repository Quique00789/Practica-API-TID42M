const express = require('express');
const app = express();
const cors = require('cors');


const port = 8080;

const Json = [
    { id: 1, categoria: 'computo', precio: 5500, nombre: 'RTX 4090', especificaciones: [{vram: '16GB',  fabricante: 'Asus ROG'}], url: 'https://hiraoka.com.pe/media/mageplaza/blog/post/t/a/tarjeta_grafica-que_es_y_como_funciona.jpg' },
    { id: 2, categoria: 'computo', precio: 6500, nombre: 'RTX 3090', especificaciones: [{vram: '4GB',  fabricante: 'Asus TUF'}], url: 'https://hiraoka.com.pe/media/mageplaza/blog/post/t/a/tarjeta_grafica-que_es_y_como_funciona.jpg' },
    { id: 3, categoria: 'computo', precio: 8500, nombre: 'RTX 3070', especificaciones: [{vram: '8GB',  fabricante: 'Gigabyte'}], url: 'https://hiraoka.com.pe/media/mageplaza/blog/post/t/a/tarjeta_grafica-que_es_y_como_funciona.jpg' },
    { id: 4, categoria: 'computo', precio: 16500, nombre: 'RTX 3050', especificaciones: [{vram: '14GB',  fabricante: 'Asus'}], url: 'https://hiraoka.com.pe/media/mageplaza/blog/post/t/a/tarjeta_grafica-que_es_y_como_funciona.jpg' },
    { id: 5, categoria: 'computo', precio: 2500, nombre: 'GTX 1650', especificaciones: [{vram: '2GB',  fabricante: 'PNY'}], url: 'https://hiraoka.com.pe/media/mageplaza/blog/post/t/a/tarjeta_grafica-que_es_y_como_funciona.jpg' },
    { id: 6, categoria: 'computo', precio: 18500, nombre: 'GTX 1660', especificaciones: [{vram: '12GB',  fabricante: 'Zotac'}], url: 'https://hiraoka.com.pe/media/mageplaza/blog/post/t/a/tarjeta_grafica-que_es_y_como_funciona.jpg' },
    { id: 7, categoria: 'computo', precio: 20000, nombre: 'GTX 1050 TI', especificaciones: [{vram: '6GB',  fabricante: 'Asus ROG'}], url: 'https://hiraoka.com.pe/media/mageplaza/blog/post/t/a/tarjeta_grafica-que_es_y_como_funciona.jpg' },
    { id: 8, categoria: 'computo', precio: 36500, nombre: 'Radeon 6600 XT', especificaciones: [{vram: '8GB',  fabricante: 'Sapphire'}], url: 'https://hiraoka.com.pe/media/mageplaza/blog/post/t/a/tarjeta_grafica-que_es_y_como_funciona.jpg' },
    { id: 9, categoria: 'computo', precio: 9500, nombre: 'Radeon 6500 XT', especificaciones: [{vram: '10GB',  fabricante: 'MSI'}], url: 'https://hiraoka.com.pe/media/mageplaza/blog/post/t/a/tarjeta_grafica-que_es_y_como_funciona.jpg' },
    { id: 10, categoria: 'computo', precio: 10000, nombre: 'Radeon 7600', especificaciones: [{vram: '12GB',  fabricante: 'EVGA'}], url: 'https://hiraoka.com.pe/media/mageplaza/blog/post/t/a/tarjeta_grafica-que_es_y_como_funciona.jpg' },
    { id: 11, categoria: 'computo', precio: 9800, nombre: 'Radeon 7800', especificaciones: [{vram: '16GB',  fabricante: 'ASROCK'}], url: 'https://hiraoka.com.pe/media/mageplaza/blog/post/t/a/tarjeta_grafica-que_es_y_como_funciona.jpg' }

];


app.use(express.json());
app.use(express.urlencoded());
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
}));

function authorize(req, res, next) {
    const token = req.headers.auth;
    if (token == 'qwer1234') {
        next();
    } else {
        res.status(403).send('Acceso denegado');
    }
}

app.get('/', authorize, (req, res) => {
    res.json(Json);
});

app.get('/Precios', authorize, (req, res) => {
    res.json(Json.map(item => item.precio));
});

app.post('/categorias', (req, res) => {
    console.log(req.body);
    res.send('Solicitud POST recibida');
});

app.put('/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const updatedFields = req.body;

    // Buscar el elemento en Json por ID
    const itemToUpdate = Json.find(item => item.id === itemId);

    if (itemToUpdate) {
        // Actualizar los campos específicos según los datos proporcionados en req.body
        if (updatedFields.especificaciones) {
            itemToUpdate.especificaciones = updatedFields.especificaciones;
        }

        res.send(`Elemento con ID ${itemId} actualizado`);
    } else {
        res.status(404).send(`Elemento con ID ${itemId} no encontrado`);
    }
});



app.patch('/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const updatedFields = req.body;

    // Buscar el elemento en Json por ID
    const itemToUpdate = Json.find(item => item.id === itemId);

    if (itemToUpdate) {
        // Actualizar los campos específicos según los datos proporcionados en req.body
        if (updatedFields.especificaciones) {
            Object.assign(itemToUpdate.especificaciones, updatedFields.especificaciones);
        }

        res.send(`Elemento con ID ${itemId} actualizado parcialmente`);
    } else {
        res.status(404).send(`Elemento con ID ${itemId} no encontrado`);
    }
});


app.delete('/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const index = Json.findIndex(item => item.id === itemId);

    if (index !== -1) {
        Json.splice(index, 1);
        res.send(`Elemento con ID ${itemId} eliminado`);
    } else {
        res.status(404).send(`Elemento con ID ${itemId} no encontrado`);
    }
});

app.head('/:id', (req, res) => {
    // Lógica para obtener información sobre el recurso sin enviar el cuerpo de la respuesta
    const itemId = parseInt(req.params.id);
    const item = Json.find(item => item.id === itemId);

    if (item) {
        // Enviar solo los encabezados de respuesta sin el cuerpo
        res.status(200).send();
    } else {
        res.status(404).send('Recurso no encontrado');
    }
});

// Manejar la solicitud OPTIONS para cualquier ruta
app.options('*', (req, res) => {
    // Configurar y enviar los encabezados de respuesta que permiten las opciones deseadas
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.status(200).send();
});


app.listen(port, () => console.log("El servidor está en el puerto: " + port));
