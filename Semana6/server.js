const express = require('express');
const app = express();

// Este comando es clave: le enseña a tu servidor a leer formato JSON
app.use(express.json());

// Ruta 1: Registro de usuario (Pregunta 6 y 7)
app.post('/registro', (req, res) => {
  const nombre = req.body.nombre;
  const mensaje = req.body.mensaje;

  res.json({
    estado: "Datos recibidos",
    nombre: nombre,
    mensaje: mensaje
  });
});

// Ruta 2: Simular reporte ciudadano (Pregunta 8)
app.post('/incidencia', (req, res) => {
  const tipo = req.body.tipo;
  const descripcion = req.body.descripcion;

  res.json({
    mensaje: "Incidencia registrada",
    tipo: tipo,
    descripcion: descripcion
  });
});

// Arrancar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});