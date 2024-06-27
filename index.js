const express = require('express');
const path = require('path');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 3002;

// Middleware para servir archivos estáticos desde la carpeta 'client/build'
app.use(express.static(path.join(__dirname, 'client/build')));

// Configuración de la conexión a MySQL usando variables de entorno
const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

// Conectar a MySQL
connection.connect((error) => {
  if (error) {
    console.error('Error al conectar a MySQL:', error.stack);
    return;
  }
  console.log('Conexión establecida con MySQL.');

  // Aquí puedes empezar a ejecutar consultas y otras operaciones con MySQL
});

// Rutas de ejemplo
app.get('/api/hola', (req, res) => {
  res.send('¡Hola desde Express en SistemaHorariosUta!');
});

// Ruta para servir la aplicación React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Iniciar el servidor de Express
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
