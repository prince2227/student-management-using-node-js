const sequelize = require('../utils/dbconnect');
const { DataTypes } = require('sequelize');

const Month = sequelize.define('Month', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Month;
