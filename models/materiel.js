'use strict';
module.exports = (sequelize, DataTypes) => {
  const Materiel = sequelize.define('Materiel', {
    idSite: DataTypes.INTEGER,
    ssiRef: DataTypes.INTEGER,
    nbDm: DataTypes.INTEGER,
    nbDo: DataTypes.INTEGER,
    nbDts: DataTypes.INTEGER,
    nbDtv: DataTypes.INTEGER,
    nbDmc: DataTypes.INTEGER,
    nbDf: DataTypes.INTEGER,
    nbDpa: DataTypes.INTEGER,
    nbDl: DataTypes.INTEGER
  }, {});
  Materiel.associate = function(models) {
    // associations can be defined here

    /*models.Materiel.belongsTo(models.Site,{
      foreignKey: {
        allowNull: false
      }
    });*/
  };
  return Materiel;
};