// models/FinancialAssistance.js
const sequelize = require('../utils/dbconnect');
const Sequelize = require('sequelize');

const FinancialAssistance = sequelize.define('FinancialAssistance', {
    id: { type: Sequelize.UUID, primaryKey: true, allowNull: false },
    sponsoredByEmployer: { type: Sequelize.BOOLEAN },
    sponsoredByGovernment: { type: Sequelize.BOOLEAN },
    ptptnMara: { type: Sequelize.BOOLEAN },
    selfFinance: { type: Sequelize.BOOLEAN },
    scholarship: { type: Sequelize.BOOLEAN },
    others: { type: Sequelize.BOOLEAN },
    othersSpecify: { type: Sequelize.STRING }
});

module.exports = FinancialAssistance;
