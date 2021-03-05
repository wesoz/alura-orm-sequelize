'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('matriculas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      estudante_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'pessoas', key: 'id' }
      },
      turma_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'turmas', key: 'id' }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('matriculas');
  }
};