const sequelize = require('../utils/dbconnect');
const { Sequelize } = require('sequelize');

const Course = sequelize.define('Course', {
    id: { type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false },
});

module.exports = Course;
