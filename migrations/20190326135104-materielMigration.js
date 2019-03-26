'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

   let migrations = [];
   let listTypes  = ['refDm', 'refDo', 'refDl', 'refDf', 'refDmc', 'refDtv', 'refDpa', 'refDts'];
    listTypes.forEach(element => {
      migrations.push(queryInterface.addColumn(
        'Materiels',
        element,
        {
          type: Sequelize.INTEGER,
          allowNull: false
        }
      ));
    });

    return Promise.all(migrations);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
