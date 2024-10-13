'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Evento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Evento.hasMany(models.Reserva, {
        foreignKey: 'evento_id',
        as: 'reservas'
      });
    }
  }
  Evento.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        is: /^[a-zA-Z\s]+$/i,
        len: [2, 100]
      }
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true,
        notEmpty: true,
        isAfter: new Date().toDateString() // Asegura que la fecha sea en el futuro
      }
    },
    ubicacion: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        is: /^[a-zA-Z\s]+$/i,
        len: [5, 200]
      }
    }
  }, {
    sequelize,
    modelName: 'Evento',
  });
  return Evento;
};