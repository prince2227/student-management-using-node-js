const sequelize = require('../utils/dbconnect');
const Sequelize = require('sequelize');

const empentry = sequelize.define('tblempentry', {
    id: { type: Sequelize.UUID, primaryKey: true, allowNull: false,defaultValue: Sequelize.UUIDV4 },
    empid: { type: Sequelize.STRING, allowNull: false, unique: true },
    firstname: { type: Sequelize.STRING,allowNull: false },
    lastname: { type: Sequelize.STRING, allowNull: false },
    dept: { type: Sequelize.STRING, allowNull: false },
    status: { type: Sequelize.ENUM('Active', 'Inactive'),allowNull: false },
});

module.exports = empentry;