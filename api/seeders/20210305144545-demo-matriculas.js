"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "matriculas",
      [
        {
          status: "confirmado",
          estudante_id: 1,
          turma_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          status: "confirmado",
          estudante_id: 2,
          turma_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          status: "confirmado",
          estudante_id: 3,
          turma_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          status: "confirmado",
          estudante_id: 4,
          turma_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          status: "cancelado",
          estudante_id: 1,
          turma_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          status: "cancelado",
          estudante_id: 2,
          turma_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("matriculas", null, {});
  },
};
