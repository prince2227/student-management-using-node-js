// models/Declaration.js
const sequelize = require('../utils/dbconnect');
const Sequelize = require('sequelize');

const Declaration = sequelize.define('Declaration', {
    id: { type: Sequelize.UUID, primaryKey: true, allowNull: false },
    applicantName: { type: Sequelize.STRING, allowNull: false },
    nircPassportNo: { type: Sequelize.STRING, allowNull: false },
    applicantSignature: { type: Sequelize.STRING, allowNull: false },
    applicantDate: { type: Sequelize.DATE, allowNull: false }
});

module.exports = Declaration;
