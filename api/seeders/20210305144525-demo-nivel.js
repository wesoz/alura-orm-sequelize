"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "niveis",
      [
        {
          descr_nivel: "básico",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          descr_nivel: "intermediário",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          descr_nivel: "avançado",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('niveis', null, {})
  },
};
