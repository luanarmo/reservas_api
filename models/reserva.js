'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reserva extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Reserva.belongsTo(models.Evento, {
        foreignKey: 'evento_id',
        as: 'evento'
      });
    }
  }
  Reserva.init({
    evento_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Eventos',
        key: 'id'
      }
    },
    nombre_usuario: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        is: /^[a-zA-Z\s]+$/i,
        len: [2, 100]
      }
    },
    cantidad_boletos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
        notEmpty: true,
        min: 1
      }
    },
    fecha_reserva: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      validate: {
        isDate: true,
        notEmpty: true,
        isAfter: new Date().toDateString() // Asegura que la fecha sea en el futuro
      }
    }
  }, {
    sequelize,
    modelName: 'Reserva',
  });
  return Reserva;
};