'use strict';

module.exports = {
   up (queryInterface, Sequelize) { // o que será realizado no BD
    return queryInterface.createTable('users', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      idade: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      email:{
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }

    });
  },
   down (queryInterface, Sequelize) {//o que será realizado se a migration for desfeita em casos errados
    return queryInterface.dropTable('users');
     
  }
};
