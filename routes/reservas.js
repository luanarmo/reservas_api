const express = require('express');
const { getAllReservas, createReserva, getReservaById, updateReserva, deleteReserva } = require('../controllers/reservaController');


const router = express.Router();

// Crear una reserva
router.post('/', createReserva)

// Obtener todas las reservas
router.get('/', getAllReservas)

// Obtener una reserva por ID
router.get('/:id', getReservaById)

// Actualizar una reserva
router.put('/:id', updateReserva)

// Eliminar una reserva
router.delete('/:id', deleteReserva)

module.exports = router;
