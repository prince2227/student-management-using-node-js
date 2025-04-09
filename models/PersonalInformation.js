// models/PersonalInformation.js
const sequelize = require('../utils/dbconnect');
const Sequelize = require('sequelize');

const PersonalInformation = sequelize.define('PersonalInformation', {
    id: { type: Sequelize.UUID, primaryKey: true, allowNull: false },
    name: { type: Sequelize.STRING, allowNull: false },
    studentId: { type: Sequelize.STRING, allowNull: false },
    dob: { type: Sequelize.DATE, allowNull: false },
    gender: { type: Sequelize.ENUM('Male', 'Female'), allowNull: false },
    address: { type: Sequelize.STRING, allowNull: false },
    postcode: { type: Sequelize.STRING, allowNull: false },
    town: { type: Sequelize.STRING, allowNull: false },
    state: { type: Sequelize.STRING, allowNull: false },
    country: { type: Sequelize.STRING, allowNull: false },
    mobileNo: { type: Sequelize.STRING, allowNull: false }
});

module.exports = PersonalInformation;
