const express = require('express');
const { getAllEventos, createEvento, getEventoById, updateEvento, deleteEvento } = require('../controllers/eventoController');

const router = express.Router();

// Crear un evento
router.post('/', createEvento);

// Obtener todos los eventos
router.get('/', getAllEventos);

// Obtener un evento por ID
router.get('/:id', getEventoById);

// Actualizar un evento
router.put('/:id', updateEvento);

// Eliminar un evento
router.delete('/:id', deleteEvento);

module.exports = router;
