// models/ContactInformation.js
const sequelize = require('../utils/dbconnect');
const Sequelize = require('sequelize');

const ContactInformation = sequelize.define('ContactInformation', {
    id: { type: Sequelize.UUID, primaryKey: true, allowNull: false },
    email: { type: Sequelize.STRING, allowNull: false },
    altMobileNo: { type: Sequelize.STRING },
    emergencyContactName: { type: Sequelize.STRING, allowNull: false },
    emergencyContactNumber: { type: Sequelize.STRING, allowNull: false }
});

module.exports = ContactInformation;
