const express = require('express');
const dotenv = require('dotenv');
const eventosRoutes = require('./routes/eventos');
const reservasRoutes = require('./routes/reservas');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/eventos', eventosRoutes);
app.use('/api/reservas', reservasRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));