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
    }
  }
  Reserva.init({
    evento_id: DataTypes.INTEGER,
    nombre_usuario: DataTypes.STRING,
    cantidad_boletos: DataTypes.INTEGER,
    fecha_reserva: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Reserva',
  });
  return Reserva;
};