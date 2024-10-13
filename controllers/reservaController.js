const { Evento, Reserva } = require('../models');

const getAllReservas = async (req, res) => {
    try {
        const rows = await Reserva.findAll();
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener reservas' });
    }
};

const createReserva = async (req, res) => {
    try {
        const { evento_id, nombre_usuario, cantidad_boletos, fecha_reserva } = req.body;

        // Verifica si el evento existe
        const evento = await Evento.findByPk(evento_id);
        if (!evento) {
            return res.status(404).json({ message: 'Evento no existe' });
        }

        const result = await Reserva.create({ evento_id, nombre_usuario, cantidad_boletos, fecha_reserva });
        res.status(201).json({ id: result.insertId, evento_id, nombre_usuario, cantidad_boletos, fecha_reserva });
    } catch (error) {
        console.log(error);

        if (error.name === 'SequelizeValidationError') {
            return res.status(400).json({
                message: 'Error de validación',
                errors: error.errors.map(err => err.message) // Extrae los mensajes de error
            });
        }

        res.status(500).json({ message: 'Error al crear reserva' });
    }
};

const getReservaById = async (req, res) => {
    try {
        const id = req.params.id;
        const reserva = await Reserva.findByPk(id);

        if (!reserva) {
            res.status(404).json({ message: 'Reserva no encontrada' });
        }

        res.json(reserva);

    } catch (error) {
        res.status(500).json({ message: 'Error al obtener reserva' });
    }
};


const updateReserva = async (req, res) => {
    try {
        const id = req.params.id;
        const { evento_id, nombre_usuario, cantidad_boletos, fecha_reserva } = req.body;

        // Verifica si la reserva existe
        const reserva = await Reserva.findByPk(id);
        if (!reserva) {
            return res.status(404).json({ message: 'Reserva no encontrada' });
        }

        // verifica si el evento existe
        const evento = await Evento.findByPk(evento_id);
        if (!evento) {
            return res.status(404).json({ message: 'Evento no existe' });
        }

        // Actualiza la reserva
        await reserva.update({ evento_id, nombre_usuario, cantidad_boletos, fecha_reserva });

        res.json({ id, evento_id, nombre_usuario, cantidad_boletos, fecha_reserva });

    } catch (error) {

        if (error.name === 'SequelizeValidationError') {
            return res.status(400).json({
                message: 'Error de validación',
                errors: error.errors.map(err => err.message) // Extrae los mensajes de error
            });
        }

        res.status(500).json({ message: 'Error al actualizar reserva' });
    }
};


const deleteReserva = async (req, res) => {
    try {

        const id = req.params.id;
        const reserva = await Reserva.findByPk(id);

        // Verifica si la reserva existe
        if (!reserva) {
            return res.status(404).json({ message: 'Reserva no encontrada' });
        }

        await reserva.destroy();
        res.status(204).json({ message: 'Reserva eliminada' });


    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar reserva' });
    }
};

module.exports = { getAllReservas, createReserva, getReservaById, updateReserva, deleteReserva };
