// models/EmploymentHistory.js
const sequelize = require('../utils/dbconnect');
const Sequelize = require('sequelize');

const EmploymentHistory = sequelize.define('EmploymentHistory', {
    id: { type: Sequelize.UUID, primaryKey: true, allowNull: false },
    companyName: { type: Sequelize.STRING },
    position: { type: Sequelize.STRING },
    duration: { type: Sequelize.STRING },
    responsibilities: { type: Sequelize.STRING }
});

module.exports = EmploymentHistory;
