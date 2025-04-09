// models/CompanyInformation.js
const sequelize = require('../utils/dbconnect');
const Sequelize = require('sequelize');

const CompanyInformation = sequelize.define('CompanyInformation', {
    id: { type: Sequelize.UUID, primaryKey: true, allowNull: false },
    companyName: { type: Sequelize.STRING },
    address: { type: Sequelize.STRING },
    postcode: { type: Sequelize.STRING },
    town: { type: Sequelize.STRING },
    state: { type: Sequelize.STRING },
    country: { type: Sequelize.STRING },
    officeNo: { type: Sequelize.STRING },
    mobileNo: { type: Sequelize.STRING }
});

module.exports = CompanyInformation;
