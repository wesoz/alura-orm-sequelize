'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Matriculas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Matriculas.belongsTo(models.pessoas, { foreignKey: "estudante_id" });
      Matriculas.belongsTo(models.turmas, { foreignKey: "turma_id" });
    }
  };
  Matriculas.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'matriculas',
  });
  return Matriculas;
};