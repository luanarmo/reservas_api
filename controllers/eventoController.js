const { Evento } = require('../models');

const getAllEventos = async (req, res) => {
    try {
        const rows = await Evento.findAll();
        res.status(200).json(rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al obtener eventos' });
    }
};

const createEvento = async (req, res) => {
    try {
        const { nombre, fecha, ubicacion } = req.body;

        const result = await Evento.create({ nombre, fecha, ubicacion });
        res.status(201).json({ id: result.insertId, nombre, fecha, ubicacion });
    } catch (error) {

        if (error.name === 'SequelizeValidationError') {
            return res.status(400).json({
                message: 'Error de validación',
                errors: error.errors.map(err => err.message) // Extrae los mensajes de error
            });
        }

        res.status(500).json({ message: 'Error al crear evento' });
    }
};

const getEventoById = async (req, res) => {
    try {
        const id = req.params.id;
        const evento = await Evento.findByPk(id);

        if (!evento) {
            res.status(404).json({ message: 'Evento no encontrado' });
        }

        res.json(evento);

    } catch (error) {
        res.status(500).json({ message: 'Error al obtener evento' });
    }
};


const updateEvento = async (req, res) => {
    try {
        const id = req.params.id;
        const { nombre, fecha, ubicacion } = req.body;

        const evento = await Evento.findByPk(id);

        if (!evento) {
            return res.status(404).json({ message: 'Evento no encontrado' });
        }

        await evento.update({ nombre, fecha, ubicacion });

        res.json(evento);

    } catch (error) {
        console.log(error);

        if (error.name === 'SequelizeValidationError') {
            return res.status(400).json({
                message: 'Error de validación',
                errors: error.errors.map(err => err.message) // Extrae los mensajes de error
            });
        }

        res.status(500).json({ message: 'Error al actualizar evento' });
    }
}


const deleteEvento = async (req, res) => {
    try {
        const id = req.params.id;
        const evento = await Evento.findByPk(id);

        if (!evento) {
            return res.status(404).json({ message: 'Evento no encontrado' });
        }

        await evento.destroy();
        res.status(204).json({ message: 'Evento eliminado' });

    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar evento' });
    }
}


module.exports = { getAllEventos, createEvento, getEventoById, updateEvento, deleteEvento };
