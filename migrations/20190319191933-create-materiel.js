'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Materiels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idSite: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references : {
          model: 'Sites',
          key: 'id',
        }
      },
      ssiRef: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      nbDm: {
        type: Sequelize.INTEGER
      },
      nbDo: {
        type: Sequelize.INTEGER
      },
      nbDts: {
        type: Sequelize.INTEGER
      },
      nbDtv: {
        type: Sequelize.INTEGER
      },
      nbDmc: {
        type: Sequelize.INTEGER
      },
      nbDf: {
        type: Sequelize.INTEGER
      },
      nbDpa: {
        type: Sequelize.INTEGER
      },
      nbDl: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Materiels');
  }
};