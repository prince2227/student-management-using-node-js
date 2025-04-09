const sequelize = require('../utils/dbconnect');
const { DataTypes } = require('sequelize');

const Year = sequelize.define('Year', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    year: { type: DataTypes.INTEGER, allowNull: false },
});

module.exports = Year;
