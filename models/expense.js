const sequelize = require('../utils/dbconnect');
const Sequelize = require('sequelize');

const expense = sequelize.define('tblexpense', {
    id: { type: Sequelize.UUID, primaryKey: true, allowNull: false },
    expname: { type: Sequelize.STRING, allowNull: false },
    amt: { type: Sequelize.DOUBLE, allowNull: false },
    expdt: { type: Sequelize.DATEONLY, allowNull: false },
    expcategory: { type: Sequelize.STRING, allowNull: false },

});

module.exports = expense;
