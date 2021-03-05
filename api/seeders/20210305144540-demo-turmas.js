"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "turmas",
      [
        {
          data_inicio: "2020-02-01",
          nivel_id: 1,
          docente_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          data_inicio: "2020-02-01",
          nivel_id: 2,
          docente_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          data_inicio: "2020-02-01",
          nivel_id: 3,
          docente_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          data_inicio: "2020-07-01",
          nivel_id: 3,
          docente_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("turmas", null, {});
  },
};
