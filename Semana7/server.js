const express = require('express');
const app = express();

// Middleware para procesar formato JSON
app.use(express.json());

// Lista en memoria para guardar los reportes provisionalmente
let reportes = [];

// Ruta GET: Para consultar todos los reportes guardados
app.get('/reportes', (req, res) => {
  res.json(reportes);
});

// Ruta POST: Para registrar un nuevo reporte ciudadano
app.post('/reportes', (req, res) => {
  const reporte = {
    id: reportes.length + 1, // ID auto-incremental según el tamaño del array
    tipo: req.body.tipo,
    descripcion: req.body.descripcion
  };

  // Guardamos el objeto dentro de nuestra lista
  reportes.push(reporte);

  res.json({
    mensaje: "Reporte registrado",
    reporte: reporte
  });
});

// Encender el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});