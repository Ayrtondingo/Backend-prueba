const { Pool } = require('pg');
const express = require('express');

const app = express();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const personaController = require('./controllers/personaController');
const tablaController = require('./controllers/tablaController');

app.use(express.json());

// Endpoints
app.get('/api/personas', personaController.obtenerPersonas);
app.get('/api/personas/:id/roles', personaController.obtenerRoles);
app.get('/api/personas/:id/productos', personaController.obtenerProductos);
app.post('/api/personas', personaController.crearPersona);
app.get('/api/tablas/:tabla', tablaController.obtenerTabla);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));